import styled from 'styled-components'
import React, { useState } from 'react'

const StyledNumberPadSection = styled.section`
  display: flex;
  flex-direction: column;
  > .output {
    background: #fff;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25),
      inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
  }
  > .pad {
    > button {
      border: none;
      font-size: 18px;
      /* border: 1px solid red; */
      float: left;
      width: 25%;
      height: 64px;
      &.ok {
        height: 128px;
        float: right;
      }
      &.zero {
        width: 50%;
      }
      &:nth-child(1) {
        background: #f2f2f2;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background: #e0e0e0;
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: #d3d3d3;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background: #c1c1c1;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background: #b8b8b8;
      }
      &:nth-child(12) {
        background: #9a9a9a;
      }
      &:nth-child(14) {
        background: #a9a9a9;
      }
    }
  }
`

export const NumberPadSection: React.FC = props => {
  const [output, _setOutput] = useState<string>('0')
  const setOutput = (output: string) => {
    if (output.length > 16) {
      output = output.slice(0, 16)
    }
    _setOutput(output)
  }
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const content = (e.target as HTMLButtonElement).textContent
    if (content === null) {return}
    switch (content) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (output === '0') {
          setOutput(content)
        } else {
          setOutput(output + content)
        }
        break
      case '.':
        if (output.includes('.')) { break}
        else {
          setOutput(output + '.')
        }
        break
      case '删除':
        if (output.length === 1) {
          setOutput('0')
        } else {
          setOutput(output.slice(0, -1))
        }
        break
      case '清空':
        setOutput('0')
        break
      case 'OK':
        console.log('OK')
        break
    }
  }
  return (
    <StyledNumberPadSection>
      <div className="output">{output}</div>
      <div className="pad clearfix" onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zero">0</button>
        <button>.</button>
      </div>
    </StyledNumberPadSection>
  )
}
