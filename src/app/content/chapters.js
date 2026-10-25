// Script of the conversation. Each chapter plays when the visitor taps a
// suggestion (or types something very close to it). Pablo's messages are
// "typed" one by one with the typing indicator in between.
//
// Tone: calm and humble, in passing. Things come up because they are
// relevant, never to show off, and without underselling either.
//
// PHOTOS: P("name", w, h, alt) points at /public/media. Photos not yet
// available are filtered out at the bottom of this file.
//
// Message kinds: text | photos | video | link | contact

const P = (name, w, h, alt) => ({ src: `/media/${name}.webp`, w, h, alt });

export const intro = [
  { kind: "text", text: "hi 👋" },
  { kind: "text", text: "i'm pablo" },
  { kind: "photos", photos: [P("pablo-retrato", 1050, 1400, "Pablo, portrait")] },
  {
    kind: "text",
    text: "i built this page for one reason: i'm applying to Google, and a CV only tells you so much. this is the rest",
  },
  {
    kind: "text",
    text: "it works like a chat. tap a suggestion below or ask me anything, and i'll tell you why i think i'd be a good fit for the internship",
  },
  {
    kind: "text",
    text: "(an AI with my context does the answering. it's pretty accurate)",
  },
];

export const chapters = [
  {
    id: "google",
    chip: "Why Google?",
    row: { title: "Why Google", preview: "a day in Dublin that changed my plans", image: "/media/google-dublin.webp" },
    messages: [
      { kind: "text", text: "earlier this year i was invited to an event at Google's offices in Dublin, through my work at ICON" },
      { kind: "photos", photos: [P("google-dublin", 1271, 1400, "Pablo outside Google Docks in Dublin")] },
      { kind: "text", text: "i'd read about the place a hundred times. being inside was different: the way people talked about their work, the pace, how much they cared about the customer on the other end of the call" },
      { kind: "text", text: "i walked out knowing that this was where i wanted to learn sales properly. so here i am, applying" },
      { kind: "text", text: "what i bring: a year building a sales team from zero, a process-first way of working, and a lot of energy for picking up the phone. what i want: to learn how it's done at the scale Google does it" },
    ],
  },
  {
    id: "icon",
    chip: "What do you do at ICON?",
    row: { title: "ICON", preview: "from first sales hire to leading the team" },
    messages: [
      { kind: "text", text: "ICON is a music business school where the classes are taught by people inside the industry: executives from Universal, Sony and Warner, Latin Grammy winners, managers" },
      { kind: "text", text: "i joined in november 2025 as the company's first sales hire. literally me and a phone" },
      { kind: "text", text: "the first months were calling, qualifying, closing the first enrolments and writing down what worked. that became the sales playbook" },
      { kind: "text", text: "three months in they moved me to full-time to build the team. today we're five, setters and closers, with the whole process in HubSpot and one rule: nobody waits more than five minutes for a call back" },
      { kind: "text", text: "in the 2026 capital increase i became a partner. i put in part of what i'd earned and got shares for the work done. not something i expected at 21" },
      {
        kind: "link",
        link: {
          url: "https://iconmbs.com",
          domain: "iconmbs.com",
          title: "ICON Music Business School",
          description: "Learn from the professionals who are inside the industry.",
          image: "/media/icon-logo.png",
          imageFit: "contain",
        },
      },
    ],
  },
  {
    id: "ventas",
    chip: "Why sales?",
    row: { title: "Sales", preview: "sales found me first", image: "/media/acom-headset.webp" },
    messages: [
      { kind: "text", text: "i like building things and meeting people. sales is basically both, so i think it found me before i found it" },
      { kind: "text", text: "i started at Spine Consulting, a marketing agency for small businesses. 90 cold calls a day plus Google Ads campaigns to bring in leads. we signed 32 new clinics" },
      { kind: "text", text: "summer 2024 i was at ACOM selling electricity contracts over the phone. the hardest job i've had and the one that taught me the most" },
      { kind: "photos", photos: [P("acom-headset", 787, 1400, "Pablo wearing a headset at the ACOM call centre"), P("acom-oficina", 787, 1400, "Pablo at the ACOM office on its 10th anniversary")] },
      { kind: "video", video: { src: "/media/acom-video.mp4", poster: "/media/acom-video-poster.jpg", w: 1024, h: 576 } },
      { kind: "text", text: "that face is call number two hundred of the day. in august they named me top seller of the month, so i must have been doing something right" },
      { kind: "text", text: "what i've learned: a good process beats a good pitch. and people buy when they feel you actually listened" },
    ],
  },
  {
    id: "inedito",
    chip: "The podcast",
    row: { title: "Inédito Podcast", preview: "70 episodes, 45,000 subscribers", image: "/media/inedito-logo.png", logo: true },
    messages: [
      { kind: "text", text: "between 2024 and 2025 i ran content strategy and operations for Inédito, an interview podcast. the host asked the questions; i made sure everything else happened" },
      { kind: "text", text: "we decided together which guests to go after and in what order. i booked them, managed the relationship and ran the daily hand-off between editing and social so every episode and every clip went out on time" },
      {
        kind: "link",
        link: {
          url: "https://youtu.be/YNAptmPaGHk",
          domain: "youtube.com",
          title: "Julissa Reynoso, U.S. Ambassador to Spain",
          description: "Inédito Podcast",
          image: "https://img.youtube.com/vi/YNAptmPaGHk/hqdefault.jpg",
        },
      },
      {
        kind: "link",
        link: {
          url: "https://www.youtube.com/watch?v=mUqx8NFBc54&t=31s",
          domain: "youtube.com",
          title: "Federico Linares, President of EY Spain",
          description: "Inédito Podcast",
          image: "https://img.youtube.com/vi/mUqx8NFBc54/hqdefault.jpg",
        },
      },
      { kind: "text", text: "70 episodes and 45,000 subscribers later, what stayed with me is how to organise a content team so it ships every single day" },
    ],
  },
  {
    id: "estudios",
    chip: "What do you study?",
    row: { title: "University", preview: "Seville, Madrid and now Rotterdam", image: "/media/rotterdam-puente.webp" },
    messages: [
      { kind: "text", text: "Marketing and Market Research at the University of Seville. three honours along the way, International Economics among them" },
      { kind: "text", text: "last year i did an exchange at Rey Juan Carlos in Madrid, and this semester i'm on Erasmus in Rotterdam" },
      { kind: "photos", photos: [P("rotterdam-puente", 787, 1400, "The Erasmus Bridge in Rotterdam at night"), P("rotterdam-rdam", 787, 1400, "Rotterdam at night")] },
      { kind: "text", text: "running the ICON sales team from the Netherlands works because the team runs itself. which was the idea" },
      { kind: "photos", photos: [P("bruselas", 1400, 788, "Pablo in front of the Royal Palace of Brussels")] },
      { kind: "text", text: "and on weekends, whatever is a train ride away" },
    ],
  },
  {
    id: "rotaract",
    chip: "Outside work?",
    row: { title: "Rotaract", preview: "a club we founded in 2026", image: "/media/rotaract-acto.webp" },
    messages: [
      { kind: "text", text: "in 2026 a few friends and i founded the Rotaract Club Guadalupe Hispanidad, Rotary's club for young people. i'm president-elect for 2027" },
      { kind: "photos", photos: [P("rotaract-acto", 1400, 1050, "Charter ceremony of the Rotaract Club Guadalupe Hispanidad")] },
      { kind: "text", text: "what i'm proudest of is our Duchenne muscular dystrophy project: it was named the best project among Rotary clubs in Extremadura" },
      { kind: "text", text: "i've also been a camp monitor with PDAV, looking after the kids and making sure the logistics held up" },
    ],
  },
  {
    id: "personal",
    chip: "Tell me something personal",
    row: { title: "Outside work", preview: "friends, countryside and cooking", image: "/media/abuela.webp" },
    messages: [
      { kind: "text", text: "what i enjoy most: a drink with friends, the gym, mountain biking through the countryside and cooking. roughly in that order" },
      { kind: "text", text: "but if you want to know me you have to know my people" },
      { kind: "photos", photos: [P("abuela", 1050, 1400, "Pablo with his grandmother on her 86th birthday"), P("navidad-familia", 1400, 788, "Christmas at home")] },
      { kind: "text", text: "my grandmother, who just turned 86, and christmas at home with my mum, my brother and alba. the glasses are mandatory" },
      { kind: "photos", photos: [P("pareja-sevilla", 1400, 1050, "Pablo and Alba in Seville")] },
      { kind: "text", text: "alba. seville, april, and a camera whose owner never found the setting to remove the date" },
      { kind: "photos", photos: [P("hermanos-greta", 1038, 1400, "Pablo and his brother as kids with Greta")] },
      { kind: "text", text: "and my brother and me, back when greta fit in two hands" },
    ],
  },
  {
    id: "contacto",
    chip: "Let's talk",
    row: { title: "Contact", preview: "email, LinkedIn and Instagram" },
    messages: [
      { kind: "text", text: "if you'd like to talk about the role, about sales or about anything on this page, write to me. i reply fast" },
      { kind: "contact" },
      { kind: "text", text: "thanks for making it this far 🙌" },
    ],
  },
];

// Photo messages whose files are not in public/media yet are hidden.
const available = new Set([
  "pablo-retrato", "google-dublin", "acom-headset", "acom-oficina", "rotterdam-puente", "rotterdam-rdam",
  "bruselas", "rotaract-acto", "abuela", "navidad-familia", "pareja-sevilla", "hermanos-greta",
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
