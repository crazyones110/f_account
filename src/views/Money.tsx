import { Layout } from 'components/Layout'
import React, { useState } from 'react'
import styled from 'styled-components'
import { TagsSection } from './Money/TagsSection'
import { NoteSection } from './Money/NoteSection'
import { CategorySection } from './Money/CategoeySection'
import { NumberPadSection } from './Money/NumberPadSection'

const MoneyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
type Category = '-' | '+'

export function Money() {
  const [selected, setSelected] = useState({
    tagIds: [] as string[],
    note: '',
    category: '-' as Category,
    amount: '0',
  })
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj,
    })
  }
  return (
    <MoneyLayout className="hi">
      {selected.tagIds.join(',')} <br />
      {selected.note} <br />
      {selected.category} <br />
      {selected.amount} <br />
      <TagsSection
        value={selected.tagIds}
        onChange={tagIds => onChange({ tagIds })}
      />
      <NoteSection
        value={selected.note}
        onChange={note => onChange({ note })}
      />
      <CategorySection
        value={selected.category}
        onChange={category => onChange({ category })}
      />
      <NumberPadSection
        value={selected.amount}
        onChange={amount => onChange({ amount })}
        onOk={() => {}}
      />
    </MoneyLayout>
  )
}
