import styled from 'styled-components'
import React, { useState } from 'react'
import { useTags } from 'views/useTags'
import { createId } from 'utils/createId'

const StyledTagsSection = styled.section`
  background: #fff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  ol {
    > li {
      background: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 4px 18px;
      font-size: 14px;
      margin: 8px 12px;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        background: #f60;
      }
    }
  }
  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
  }
`

interface Props {
  value: string[]
  onChange(selected: string[]): void
}
export const TagsSection: React.FC<Props> = ({ value, onChange }) => {
  const { tags, setTags } = useTags()
  // const [selectedTags, setSelectedTags] = useState<string[]>([])
  const selectedTagIds = value
  const onAddTag = () => {
    const newTag = window.prompt('新标签的名称为')
    if (newTag !== null) {
      setTags({
        ...tags,
        // FIXME 这里应该还会有bug,因为defaultTags并没有改
        [createId()]: newTag,
      })
    }
  }
  const onToggleTag = (tagId: string) => {
    if (selectedTagIds.includes(tagId)) {
      onChange(selectedTagIds.filter(id => id !== tagId))
    } else {
      onChange([...selectedTagIds, tagId])
    }
  }
  return (
    <StyledTagsSection>
      <ol>
        {(Object.entries(tags) as [string, string][]).map(([id, tag]) => (
          <li
            key={id}
            onClick={() => onToggleTag(id)}
            className={selectedTagIds.includes(id) ? 'selected' : ''}
          >
            {tag}
          </li>
        ))}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </StyledTagsSection>
  )
}
