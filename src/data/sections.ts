export const SECTIONS = {
  inicio: "inicio",
  honorarios: "honorarios",
  enfoque: "enfoque",
  servicios: "servicios",
  comoFunciona: "como-funciona",
  preguntas: "preguntas-frecuentes",
  contacto: "contacto",
} as const;

export type SectionId = (typeof SECTIONS)[keyof typeof SECTIONS];

export function sectionHash(id: SectionId) {
  return `#${id}`;
}
