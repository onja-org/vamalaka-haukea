import { Story, Meta } from '@storybook/react'
import SellerPrevImage from '../../assets/seller-prev-img.png'
import { SellerPreviewInfo, SellerInfoProperties } from './SellerPreviewInfo'

export default {
	title: 'Components/Seller preview information',
	component: SellerPreviewInfo,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta

const Template: Story<SellerInfoProperties> = (args) => (
	<SellerPreviewInfo {...args} />
)

export const SellerPreview = Template.bind({})
SellerPreview.args = {
	image: SellerPrevImage,
	user: {
		firstName: 'Eliud',
		lastName: 'Kipchoge',
		country: 'Madagascar',
		city: 'Mahanoro',
		username: 'John',
	},
}
