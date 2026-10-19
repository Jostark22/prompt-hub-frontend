export interface Prompt{
  id: number,
  title: string,
  content:string,
  score: number,
  createdAt: string,
  "category": Category,
  "author": Author,
  "userVote": string|null
}

export interface Category{
  id: number,
  name:string
}

export interface  Author{
  id: number,
  username:string
}
