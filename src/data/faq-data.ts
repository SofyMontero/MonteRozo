export type IFaq = {
  id: string;
  title: string;
  desc: string;
  isShow?: boolean;
};

const faq_data: IFaq[] = [
  {
    id: "One",
    title: "¿Cómo sé si necesito terapia?",
    desc: "Si sientes que algo te pesa de forma persistente —ansiedad, tristeza, estrés, dificultades en relaciones o falta de motivación— y te cuesta manejarlo solo/a, la terapia puede ayudarte. No hace falta estar en crisis: también es un espacio de crecimiento personal.",
    isShow: true,
  },
  {
    id: "Two",
    title: "¿Cuánto dura cada sesión y cuánto cuesta?",
    desc: "Las sesiones tienen una duración de 50 minutos. La tarifa es de $120.000 COP por sesión individual. Ofrezco bonos de sesiones con descuento. En la consulta inicial gratuita te explico todas las opciones sin compromiso.",
  },
  {
    id: "Three",
    title: "¿Cómo funciona la atención virtual?",
    desc: "Sí. Todas las sesiones se realizan por videollamada en una plataforma segura y confidencial, con la comodidad de conectarte desde donde prefieras.",
  },
  {
    id: "Four",
    title: "¿Qué pasa en la primera sesión?",
    desc: "Es un espacio para conocernos. Exploramos qué te trae a terapia, tu historia relevante y tus expectativas. Juntos definimos si somos buen match y, si es así, acordamos un plan de intervención adaptado a ti.",
  },
  {
    id: "Five",
    title: "¿La información que comparto es confidencial?",
    desc: "Absolutamente. Todo lo que compartes en sesión está protegido por el secreto profesional y la normativa de protección de datos. Tu privacidad es un pilar fundamental de mi práctica clínica.",
  },
];

export default faq_data;
