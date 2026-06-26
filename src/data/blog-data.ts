import { IBlog } from "../types/blog-d-t";

const blog_data: IBlog[] = [
  {
    id: 1,
    img: "/assets/images/blog/blog_img_03.jpg",
    date: "12 de marzo 2025",
    title: "Cómo saber si necesitas terapia: señales que no debes ignorar",
    author: "Dra. Montero Rozo",
    reading_time: "6 min",
    company_position: "Psicóloga clínica",
    category: "Salud mental",
    page: "home",
    introduction: [
      "Muchas personas se preguntan si lo que sienten es 'suficientemente grave' para buscar ayuda profesional. La verdad es que no necesitas estar en crisis para iniciar un proceso terapéutico.",
      "En este artículo repasamos señales comunes —ansiedad persistente, agotamiento, dificultades relacionales— que indican que la terapia puede ser un aliado valioso.",
    ],
    author_note:
      "Pedir ayuda no es debilidad: es el primer paso hacia un cambio real y sostenible.",
  },
  {
    id: 2,
    img: "/assets/images/blog/blog_img_04.jpg",
    date: "5 de marzo 2025",
    title: "Terapia online: ventajas, mitos y cuándo es la mejor opción",
    author: "Dra. Montero Rozo",
    reading_time: "8 min",
    company_position: "Psicóloga clínica",
    category: "Terapia online",
    page: "home",
    introduction: [
      "La videoterapia ha demostrado ser tan efectiva como la terapia presencial para muchas problemáticas. Sin embargo, persisten dudas sobre su calidad y confidencialidad.",
      "Aquí desmitificamos los prejuicios más comunes y te ayudamos a decidir si la modalidad online encaja contigo.",
    ],
    author_note:
      "La conexión terapéutica no depende del consultorio: depende de la calidad del acompañamiento.",
  },
];

export default blog_data;
