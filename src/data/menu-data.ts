import { IMenu } from "../types/menu-d-t";
import { SECTIONS, sectionHash } from "./sections";

const menu_data: IMenu[] = [
  {
    id: 1,
    link: sectionHash(SECTIONS.inicio),
    section: SECTIONS.inicio,
    title: "Inicio",
  },
  {
    id: 2,
    link: sectionHash(SECTIONS.honorarios),
    section: SECTIONS.honorarios,
    title: "Honorarios",
  },
  {
    id: 3,
    link: sectionHash(SECTIONS.servicios),
    section: SECTIONS.servicios,
    title: "Servicios",
  },
  {
    id: 4,
    link: sectionHash(SECTIONS.comoFunciona),
    section: SECTIONS.comoFunciona,
    title: "Cómo funciona",
  },
  {
    id: 5,
    link: sectionHash(SECTIONS.contacto),
    section: SECTIONS.contacto,
    title: "Contacto",
  },
];

export default menu_data;
