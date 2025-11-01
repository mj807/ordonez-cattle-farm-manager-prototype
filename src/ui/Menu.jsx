import React from "react";
import { Link } from "react-router-dom";

const Tile = ({ to, title, emoji, desc }) => (
  <Link to={to} className="block rounded-2xl p-5 bg-stone-800/60 border border-ranchGold/20 hover:border-ranchGold/60 transition" style={{boxShadow: "var(--shadow-card)"}}>
    <div className="text-2xl">{emoji}</div>
    <div className="mt-2 font-display text-xl">{title}</div>
    <div className="text-sm text-ranchGold/80">{desc}</div>
  </Link>
);

export default function Menu() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <Tile to="/inventory" title="Inventario del Ganado" emoji="🐂" desc="Registro con cámara, peso, estado y ubicación" />
      <Tile to="/feeding" title="Alimentación" emoji="🌾" desc="Raciones por lote, consumo y costos" />
      <Tile to="/health" title="Sanidad y Vacunación" emoji="💉" desc="Historial, recordatorios y tratamientos" />
      <Tile to="/breeding" title="Reproducción" emoji="🐄🐂" desc="Montas, partos, crías y genealogía básica" />
      <Tile to="/sales" title="Ventas" emoji="💰" desc="Salidas, precios, comprador y fecha" />
      <Tile to="/reports" title="Reportes" emoji="📊" desc="Indicadores y exportación" />
      <Tile to="/about" title="Sobre Nosotros" emoji="📜" desc="Historia, misión y valores" />
      <Tile to="/web-panel" title="Panel Web" emoji="🖥️" desc="Dashboard administrativo (vista demo)" />
    </div>
  );
}
