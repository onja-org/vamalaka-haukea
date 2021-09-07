import PendingIndicator from '../components/PendingIndicator/PendingIndicator'
import { Offer } from '../components/Offer/Offer'
import Image from '../assets/offer.svg'
import styled from 'styled-components'

const LoadingStyles = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`

const OffersContainerStyles = styled.div`
	ul {
		padding: 0;
	}
`

export interface OffersType {
	id: string
	body: string
	offerName: string
	currency: string
	amount: number
	unit: string
	imageForRating: string
	star: number
	title: string
	user: {
		firstName: string
		lastName: string
		city: string
		country: string
		username: string
	}
}

export interface OfferCollectionsProps {
	offers: OffersType[]
	status: string
}

const OfferCollections: React.FC<OfferCollectionsProps> = ({
	offers,
	status,
}) => {
	return (
		<OffersContainerStyles>
			{status !== 'idle' ? (
				<LoadingStyles>
					<PendingIndicator alt='Pending indication' size='l' />
				</LoadingStyles>
			) : (
				<ul>
					{offers.map((offer) => (
						<ListItemStyles key={offer.id}>
							<Offer
								imageForOffer={Image}
								imageDescription={offer.body}
								offerName={offer.body}
								currency={offer.currency}
								body={offer.body}
								amount={offer.amount}
								unit={offer.unit}
								imageForRating=''
								star={offer.star}
								ratingDescription='star'
								amountOfProduct={offer.amount}
								offerDescription={offer.body}
								isLearnEnabled={true}
								isFavourited={false}
								detailButtonText={'See details'}
								favoriteButtonText='Add to favourite'
								profile='SellerPrevImage'
								user={{
									firstName: offer.user.firstName,
									lastName: offer.user.firstName,
									username: offer.user.username,
									country: offer.user.country,
									city: offer.user.city,
								}}
							/>
						</ListItemStyles>
					))}
				</ul>
			)}
		</OffersContainerStyles>
	)
}

const ListItemStyles = styled.li`
	padding: 0;
	list-style: none;
	margin: 10px 0;
`

export default OfferCollections
