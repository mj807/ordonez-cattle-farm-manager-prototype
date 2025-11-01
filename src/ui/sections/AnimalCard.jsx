import React from "react";
import { useParams, Link } from "react-router-dom";

export default function AnimalCard() {
  const { id } = useParams();
  // Demo data; in real app, fetch by id
  const a = { id, sexo: "Hembra", raza: "Brahman", peso: 420, ubicacion: "Corral 1", salud: "Óptima", notas: "Ganancia de peso estable." };

  return (
    <div className="space-y-4">
      <Link to="/inventory" className="text-sm underline text-ranchGold/90">← Volver al inventario</Link>
      <div className="rounded-2xl p-6 bg-stone-800/60 border border-ranchGold/30">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl">Animal {a.id}</h2>
          <div className="text-sm bg-ranchBrown/60 px-3 py-1 rounded">Ficha individual</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <div>Raza: <b>{a.raza}</b></div>
            <div>Sexo: <b>{a.sexo}</b></div>
            <div>Peso actual: <b>{a.peso} kg</b></div>
            <div>Ubicación: <b>{a.ubicacion}</b></div>
            <div>Salud: <b>{a.salud}</b></div>
          </div>
          <div>
            <div className="text-sm text-ranchGold/80">Observaciones</div>
            <div className="p-3 mt-1 rounded bg-stone-900/60">{a.notas}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
