import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function chime() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";
    o.frequency.setValueAtTime(880, ctx.currentTime);
    g.gain.setValueAtTime(0.0001, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.05);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6);
    o.connect(g); g.connect(ctx.destination); o.start();
    o.frequency.exponentialRampToValueAtTime(660, ctx.currentTime + 0.35);
    o.stop(ctx.currentTime + 0.7);
  } catch {}
}

export default function Welcome() {
  const navigate = useNavigate();
  useEffect(() => {
    chime();
    const t = setTimeout(() => navigate("/menu"), 3000);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div className="rounded-2xl p-8 md:p-12 bg-wood-dark shadow-2xl" style={{boxShadow: "var(--shadow-card)"}}>
      <div className="flex flex-col items-center text-center gap-4">
        <img src="/logo.jpg" alt="Ordoñez Cattle Farms" className="h-24 w-24 rounded-full object-cover border-2 border-ranchGold/70 shadow" />
        <h1 className="font-display text-2xl md:text-3xl">Presentado por Ordoñez Cattle Farms</h1>
        <p className="text-ranchGold/90 italic">“Tradición, Calidad y Ganadería de Excelencia”</p>
        <p className="text-xs text-ranchGold/80">Desde el corazón ganadero de Honduras</p>
        <div className="mt-6 text-sm bg-ranchBrown/60 px-4 py-2 rounded-full border border-ranchGold/40">Ordoñez Cattle Farm Manager – Prototype v1.0</div>
        <button onClick={() => navigate("/menu")} className="mt-6 px-5 py-3 rounded-full border border-ranchGold/60 hover:bg-ranchBrown/50 transition">
          Entrar al Rancho
        </button>
      </div>
    </div>
  );
}
