import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ReactComponent as Icon1 } from '../icons/tag.svg'
import { ReactComponent as Icon2 } from '../icons/money.svg'
import { ReactComponent as Icon3 } from 'icons/statistic.svg'
const NavWrapper = styled.nav`
  border: 1px solid blue;
  /* line-height: 24px; */
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;
    > li {
      width: 33.3333%;
      a {
        display: flex;
        padding: 10px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
`
const TagIcon = styled(Icon1)`
  width: 1em;
  height: 1rem;
  path {
    fill: black;
  }
`
const MoneyIcon = styled(Icon2)`
  width: 1em;
  height: 1rem;
  path {
    fill: black;
  }
`
const StatisticsIcon = styled(Icon3)`
  width: 1em;
  height: 1rem;
  path {
    fill: black;
  }
`

export const Nav: React.FC = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/tags">
            <TagIcon />
            标签页
          </Link>
        </li>
        <li>
          <Link to="/money">
            <MoneyIcon />
            记账页
          </Link>
        </li>
        <li>
          <Link to="/statistics">
            <StatisticsIcon />
            统计页
          </Link>
        </li>
      </ul>
    </NavWrapper>
  )
}
