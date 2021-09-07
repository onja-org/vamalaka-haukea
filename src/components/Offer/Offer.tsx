import React from 'react'
import styled, { css } from 'styled-components'
import Button from '../Button/Button'
import { DescriptionOffer } from '../DescriptionOffer/descriptionOffer'
import { HeaderOfOffer } from '../HeaderOfOffer/HeaderOfOffer'
import { ImageWithinOffer } from '../ImageWithinOffer/ImageWithinOffer'
import { PriceOfOffer } from '../PriceOfOffer/PriceOfOffer'
import { Rating } from '../rating/Rating'
import { SellerPreviewInfo } from '../SellerPreviewInfo/SellerPreviewInfo'
import { mediaQueriesPx } from '../../mediaQueries'
import OutlineHeart from '../../assets/outline-heart.svg'
export interface OfferProps {
	imageForOffer: string
	imageDescription: string
	offerName: string
	currency: string
	amount: number
	unit: string
	star: number
	body: string
	ratingDescription: string
	imageForRating?: string
	amountOfProduct: number
	offerDescription: string
	isLearnEnabled: boolean
	detailButtonText: string
	favoriteButtonText: string
	isFavourited: boolean
	profile: string
	user: {
		firstName: string
		lastName: string
		username: string
		country: string
		city: string
	}
}

export const Offer: React.FC<OfferProps> = ({
	imageForOffer,
	imageDescription,
	offerName,
	currency,
	amount,
	unit,
	star,
	ratingDescription,
	amountOfProduct,
	offerDescription,
	isLearnEnabled,
	detailButtonText,
	favoriteButtonText,
	isFavourited,
	profile,
	user,
}) => {
	const outlineHeart = isFavourited ? (
		'hello'
	) : (
		<img src={OutlineHeart} alt={'outline-heart'} />
	)

	return (
		<OfferStyle>
			<ImageWithinOfferContainer>
				<ImageWithinOffer src={imageForOffer} alt={imageDescription} />
				<HeaderOfOffer name={offerName} />
			</ImageWithinOfferContainer>
			<OfferDetails>
				<HeaderOfOffer name={offerName} />
				<ProductDetails>
					<PriceOfOffer currency={currency} value={amount} unit={unit} />
					<RatingContainer>
						<Rating star={star} alt={ratingDescription} />
						<span>({amountOfProduct})</span>
					</RatingContainer>
				</ProductDetails>
				<SellerPreviewInfo image={profile} user={user} />
				<DescriptionOffer text={offerDescription} />
				<ButtonContainerStyles>
					<Button isPrimary={isLearnEnabled} label={detailButtonText} />
					<FavoriteButton>{outlineHeart}</FavoriteButton>
					<FavoriteButtonContainer>
						<Button label={favoriteButtonText} />
					</FavoriteButtonContainer>
				</ButtonContainerStyles>
			</OfferDetails>
		</OfferStyle>
	)
}

const flexLayout = css`
	display: flex;
	flex-direction: row;
`

const OfferStyle = styled.div`
	background-color: #ffffff;
	margin: 0 0 12px 0;
	${mediaQueriesPx('lg', null)`
		min-height: 225px;
		padding-bottom: 5px;
		display: flex;
		gap: 5%;
		padding-left: 3px;
		padding-right: 11px;
	`}
`

const ButtonContainerStyles = styled.div`
	${flexLayout}
	gap: 5%;
	margin: 27px 0 0 0;
	justify-content: space-between;
	${mediaQueriesPx('lg', null)`
		justify-content: flex-start;
	`}
	button {
		padding: 8px 18px;
		font-size: 16px;
	}
`
const FavoriteButton = styled.button`
	display: block;
	background-color: transparent;
	border: none;
	&:focus {
		outline: none;
	}
	${mediaQueriesPx('lg', null)`
		display: none;
		`}
`

const ProductDetails = styled.div`
	${flexLayout}
	gap: 11.5px;
	align-items: center;
	${mediaQueriesPx('lg', null)`
		gap: 15.75px;
	`}
`

const OfferDetails = styled.div`
	margin-left: 9px;
	padding: 8px 0;
	flex-basis: 65%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	h3 {
		margin-left: -9px;
		padding-left: 9px;
		background-color: #fff;
		width: fit-content;
		font-size: 22px;
		text-transform: capitalize;
		display: none;
		${mediaQueriesPx('lg', null)`
			font-size: 30px;
			display: block;
		`}
	}
`

const FavoriteButtonContainer = styled.div`
	display: none;
	${mediaQueriesPx('lg', null)`
		display: block;
	`}
	button {
		padding: 6px 10px;
	}
`

const RatingContainer = styled.div`
	${flexLayout}
	gap: 4.19px;
	${mediaQueriesPx('lg', null)`
		gap: 7.5px;
	`}
`
const ImageWithinOfferContainer = styled.div`
	position: relative;
	h3 {
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 5;
		background-color: #ffffff;
		padding: 2px 10px 2px 10px;
	}
	${mediaQueriesPx('lg', null)`
		h3 {
			display: none;
		}
	`}
`
