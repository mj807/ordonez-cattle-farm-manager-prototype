import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-stone-900 text-ranchIvory body-bg">
      <header className="w-full">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Ordoñez Cattle Farms" className="h-10 w-10 rounded-full object-cover border border-ranchGold/60" />
            <div>
              <div className="font-display text-lg tracking-wide">Ordoñez Cattle Farms</div>
              <div className="text-xs text-ranchGold/80 italic">Desde el corazón ganadero de Honduras</div>
            </div>
          </div>
          <nav className="hidden md:flex gap-4 text-sm">
            <Link to="/" className={`hover:underline ${location.pathname === "/" ? "text-ranchGold" : ""}`}>Inicio</Link>
            <Link to="/menu" className={`hover:underline ${location.pathname.startsWith("/menu") ? "text-ranchGold" : ""}`}>Menú</Link>
            <Link to="/reports" className={`hover:underline ${location.pathname.startsWith("/reports") ? "text-ranchGold" : ""}`}>Reportes</Link>
            <Link to="/about" className={`hover:underline ${location.pathname.startsWith("/about") ? "text-ranchGold" : ""}`}>Sobre Nosotros</Link>
            <Link to="/web-panel" className={`hover:underline ${location.pathname.startsWith("/web-panel") ? "text-ranchGold" : ""}`}>Panel Web</Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-6">
        <Outlet />
      </main>
      <footer className="mt-12">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-ranchGold/90">
          <div>🇭🇳🇨🇦 Operando con orgullo desde Honduras y Canadá</div>
          <div>© 2025 Ordoñez Cattle Farms. Todos los derechos reservados.</div>
        </div>
      </footer>
    </div>
  );
}
