// Guion de la conversación. Cada capítulo se dispara cuando el visitante
// toca una sugerencia (o escribe algo muy parecido). Los mensajes de Pablo
// se van "escribiendo" uno a uno con el indicador de escritura entre medias.
//
// Tono: humilde y tranquilo, de pasada. Las cosas se cuentan porque vienen
// a cuento, no para presumir, y sin quitarse mérito.
//
// FOTOS: las referencias P("nombre", w, h, alt) apuntan a /public/media.
// Las que aún no existen están marcadas con TODO; hasta que lleguen, el
// capítulo se muestra sin esa foto (ver filtro al final del archivo).
//
// Tipos de mensaje: text | photos | video | link | contact

const P = (name, w, h, alt) => ({ src: `/media/${name}.webp`, w, h, alt });

export const intro = [
  { kind: "text", text: "hola 👋" },
  { kind: "text", text: "soy pablo" },
  { kind: "photos", photos: [P("pablo-retrato", 933, 1400, "Pablo, retrato")] }, // TODO foto
  {
    kind: "text",
    text: "gracias por entrar. esto es un chat conmigo: pregúntame lo que quieras o toca alguna de las sugerencias de abajo",
  },
  {
    kind: "text",
    text: "ahora mismo llevo el equipo de ventas de ICON, una escuela para la industria de la música, y estoy de Erasmus en Rotterdam terminando la carrera. lo demás te lo cuento si te apetece",
  },
  {
    kind: "text",
    text: "(te contesta una IA con mi contexto. acierta bastante)",
  },
];

