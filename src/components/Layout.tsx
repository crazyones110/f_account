import React from 'react'
import { Nav } from './Nav'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`
interface LayoutProps {
  children: React.ReactNode,
  className?: string
}

export const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <Wrapper>
      <Main className={props.className}>
        {props.children}
      </Main>
      <Nav />
    </Wrapper>
  )
}
