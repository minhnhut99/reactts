export interface Book {
  name: string,
  avatar:  string,
  author: string,
  desc: string,
  createdAt: string,
  id:string
}
export interface Books {
  data: Book[]
}