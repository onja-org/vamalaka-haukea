import { Story, Meta } from '@storybook/react'
import PendingIndicator, { IconType } from './PendingIndicator'

export default {
	title: 'Components/Pending Indicator',
	component: PendingIndicator,
} as Meta

const Template: Story<IconType> = (args) => <PendingIndicator {...args} />

export const PendingMedium = Template.bind({})
PendingMedium.args = {
	alt: 'PendingMediumIcon',
	size: 'm',
}

export const PendingLarge = Template.bind({})
PendingLarge.args = {
	alt: 'PendingLargeIcon',
	size: 'l',
}

export const PendingSmall = Template.bind({})
PendingSmall.args = {
	alt: 'PendingSmallIcon',
	size: 's',
}

export const PendingExtraSmall = Template.bind({})
PendingExtraSmall.args = {
	alt: 'PendingExtraSmallIcon',
	size: 'xs',
}
