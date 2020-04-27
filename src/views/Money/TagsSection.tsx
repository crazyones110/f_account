import styled from 'styled-components'
import React, { useState } from 'react'
import { useTags } from 'views/useTags'

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
  value: string[],
  onChange(selected: string[]): void
}
export const TagsSection: React.FC<Props> = ({value, onChange}) => {
  const {tags, setTags} = useTags()
  // const [selectedTags, setSelectedTags] = useState<string[]>([])
  const selectedTags = value
  const onAddTag = () => {
    const newTag = window.prompt('新标签的名称为')
    if (newTag !== null) {
      setTags([...tags, newTag])
    }
  }
  const onToggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onChange(selectedTags.filter(t => t !== tag))
    } else {
      onChange([...selectedTags, tag])
    }
  }
  return (
    <StyledTagsSection>
      <ol>
        {tags.map(tag => (
          <li
            key={tag}
            onClick={() => onToggleTag(tag)}
            className={selectedTags.includes(tag) ? 'selected' : ''}
          >
            {tag}
          </li>
        ))}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </StyledTagsSection>
  )
}
