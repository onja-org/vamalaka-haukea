import React from 'react'
import styled from 'styled-components'
import { fonts } from '../../globalStyles/fonts'
import {CategoryList}  from '../CategoryList/CategoryList';
import { mediaQueriesPx } from "../../mediaQueries";
import PendingIndicator from "../PendingIndicator/PendingIndicator";

export interface TopCategoriesProperties {
  heading: string
  status: string
  categories: { id: string | number; title: string }[]
}

export const TopCategories: React.FC<TopCategoriesProperties> = ({
  heading,
  status,
  categories
}) => {
  return (
	<Container>
	  <CategoryLabel>{heading}</CategoryLabel>
	  {status === 'loading'
		?
		<PendingIndicator alt='PendingSmallIcon' size= 's'/>
		: 
		<CategoryList categories={categories} primary={true} selectCategory={() => {}}/>
		}
		<Separator/>
	</Container>
  )
}

const Container = styled('div')`
  & > img {
	display: flex;
	left: 50%;
	margin: auto;
  }
`

const CategoryLabel = styled.h3`
	${fonts}
	font-family: Futura Std;
	font-style: normal;
	font-weight: normal;
	font-size: 30px;
	line-height: 36px;
	color: #041d42;
	margin-top: 0;
	margin-bottom: 13px;
`

const Separator = styled.hr`
	display: none;
	margin: 0;
	margin-top: 25px;
	${mediaQueriesPx('lg', null)`
		border-top: 1px solid #041D42;
		display: block;
	`}
`