import {useState} from 'react'
export interface Tag {
  [id: number]: string
}
export type Tag2 = {id:number, name: string}[]
export const useTags = () => { // 封装一个自定义hook
  const [tags, setTags] = useState<Tag>({
    1: '衣',
    2: '食',
    3: '住',
    4: '行'
  })
  return {
    tags,
    setTags
  }
}