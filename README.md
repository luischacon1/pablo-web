# pablo-web

Web personal de Pablo Fernández Chacón con interfaz de iMessage: el visitante chatea con Pablo,
va descubriendo capítulos con fotos (ICON, ventas, el podcast, Rotterdam…) y una IA con su contexto
responde a lo que no está guionizado. Basada en la web de Luis (github.com/luischacon1/CV_landing).

## Arrancar

```bash
npm install
cp .env.example .env.local   # pon tu OPENAI_API_KEY
npm run dev
```

## Dónde está cada cosa

- `src/app/content/chapters.js` — el guion: intro y capítulos (textos, fotos, enlaces, vídeo).
- `src/app/content/profile.js` — nombre, foto, enlaces, email.
- `src/app/api/chat/prompt.js` — lo que sabe la IA sobre Pablo. Actualízalo cuando pase algo nuevo.
- `src/app/api/chat/route.js` — llamada a OpenAI en streaming con historial.
- `src/app/components/` — `Chat` (orquestación), `Message`, `Composer`, `Sidebar`, `Lightbox`.
- `public/media/` — fotos optimizadas (WebP ≤1400px) y el reel.

## Variables de entorno

- `OPENAI_API_KEY` — obligatoria para que la IA responda.
- `OPENAI_MODEL` — opcional, por defecto `gpt-5-mini`.
