export interface BookItem {
  id: number;
  image: string[];
  stars: number;
  category: string;
  title: string;
  author: string;
  reserve: boolean;
  data?: string;
}

export interface User {
  name: string;
  avatar: string;
}
