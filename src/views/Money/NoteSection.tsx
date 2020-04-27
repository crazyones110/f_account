import styled from 'styled-components'
import React, { useState, useRef } from 'react'

const StyledNoteSection = styled.section`
  padding: 0 16px;
  font-size: 14px;
  > label {
    display: flex;
    align-items: center;
    > span {
      margin-right: 16px;
      white-space: nowrap;
    }
    > input {
      display: block;
      width: 100%;
      height: 72px;
      line-height: 72px;
      background: none;
      border: none;
      font-size: 14px;
    }
  }
`

interface Props {
  value: string,
  onChange(value: string): void
}
export const NoteSection: React.FC<Props> = ({value, onChange}) => {
  // const [note, setNote] = useState<string>(value)
  const note = value
  const refInput = useRef<HTMLInputElement>(null)
  const onBlur = () => {
    if (refInput.current !== null) {
      onChange(refInput.current.value)
      refInput.current.value = ''
    }
  }
  return (
    <StyledNoteSection>
      <label>
        <span>备注</span>
        <input
          type="text"
          placeholder="在这里添加备注"
          defaultValue={note}
          onBlur={onBlur}
          ref={refInput}
        />
      </label>
    </StyledNoteSection>
  )
}
