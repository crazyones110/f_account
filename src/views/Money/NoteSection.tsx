import styled from "styled-components";

export const NoteSection = styled.section`
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