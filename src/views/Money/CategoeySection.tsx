import styled from 'styled-components'
import React, { useState } from 'react'

const StyledCategorySection = styled.section`
  > ul {
    display: flex;
    background: #c4c4c4;
    > li {
      width: 50%;
      font-size: 24px;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after {
        content: '';
        display: block;
        border-bottom: 3px solid black;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`

export const CategorySection: React.FC = props => {
  const categoryMap = { '-': '支出', '+': '收入' }
  type CategoryKeys = keyof typeof categoryMap
  const [category, setCategory] = useState<CategoryKeys>('-') // + 表示收入, -表示支出
  const [categoryList] = useState<CategoryKeys[]>(['-', '+'])
  return (
    <StyledCategorySection>
      <ul>
        {categoryList.map((c,index) => (
          <li
            key={index}
            onClick={() => setCategory(c)}
            className={category === c ? 'selected' : ''}
          >
            {categoryMap[c]}
          </li>
        ))}
      </ul>
    </StyledCategorySection>
  )
}
