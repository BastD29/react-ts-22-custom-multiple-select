export type Book = {
  _id: string;
  id: number;
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number;
  // __v: number
  // createdAt: string
  // updatedAt: string
};

// export type Books = Book[];

// * same thing with interface:

// export interface Item {
//   _id: string;
//   id: number;
//   author: string;
// }

// export interface Items extends Array<Item> {}
