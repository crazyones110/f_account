import { Layout } from 'components/Layout'
import React from 'react'
import styled from 'styled-components'
import { TagsSection } from './Money/TagsSection'
import { NoteSection } from './Money/NoteSection'
import { CategorySection } from './Money/CategoeySection'
import { NumberPadSection } from './Money/NumberPadSection'

const MoneyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

export function Money() {
  return (
    <MoneyLayout className="hi">
      <TagsSection />
      <NoteSection/>
      <CategorySection/>
      <NumberPadSection/>
    </MoneyLayout>
  )
}
