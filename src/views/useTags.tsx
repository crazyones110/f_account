import { useState } from 'react'
import { createId } from 'utils/createId'
export interface Tag {
  [id: number]: string
}
const defaultTags = {
  [createId()]: '衣',
  [createId()]: '食',
  [createId()]: '住',
  [createId()]: '行',
}

export const useTags = (): {
  tags: Tag
  setTags: React.Dispatch<React.SetStateAction<Tag>>
} => {
  // 封装一个自定义hook
  const [tags, setTags] = useState<Tag>(defaultTags)
  return {
    tags,
    setTags,
  }
}
