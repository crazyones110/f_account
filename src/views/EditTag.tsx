import React from 'react'
import { useTags } from './useTags'
import { useParams } from 'react-router-dom'
export const EditTag: React.FC = props => {
  const { tags } = useTags()
  const { id } = useParams<{ id: string }>()
  const tag = tags[+id]
  return <div>{tag}</div>
}
