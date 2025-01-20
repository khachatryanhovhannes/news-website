export interface INewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
  keywords: string[];
  path: string;
  date: string;
}

export interface IEvent {
  id: number;
  date: string;
  title: string;
  location: string;
  image: string;
  description: string;
  link: string;
}
