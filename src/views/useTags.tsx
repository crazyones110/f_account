import {useState} from 'react'
export const useTags = () => { // 封装一个自定义hook
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行'])
  return {
    tags,
    setTags
  }
}