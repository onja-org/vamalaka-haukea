import { Story, Meta } from '@storybook/react'
import { Offer, OfferProps } from './Offer'

import Image from '../../assets/offer.svg'
import SellerPrevImage from '../../assets/seller-prev-img.png'

export default {
	title: 'Offer/Offer',
	component: Offer,
} as Meta

const Template: Story<OfferProps> = (args) => <Offer {...args} />
export const OfferComponent = Template.bind({})
OfferComponent.args = {
	imageForOffer: Image,
	imageDescription: 'Image of offer',
	offerName: 'Cocoa nuts',
	currency: 'Euro',
	amount: 25.0,
	unit: 'kilo',
	star: 3,
	ratingDescription: 'star',
	amountOfProduct: 27,
	offerDescription:
		'This is a very detailed description that is absolutely necessary for being attractive to customers...',
	isLearnEnabled: true,
	isFavourited: false,
	detailButtonText: 'See details',
	favoriteButtonText: 'Add to favourite',
	profile: SellerPrevImage,
	user: {
		firstName: 'Eliud',
		lastName: 'Kipchoge',
		country: 'Madagascar',
		city: 'Mahanoro',
		username: 'Hello',
	},
}
