import { IMenu } from "../types/menu-d-t";

const menu_data: IMenu[] = [
  {
    id: 1,
    link: "/",
    title: "Inicio",
  },
  {
    id: 2,
    link: "/servicios-factoring",
    title: "Servicios",
  },
  {
    id: 3,
    link: "/",
    title: "Recursos",
    dropdown: true,
    dropdown_menus: [
      { link: "/blog-factoring/1", title: "Cómo saber si necesitas terapia" },
      { link: "/blog-factoring/2", title: "Beneficios de la terapia online" },
    ],
  },
  {
    id: 4,
    link: "/contacto",
    title: "Contacto",
  },
];

export default menu_data;
