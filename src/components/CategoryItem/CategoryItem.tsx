import React from 'react'
import styled from 'styled-components'
import { fonts } from '../../globalStyles/fonts'

export interface CategoryItemProp {
  item: string
  primary: boolean
  selectCategory: () => void
}

export const CategoryItem: React.FC<CategoryItemProp> = ({
  item,
  primary = true,
  selectCategory,
}) => {
  return (
    <Button
      style={primary ? primaryColor.button : secondaryColor.button}
      onClick={selectCategory}>
      {item}
    </Button>
  )
}

const Button = styled.button`
  ${fonts}
  font-family: 'Futura Std', Arial, Helvetica, sans-serif;
  font-size: 30px;
  font-weight: normal;
  margin-left: 0;
  padding: 8px 0 8px 0;
  width: 100%;
  min-width: 214px;
  box-sizing: border-box;
  border: 0.5px solid #158cb1;
  line-height: 36px;
  cursor: pointer;

  @media (min-width: 600px) {
    padding: 11px 0 11px 0;
  }
`
const primaryColor = {
  button: {
    color: '#041d42',
    background: '#ffffff',
  },
}

const secondaryColor = {
  button: {
    color: '#ffffff',
    background: '#041d42',
  },
}
