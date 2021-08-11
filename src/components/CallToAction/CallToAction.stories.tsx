import { Story, Meta } from '@storybook/react'
import { CallToAction, CallToActionProperties } from './CallToAction'

export default {
  title: 'Components/Call to action',
  component: CallToAction,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<CallToActionProperties> = (args) => (
  <CallToAction {...args} />
)

export const CallToActionPreview = Template.bind({})
CallToActionPreview.args = {
  subTitle: 'This is a subtitle that is very informative',
  title: 'Discover amazing products and profit from a truly fair market: ',
}
