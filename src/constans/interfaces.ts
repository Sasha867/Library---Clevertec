export interface BookItem {
  issueYear: string;
  rating: number;
  title: string;
  authors: string[];
  image: {
    url: string;
  };
  categories: string[];
  id: number;
  booking: Booking;
  delivery: Dilivery;
  histories: Histories[];
}

export interface ChoiceBook extends BookItem {
  description: string;
  publish: string;
  pages: string;
  cover: string;
  weight: string;
  format: string;
  ISBN: string;
  producer: string;
  images: Images[];
  comments: Comments[];
}

export interface Images {
  url: string;
}

export interface Error {
  data: null;
  error: {
    status: number;
    name: string;
    message: string;
    details: object;
  };
}

export interface Histories {
  id: number;
  userId: number;
}

export interface Dilivery {
  id: number;
  handed: true;
  dateHandedFrom: string;
  dateHandedTo: string;
  recipientId: number;
  recipientFirstName: string;
  recipientLastName: string;
}

export interface Comments {
  id: number;
  rating: number;
  text: string;
  createdAt: string;
  user: User;
}

export interface User {
  commentUserId: number;
  firstName: string;
  lastName: string;
  avatarUrl: string;
}

export interface Booking {
  id: number;
  order: true;
  dateOrder: string;
  customerId: number;
  customerFirstName: string;
  customerLastName: string;
}
