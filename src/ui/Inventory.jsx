import React, { useState } from "react";
import { Link } from "react-router-dom";

const mockCattle = [
  { id: "A-001", sexo: "Hembra", raza: "Brahman", peso: 420, ubicacion: "Corral 1", salud: "Óptima" },
  { id: "A-002", sexo: "Macho", raza: "Angus", peso: 510, ubicacion: "Corral 2", salud: "Óptima" },
  { id: "A-003", sexo: "Macho", raza: "Brangus", peso: 470, ubicacion: "Pradera Norte", salud: "Observación" },
];

export default function Inventory() {
  const [list, setList] = useState(mockCattle);
  const [photoPreview, setPhotoPreview] = useState(null);

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      // We won't implement full capture here; this is a prototype indicator
      alert("Cámara abierta (demo). En la versión final se tomará la foto y se asociará al animal.");
      stream.getTracks().forEach(t => t.stop());
    } catch (e) {
      alert("No se pudo acceder a la cámara. Conceda permisos o use un dispositivo con cámara.");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl">Inventario del Ganado</h2>
        <button onClick={openCamera} className="px-4 py-2 rounded-lg border border-ranchGold/60 hover:bg-ranchBrown/50">📸 Tomar foto (demo)</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((a) => (
          <Link key={a.id} to={`/inventory/${a.id}`} className="rounded-xl p-4 bg-stone-800/60 border border-ranchGold/20 hover:border-ranchGold/60">
            <div className="text-sm text-ranchGold/80">ID: {a.id}</div>
            <div className="font-display text-xl">{a.raza} • {a.sexo}</div>
            <div className="text-sm">Peso: {a.peso} kg</div>
            <div className="text-sm">Ubicación: {a.ubicacion}</div>
            <div className="text-sm">Salud: {a.salud}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
