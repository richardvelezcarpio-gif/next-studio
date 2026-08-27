import type { AiDiagnosis, Answers, DiagnosisLocale, LocalDiagnosis } from "@/lib/business-diagnosis";

export const DIAGNOSIS_RESULT_STORAGE_KEY = "nextstudio_ai_diagnosis_result";

export type DiagnosisResultCategory = {
  key: "website" | "googlePresence" | "socialMedia" | "leadGeneration" | "automation" | "customerFollowUp" | "onlineReputation";
  score: number;
};

export type DiagnosisResult = {
  id: string;
  completedAt: string;
  locale: DiagnosisLocale;
  language: DiagnosisLocale;
  country?: string;
  industry?: string;
  overallScore: number;
  categories: DiagnosisResultCategory[];
  strengths: string[];
  opportunities: string[];
  criticalIssues: string[];
  recommendations: string[];
  answers: Answers;
  aiDiagnosis?: AiDiagnosis;
};

export function createDiagnosisId(date = new Date()) {
  const two = (value: number) => String(value).padStart(2, "0");
  const stamp = `${two(date.getMonth() + 1)}${two(date.getDate())}${String(date.getFullYear()).slice(-2)}`;
  const random = String(Math.floor(1000 + Math.random() * 9000));
  return `NS-${stamp}-${random}`;
}

export function buildDiagnosisResult({ locale, answers, local, ai }: {
  locale: DiagnosisLocale;
  answers: Answers;
  local: LocalDiagnosis;
  ai: AiDiagnosis | null;
}): DiagnosisResult {
  const byKey = new Map(local.categories.map(category => [category.key, category.score]));
  const category = (key: DiagnosisResultCategory["key"], source: string): DiagnosisResultCategory => ({ key, score: byKey.get(source) ?? 0 });
  const opportunities = ai?.opportunities.map(item => `${item.title}: ${item.action}`) ?? local.priorities;
  const recommendations = ai?.recommendedServices.map(item => `${item.service}: ${item.reason}`) ?? local.priorities;
  return {
    id: createDiagnosisId(),
    completedAt: new Date().toISOString(),
    locale,
    language: locale,
    industry: answers.industry,
    overallScore: local.totalScore,
    categories: [
      category("website", "website"),
      category("googlePresence", "google"),
      category("socialMedia", "social"),
      category("leadGeneration", "leads"),
      category("automation", "automation"),
      category("customerFollowUp", "followup"),
      category("onlineReputation", "reviews"),
    ],
    strengths: local.strengths,
    opportunities,
    criticalIssues: ai?.criticalProblems ?? local.issues,
    recommendations,
    answers,
    ...(ai ? { aiDiagnosis: ai } : {}),
  };
}

export function isDiagnosisResult(value: unknown): value is DiagnosisResult {
  if (!value || typeof value !== "object") return false;
  const result = value as Partial<DiagnosisResult>;
  return typeof result.id === "string"
    && (result.locale === "en" || result.locale === "es")
    && typeof result.overallScore === "number"
    && Array.isArray(result.categories)
    && Boolean(result.answers && typeof result.answers === "object");
}
