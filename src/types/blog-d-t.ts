

export interface IBlog {
  id: number;
  img: string;
  date: string;
  title: string;
  quote_blog?: boolean;
  designation?: string;
  author:string;
  reading_time?: string;
  company_position?: string;
  category:string;
  page: string;
  introduction?: string[]
  author_note?: string
}