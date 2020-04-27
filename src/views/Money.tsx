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
    tags: [] as string[],
    note: '',
    category: '-' as Category,
    amount: 0,
  })
  return (
    <MoneyLayout className="hi">
      {selected.tags} <br/>
      {selected.note} <br/>
      {selected.category} <br/>
      {selected.amount} <br/>
      <TagsSection
        value={selected.tags}
        onChange={tags =>
          setSelected({
            ...selected,
            tags,
          })
        }
      />
      <NoteSection
        value={selected.note}
        onChange={note =>
          setSelected({
            ...selected,
            note,
          })
        }
      />
      <CategorySection
        value={selected.category}
        onChange={category =>
          setSelected({
            ...selected,
            category,
          })
        }
      />
      <NumberPadSection
        value={selected.amount}
        onChange={amount =>
          setSelected({
            ...selected,
            amount,
          })
        }
        onOk={()=>{}}
      />
    </MoneyLayout>
  )
}
