import { Layout } from 'components/Layout'
import React from 'react'
import { useTags } from './useTags'
import styled from 'styled-components'
import { ReactComponent as Right } from 'icons/right.svg'
import { Link } from 'react-router-dom'

const RightIcon = styled(Right)`
  width: 1em;
  height: 1em;
`

const TagList = styled.ul`
  font-size: 16px;
  padding-left: 16px;
  padding-right: 16px;
  > li {
    /* #e5e5e5 */
    border-bottom: 1px solid #d5d5d9;
    > a {
      padding: 12px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`
const AddTagButton = styled.button`
  font-size: 18px;
  border: none;
  padding: 8px 12px;
  background: #767676;
  color: #fff;
  border-radius: 4px;
`
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
`
export function Tags() {
  const { tags } = useTags()
  return (
    <Layout>
      <TagList>
        {(Object.entries(tags) as [string, string][]).map(([id, tag]) => (
          <li key={id}>
            <Link to={'/tags/' + id}>
              <span className="oneLine">{id}:{tag}</span>
              <RightIcon />
            </Link>
          </li>
        ))}
      </TagList>
      <Center>
        <AddTagButton>新增标签</AddTagButton>
      </Center>
    </Layout>
  )
}
