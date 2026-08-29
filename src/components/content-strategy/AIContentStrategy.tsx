"use client";

import { useEffect } from "react";

export function AIContentStrategy({ locale }: { locale: "es" | "en" }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/ai-content-strategy/v4.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { script.remove(); document.body.style.overflow = ""; };
  }, []);

  return <div id="contentStrategyApp" className="contentStrategyPage" data-language={locale}>
    <div className="glow g1"/><div className="glow g2"/>
    <main className="shell">
      <header className="toolHeader"><div className="brand"><div className="mark">N</div><div><b>NEXT STUDIO</b><span>AI Content Strategy</span></div></div><div className="right"><span className="status">● AI STRATEGY SYSTEM</span><div className="langs"><button id="es" className={locale === "es" ? "on" : ""}>ES</button><button id="en" className={locale === "en" ? "on" : ""}>EN</button></div></div></header>
      <section className="hero"><div className="heroCopy"><span className="kicker" data-i="kicker">✦ ESTRATEGIA INTELIGENTE DE CONTENIDO</span><h1 data-i="hero">Convierte contenido<br/><em>en estrategia.</em></h1><p data-i="sub">Diseña publicaciones con intención: atraer atención, construir autoridad, generar confianza y convertir oportunidades.</p><div className="chips"><span data-i="c1">01 · Objetivo</span><span data-i="c2">02 · Cliente</span><span data-i="c3">03 · Mensaje</span><span data-i="c4">04 · Conversión</span></div></div><aside className="advisor"><div className="orb"><span>AI</span></div><small>AI STRATEGY ADVISOR</small><h2 data-i="adtitle">No publiques por publicar.</h2><p data-i="adtext">Cada contenido debe tener una función dentro del recorrido del cliente.</p><div className="flow"><span data-i="f1">ATRAER</span><i>→</i><span data-i="f2">CONECTAR</span><i>→</i><span data-i="f3">CONVERTIR</span></div></aside></section>
      <section className="panel"><div className="panelHead"><div><span className="kicker" data-i="setup">CONFIGURA LA ESTRATEGIA</span><h2 data-i="setupTitle">¿Qué queremos lograr?</h2></div><span className="step">STRATEGY / 01</span></div><div className="form"><label><span data-i="industry">Industria</span><select id="industry"/></label><label><span data-i="objective">Objetivo</span><select id="objective"/></label><label><span data-i="platform">Plataforma</span><select id="platform"/></label><label><span data-i="period">Período de estrategia</span><select id="periodSelect"/></label><label><span data-i="audience">Cliente ideal</span><input id="audience" data-ph="audiencePh" placeholder="Ej. Dueños de restaurantes"/></label><label className="wide"><span data-i="offer">Servicio / oferta a impulsar</span><input id="offer" data-ph="offerPh" placeholder="Ej. Website + sistema de pedidos"/></label><button id="generate" className="generate" data-i="generate">✦ CREAR ESTRATEGIA</button></div></section>
      <section id="result" className="results"><div className="resultHead"><div><span className="kicker" data-i="plan">PLAN ESTRATÉGICO</span><h2 data-i="planTitle">Ruta de contenido recomendada</h2></div><span className="signal">AI SIGNAL · READY</span></div><div id="notice" className="notice" role="status" aria-live="polite"/><div id="overview" className="overview"/><div id="cards" className="cards"/></section>
      <section className="architecture"><span className="kicker" data-i="architecture">ARQUITECTURA DE CONVERSIÓN</span><div className="journey"><div><b>01</b><strong data-i="j1">Atracción</strong><span data-i="j1s">Detener el scroll</span></div><i>→</i><div><b>02</b><strong data-i="j2">Valor</strong><span data-i="j2s">Enseñar algo útil</span></div><i>→</i><div><b>03</b><strong data-i="j3">Confianza</strong><span data-i="j3s">Demostrar capacidad</span></div><i>→</i><div><b>04</b><strong data-i="j4">Conversión</strong><span data-i="j4s">Provocar acción</span></div></div></section>
    </main>
    <div id="postModal" className="modal" aria-hidden="true"><div className="modalBackdrop" data-close/><section className="postPanel" role="dialog" aria-modal="true" aria-labelledby="postTitle"><aside className="studioSidebar"><div className="studioBrand"><b>N</b><span>NEXT STUDIO</span></div><nav><span>⌁ Strategy</span><span>▦ Calendar</span><span className="active">✦ Post Studio</span><span>◷ History</span><span>◇ Brands</span><span>⚙ Settings</span><span>? Help</span></nav></aside><div className="studioMain"><button className="modalClose" data-close aria-label={locale === "es" ? "Cerrar" : "Close"}>×</button><header className="studioHeader"><div><span className="kicker">AI POST STUDIO</span><h2 id="postTitle"/></div><div id="studioMeta" className="studioMeta"/></header><div id="postStatus" className="notice" role="status"/><div id="postBody"/></div></section></div>
  </div>;
}
