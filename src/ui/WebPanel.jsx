import React from "react";
export default function WebPanel() {
  return (
    <div className="rounded-2xl p-6 bg-stone-800/60 border border-ranchGold/30 space-y-2">
      <h2 className="font-display text-2xl">Panel Web Administrativo (Demo)</h2>
      <p className="text-ranchGold/80">Misión y Valores</p>
      <blockquote className="border-l-4 border-ranchGold/60 pl-3 italic text-ranchGold/90">
        “El éxito de una ganadería está en la constancia y el respeto por cada animal.”
        <div className="mt-1">— <b>Marlon Jahaziel Ordóñez Vallecillo</b>, Fundador</div>
      </blockquote>
      <div className="pt-4 text-center text-xs text-ranchGold/90">
        Desde el corazón ganadero de Honduras<br/>
        🇭🇳🇨🇦 Operando con orgullo desde Honduras y Canadá
      </div>
    </div>
  );
}
