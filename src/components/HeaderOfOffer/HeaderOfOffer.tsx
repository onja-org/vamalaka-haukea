import React from 'react'
import styled from 'styled-components'

export const HeaderStyle = styled.h3`
	color: #041d42;
	font-family: Garamond;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	line-height: 22px;
	margin: 0;
	text-transform: capitalize;
`
export interface HeaderProps {
	name?: string
}

export const HeaderOfOffer: React.FC<HeaderProps> = ({ name }) => (
	<HeaderStyle>{name}</HeaderStyle>
)
