export interface Book {
  name: string;
  avatar: string;
  author: string;
  desc: string;
  createdAt: string;
  id: string;
}
export interface BookId {
  data: Book;
}
export interface Books {
  data: Book[];
}

export interface PutBook {
  name: string;
  avatar: string;
  author: string;
  desc: string;
  createdAt: string;
}
