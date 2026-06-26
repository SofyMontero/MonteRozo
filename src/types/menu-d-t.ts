import { SectionId } from "@/data/sections";

export interface IMenu {
  id: number;
  link: string;
  section: SectionId;
  title: string;
  dropdown?: boolean;
  dropdown_menus?: {
      link: string;
      title: string;
  }[];
  mega_menu?: boolean;
  mega_menus?: {
      id:number;
      menus:{
        link: string;
        title: string;
      }[]
  }[];
}