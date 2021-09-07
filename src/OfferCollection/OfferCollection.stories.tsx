import { Story, Meta } from '@storybook/react'
import OfferCollections, { OfferCollectionsProps } from './OfferCollections'

export default {
	title: 'Components/OfferCollections',
	component: OfferCollections,
} as Meta

const Template: Story<OfferCollectionsProps> = (args) => (
	<OfferCollections {...args} />
)

export const OfferCollectionView = Template.bind({})
OfferCollectionView.args = {
	offers: [
		{
			id: '52234',
			body: 'string',
			offerName: 'string',
			currency: 'string',
			amount: 23,
			unit: 'string',
			imageForRating: 'string',
			star: 34,
			title: 'string',
			user: {
				firstName: 'string',
				lastName: 'string',
				city: 'string',
				country: 'string',
				username: 'string',
			},
		},
		{
			id: '52234',
			body: 'string',
			offerName: 'string',
			currency: 'string',
			amount: 23,
			unit: 'string',
			imageForRating: 'string',
			star: 34,
			title: 'string',
			user: {
				firstName: 'string',
				lastName: 'string',
				city: 'string',
				country: 'string',
				username: 'string',
			},
		},
		{
			id: '52234',
			body: 'string',
			offerName: 'string',
			currency: 'string',
			amount: 23,
			unit: 'string',
			imageForRating: 'string',
			star: 34,
			title: 'string',
			user: {
				firstName: 'string',
				lastName: 'string',
				city: 'string',
				country: 'string',
				username: 'string',
			},
		},
	],
	status: 'idle',
}
