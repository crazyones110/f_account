import styled from "styled-components";

export const CategorySection = styled.section`
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