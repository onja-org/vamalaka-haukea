import React from 'react'
import styled from 'styled-components'
import { CategoryItem } from '../CategoryItem/CategoryItem'

export interface CategoryListProps {
  primary: boolean
  categories: { id: string | number; title: string }[]
  selectCategory: () => void
}

const CategoryListContainer = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
`
const CategoryListStyle = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 15px;
  margin: 0;
  padding: 0;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
}
`

export const CategoryList: React.FC<CategoryListProps> = ({
  primary,
  categories,
  selectCategory,
}) => {
  return (
    <CategoryListContainer>
      <CategoryListStyle>
      {categories.map((category: { id: string | number; title: string }) => (
        <CategoryItem
          key={category.id}
          item={category.title}
          primary={primary}
          selectCategory={selectCategory}
        />
      ))}
    </CategoryListStyle>
    </CategoryListContainer>
  )
}