export const chapters = [
  {
    id: "icon",
    chip: "¿Qué haces en ICON?",
    row: { title: "ICON", preview: "de primer comercial a llevar el equipo" },
    messages: [
      { kind: "text", text: "ICON es una escuela para la gente que quiere trabajar en la industria de la música. las clases las dan los que están dentro: ejecutivos de Universal, Sony y Warner, ganadores de Latin Grammy, managers" },
      { kind: "text", text: "entré en noviembre de 2025 como el primer comercial de la empresa. literalmente: yo y un teléfono" },
      { kind: "photos", photos: [P("icon-equipo", 1400, 1050, "Pablo con el equipo de ICON")] }, // TODO foto
      { kind: "text", text: "los primeros meses fueron llamar, cualificar, hacer las primeras matrículas y apuntar lo que funcionaba. eso acabó siendo el playbook de ventas" },
      { kind: "text", text: "a los tres meses me pasaron a jornada completa para montar el equipo. hoy somos cinco entre setters y closers, con el proceso en HubSpot y una regla: nadie espera más de cinco minutos a que le llamemos" },
      { kind: "text", text: "en la ampliación de capital de 2026 entré como socio. invertí parte de lo que había ganado y me dieron participaciones por el trabajo hecho. no es algo que esperase con 21 años" },
      {
        kind: "link",
        link: {
          url: "https://iconmbs.com",
          domain: "iconmbs.com",
          title: "ICON Music Business School",
          description: "Fórmate con los profesionales que están dentro de la industria.",
          image: "/media/icon-logo.png",
          imageFit: "contain",
        },
      },
    ],
  },
  {
    id: "ventas",
    chip: "¿Por qué ventas?",
    row: { title: "Vender", preview: "las ventas me encontraron a mí" },
    messages: [
      { kind: "text", text: "me gusta hacer cosas y conocer gente. las ventas son básicamente eso, así que creo que me encontraron ellas a mí" },
      { kind: "text", text: "empecé en Spine Consulting, una agencia de marketing para pymes. 90 llamadas en frío al día y campañas de Google Ads para traer leads. conseguimos 32 clínicas nuevas" },
      { kind: "text", text: "el verano de 2024 estuve en ACOM vendiendo contratos de luz por teléfono. el trabajo más duro que he hecho y el que más me enseñó. en agosto me dieron el premio al mejor vendedor del mes" },
      { kind: "text", text: "lo que he aprendido: un buen proceso gana a un buen pitch. y que la gente te compra cuando entiende que la has escuchado" },
    ],
  },
  {
    id: "inedito",
    chip: "El podcast",
    row: { title: "Inédito Podcast", preview: "70 episodios con mi hermano", image: "/media/inedito-logo.png", logo: true },
    messages: [
      { kind: "text", text: "entre 2024 y 2025 ayudé a mi hermano Luis con Inédito, un podcast de entrevistas. él preguntaba, yo me encargaba de que todo lo demás pasara" },
      { kind: "text", text: "decidíamos juntos a qué invitados ir a buscar y en qué orden, yo cerraba las agendas y coordinaba edición y redes para que cada semana saliera el episodio y sus clips sin fallar uno" },
      {
        kind: "link",
        link: {
          url: "https://youtu.be/YNAptmPaGHk",
          domain: "youtube.com",
          title: "Julissa Reynoso, embajadora de EE. UU. en España",
          description: "Inédito Podcast",
          image: "https://img.youtube.com/vi/YNAptmPaGHk/hqdefault.jpg",
        },
      },
      {
        kind: "link",
        link: {
          url: "https://www.youtube.com/watch?v=mUqx8NFBc54&t=31s",
          domain: "youtube.com",
          title: "Federico Linares, presidente de EY España",
          description: "Inédito Podcast",
          image: "https://img.youtube.com/vi/mUqx8NFBc54/hqdefault.jpg",
        },
      },
      { kind: "text", text: "70 episodios y 45.000 suscriptores después, lo que me quedé fue cómo se organiza un equipo de contenido para que publique todos los días" },
    ],
  },
  {
    id: "estudios",
    chip: "¿Qué estudias?",
    row: { title: "Universidad", preview: "Sevilla, Madrid y ahora Rotterdam" },
    messages: [
      { kind: "text", text: "Marketing e Investigación de Mercados en la Universidad de Sevilla. tres matrículas de honor por el camino, entre ellas Economía Internacional" },
      { kind: "text", text: "el año pasado hice un SICUE en la Rey Juan Carlos, en Madrid, y este semestre estoy de Erasmus en Rotterdam" },
      { kind: "photos", photos: [P("rotterdam", 1050, 1400, "Pablo en Rotterdam")] }, // TODO foto
      { kind: "text", text: "trabajar en ICON desde Holanda es posible porque el equipo funciona solo. que era la idea" },
    ],
  },
  {
    id: "rotaract",
    chip: "¿Y fuera del trabajo?",
    row: { title: "Rotaract", preview: "un club que montamos en 2026" },
    messages: [
      { kind: "text", text: "en 2026 fundamos con unos amigos el Rotaract Club Guadalupe Hispanidad, el club joven de Rotary. en 2027 me toca ser presidente" },
      { kind: "photos", photos: [P("rotaract", 1400, 1050, "Rotaract Club Guadalupe Hispanidad")] }, // TODO foto
      { kind: "text", text: "lo que más orgullo me da es el proyecto sobre la distrofia muscular de Duchenne: lo eligieron mejor proyecto de los clubes Rotary de Extremadura" },
      { kind: "text", text: "también he sido monitor de campamentos con PDAV, cuidando de los pequeños y de que la logística no se cayera" },
    ],
  },
  {
    id: "personal",
    chip: "Cuéntame algo personal",
    row: { title: "Fuera del trabajo", preview: "amigos, campo y cocina" },
    messages: [
      { kind: "text", text: "si quieres conocerme tienes que conocer a mi gente" },
      { kind: "photos", photos: [P("familia", 1400, 1050, "Pablo con su familia"), P("amigos", 1400, 1050, "Pablo con amigos")] }, // TODO fotos
      { kind: "text", text: "lo que más me gusta: tomar algo con amigos, el gimnasio, la bici de monte por el campo y cocinar. en ese orden, más o menos" },
      { kind: "photos", photos: [P("bici", 1050, 1400, "Bici de monte"), P("cocina", 1050, 1400, "Pablo cocinando")] }, // TODO fotos
      { kind: "text", text: "y mi hermano Luis, con el que comparto empresa y casi todo lo demás. si quieres conocerlo a él, tiene su propio chat" },
      {
        kind: "link",
        link: {
          url: "https://www.luisfernandezchacon.com",
          domain: "luisfernandezchacon.com",
          title: "Luis Fernández Chacón",
          description: "Esta web es un chat conmigo. Pregúntame lo que quieras y te cuento.",
        },
      },
    ],
  },
  {
    id: "contacto",
    chip: "¿Hablamos?",
    row: { title: "Contacto", preview: "email, LinkedIn e Instagram" },
    messages: [
      { kind: "text", text: "si quieres hablar de ventas, de ICON o de cualquier idea, escríbeme. contesto rápido" },
      { kind: "contact" },
      { kind: "text", text: "gracias por llegar hasta aquí 🙌" },
    ],
  },
];

// Mientras no existan las fotos marcadas TODO, se ocultan los mensajes
// de fotos cuyos archivos no están en public/media (lista mantenida abajo).
const available = new Set([
  // "pablo-retrato", "icon-equipo", "rotterdam", "rotaract", "familia", "amigos", "bici", "cocina",
]);
for (const list of [intro, ...chapters.map((c) => c.messages)]) {
  for (let i = list.length - 1; i >= 0; i--) {
    const m = list[i];
    if (m.kind !== "photos") continue;
    m.photos = m.photos.filter((p) => available.has(p.src.replace(/^\/media\//, "").replace(/\.webp$/, "")));
    if (!m.photos.length) list.splice(i, 1);
  }
}

export const chapterById = Object.fromEntries(chapters.map((c) => [c.id, c]));
