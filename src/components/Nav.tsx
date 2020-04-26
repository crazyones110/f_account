import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Icon1 } from '../icons/tag.svg'
import { ReactComponent as Icon2 } from '../icons/money.svg'
import { ReactComponent as Icon3 } from 'icons/statistic.svg'
const NavWrapper = styled.nav`
  background-color: #fff;
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
        &.selected {
          color: red;
          svg path {
            fill: red;
          }
        }
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
          <NavLink to="/tags" activeClassName="selected">
            <TagIcon />
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <MoneyIcon />
            记账
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <StatisticsIcon />
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
}
