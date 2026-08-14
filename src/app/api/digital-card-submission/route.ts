import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type FilePayload = { name: string; type: string; data: string };

const recipient = "nextprintny@gmail.com";
const allowedTypes = new Set(["image/jpeg", "image/png", "image/webp"]);
const maxFileBytes = 4 * 1024 * 1024;
const maxAttachmentBytes = 15 * 1024 * 1024;
const requests = new Map<string, number>();

const text = (value: unknown, limit = 4_000) =>
  typeof value === "string" ? value.replace(/[<>]/g, "").trim().slice(0, limit) : "";

const html = (value: unknown) =>
  text(value).replace(/&/g, "&amp;").replace(/\n/g, "<br>");

function attachment(file: FilePayload, label: string, submissionId: string) {
  if (!file || !allowedTypes.has(file.type) || !file.data.startsWith("data:")) {
    throw new Error("Invalid attachment");
  }

  const encoded = file.data.split(",")[1];
  if (!encoded) throw new Error("Invalid attachment data");

  const content = Buffer.from(encoded, "base64");
  if (!content.length || content.length > maxFileBytes) throw new Error("Attachment is too large");

  const extension = file.type === "image/jpeg" ? "jpg" : file.type === "image/png" ? "png" : "webp";
  const safeLabel = label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  return { filename: `${submissionId}-${safeLabel}.${extension}`, content, contentType: file.type };
}

function rows(heading: string, fields: [string, unknown][]) {
  return `<h2>${heading}</h2><table>${fields
    .map(([key, value]) => `<tr><td><strong>${key}</strong></td><td>${Array.isArray(value) ? value.map(html).filter(Boolean).join(", ") : html(value) || "—"}</td></tr>`)
    .join("")}</table>`;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";
  if (Date.now() - (requests.get(ip) ?? 0) < 20_000) {
    return NextResponse.json({ error: "Please wait before submitting again." }, { status: 429 });
  }
  requests.set(ip, Date.now());

  try {
    const body = await request.json();
    const data = body.data ?? {};
    const gmailUser = process.env.GMAIL_USER;
    const gmailPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailPassword) throw new Error("Gmail SMTP is not configured");
    if (
      text(data.websiteTrap) ||
      !text(data.firstName) ||
      !text(data.lastName) ||
      !text(data.company) ||
      !text(data.phone) ||
      !/^\S+@\S+\.\S+$/.test(text(data.email)) ||
      data.consent !== true
    ) {
      return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
    }

    const submissionId = /^DC-\d{8}-[A-Z0-9]{4}$/.test(text(body.submissionId))
      ? text(body.submissionId)
      : `DC-${new Date().toISOString().slice(0, 10).replaceAll("-", "")}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
    const files = body.files ?? {};
    const attachments = [
      ...(files.profile ? [attachment(files.profile, "profile", submissionId)] : []),
      ...(files.logo ? [attachment(files.logo, "logo", submissionId)] : []),
      ...((Array.isArray(files.images) ? files.images : []).slice(0, 3).map((file: FilePayload, index: number) => attachment(file, `image-${String(index + 1).padStart(2, "0")}`, submissionId))),
    ];
    const totalAttachmentBytes = attachments.reduce((total, file) => total + file.content.length, 0);
    if (totalAttachmentBytes > maxAttachmentBytes) {
      return NextResponse.json({ error: "Attachments are too large." }, { status: 413 });
    }

    const features = Array.isArray(data.features) ? data.features.map(text).filter(Boolean).join(", ") || "—" : "—";
    const message = `<div style="font-family:Arial,sans-serif;color:#082851;max-width:720px"><p style="color:#0768e8;font-weight:800;letter-spacing:.08em">NEW DIGITAL CARD CLIENT</p><h1>${html(data.firstName)} ${html(data.lastName)}</h1><p><strong>Submission ID:</strong> ${submissionId}<br><strong>Submission date:</strong> ${new Date().toLocaleString("en-US")}</p>${rows("PERSONAL INFORMATION", [["First Name", data.firstName], ["Last Name", data.lastName], ["Professional Title", data.title], ["Company", data.company], ["Business Slogan", data.slogan]])}${rows("CONTACT INFORMATION", [["Phone", data.phone], ["WhatsApp", data.whatsapp], ["Email", data.email], ["Address", data.address], ["City", data.city], ["State", data.state], ["ZIP", data.zip], ["Country", data.country], ["Website", data.website]])}${rows("SOCIAL MEDIA", [["Facebook", data.facebook], ["Instagram", data.instagram], ["TikTok", data.tiktok], ["LinkedIn", data.linkedin], ["YouTube", data.youtube], ["X / Twitter", data.twitter], ["Other", data.otherSocial]])}${rows("BUSINESS INFORMATION", [["Description", data.description], ["Services", data.services], ["Business Hours", data.hours], ["Service Area", data.serviceArea], ["Languages", data.spokenLanguages], ["Digital Card Language", data.cardLanguage], ["Selected Features", features]])}${rows("BRANDING", [["Primary Color", data.primaryColor], ["Secondary Color", data.secondaryColor], ["Design Notes", data.designNotes], ["Next Studio Design Freedom", data.designFreedom ? "Yes" : "No"]])}<h2>FILES</h2>${attachments.length ? `<ul>${attachments.map((file) => `<li>${file.filename}</li>`).join("")}</ul>` : "<p>No files uploaded.</p>"}</div>`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPassword },
    });
    await transporter.sendMail({
      from: gmailUser,
      to: recipient,
      replyTo: text(data.email),
      subject: `New Digital Card Client — ${text(data.firstName)} ${text(data.lastName)} — ${text(data.company)}`,
      html: message,
      attachments,
    });

    return NextResponse.json({ submissionId });
  } catch (error) {
    console.error("digital-card-submission", error);
    return NextResponse.json({ error: "Submission could not be sent." }, { status: 500 });
  }
}
