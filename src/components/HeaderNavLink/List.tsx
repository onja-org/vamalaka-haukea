import React, { FC } from 'react'
import styled from 'styled-components'

export const ParentList: FC = ({ children }) => {
  return <List>{children}</List>
}

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  list-style-type: none;
  gap: 24px;
  justify-content: flex-end;
`
