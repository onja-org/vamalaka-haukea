import React from 'react'
import styled from 'styled-components'
import { fonts } from '../../globalStyles/fonts'

export interface SellerInfoProperties {
	image: string
	user: {
		firstName: string
		lastName: string
		username: string
		country: string
		city: string
	}
}

export const SellerPreviewInfo: React.FC<SellerInfoProperties> = ({
	image,
	user,
}) => {
	const names =
		!user.firstName && !user.lastName
			? user.username
			: `${user.firstName} ${user.lastName}`

	return (
		<Container>
			<Image src={image} alt={`${user.firstName}'s profile picture`} />
			<Description>
				{names} | {user.city} | {user.country}
			</Description>
		</Container>
	)
}

const Container = styled('div')`
	display: flex;
	flex-direction: row;
	gap: 5px;
	align-items: center;
`
const Image = styled('img')`
	box-sizing: border-box;
	width: 20px;
	height: 20px;
	border-radius: 20px;

	@media (min-width: 425px) {
		width: 31px;
		height: 31px;
	}
`
const Description = styled('span')`
	${fonts}
	font-family: 'Futura Std', Arial, Helvetica, sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 10px;
	line-height: 12px;
	color: #979797;

	@media (min-width: 425px) {
		font-size: 12px;
		line-height: 14px;
	}
`
