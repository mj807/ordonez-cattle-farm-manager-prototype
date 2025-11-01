import React from "react";
export default function About() {
  return (
    <div className="rounded-2xl p-6 bg-stone-800/60 border border-ranchGold/30 space-y-3">
      <h2 className="font-display text-2xl">Sobre Nosotros</h2>
      <p>Ordoñez Cattle Farms impulsa la ganadería con tradición y calidad.</p>
      <blockquote className="border-l-4 border-ranchGold/60 pl-3 italic text-ranchGold/90">
        “El éxito de una ganadería está en la constancia y el respeto por cada animal.”
        <div className="mt-1">— <b>Marlon Jahaziel Ordóñez Vallecillo</b>, Fundador</div>
      </blockquote>
      <div className="text-xs text-ranchGold/80">Ordoñez Cattle Farm Manager – Prototype v1.0</div>
    </div>
  );
}
