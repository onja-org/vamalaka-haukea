import { Story, Meta } from '@storybook/react'
import {RoleSelectOnboard} from './RoleSelectOnboard'

export default {
	title: 'Components/RoleSelectOnboard',
	component: RoleSelectOnboard,
	argTypes: {
		backgroundColor: { control: 'color' }
	}
} as Meta

const Template: Story = (args) => <RoleSelectOnboard {...args} />

export const RoleSelectOnBoardStory = Template.bind({})
RoleSelectOnBoardStory.args = {}