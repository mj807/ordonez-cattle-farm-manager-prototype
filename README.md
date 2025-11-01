# Ordoñez Cattle Farm Manager – Prototype v1.0

Mockup interactivo (React + Vite + Tailwind) listo para publicar en Vercel.

## 🚀 Pasos rápidos (no necesitas ser desarrollador)

1) **Descarga este ZIP** y descomprímelo.
2) Crea una cuenta en **Vercel** (gratuita) en https://vercel.com
3) En Vercel, pulsa **"New Project" → "Import"** y arrastra la carpeta del proyecto.
4) Cuando te pregunte los comandos, Vercel detectará automáticamente:
   - `npm install`
   - `npm run build`
   - Output: `dist`
5) Pulsa **Deploy**. Obtendrás tu **URL privada** en 1-2 minutos.

### Alternativa local (opcional)
- Instala Node.js 18+
- Abre una terminal en la carpeta del proyecto y ejecuta:
```
npm install
npm run dev
```
Abre el enlace que te muestre (por ejemplo `http://localhost:5173`).

## 📁 Estructura
- `src/ui/Welcome.jsx` → Pantalla de bienvenida (con campanillas y “Entrar al Rancho”)
- `src/ui/Menu.jsx` → Menú principal
- `src/ui/Inventory.jsx` y `src/ui/sections/AnimalCard.jsx` → Inventario y ficha
- `src/ui/Feeding.jsx`, `Health.jsx`, `Breeding.jsx`, `Sales.jsx`, `Reports.jsx` → Módulos (demo)
- `src/ui/About.jsx` → Sobre Nosotros (incluye cita del fundador)
- `src/ui/WebPanel.jsx` → Panel Web (demo) con frases y banderas

## 🔊 Sonido
Para cumplir con tu solicitud **sin archivos externos**, el prototipo usa **WebAudio** para
generar una campanilla breve (inicio/cierre). En la app final se pueden usar archivos .mp3.

## 🖼️ Logo
El archivo `public/logo.jpg` se usa en toda la app. Puedes reemplazarlo por otro con el mismo nombre.

## 📌 Nota
Este es un prototipo visual interactivo. Falta conectar una base de datos real,
roles, cámara de captura real y exportaciones. Se agregan en la siguiente fase.
