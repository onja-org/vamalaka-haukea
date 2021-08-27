import React from 'react'
import { Story, Meta } from '@storybook/react'
import { FormHeader, FormHeaderProps } from './FormHeader'

export default {
  title: 'Components/HeaderForm',
  component: FormHeader,
} as Meta

const Template: Story<FormHeaderProps> = (args) => <FormHeader {...args} />

export const FormHeaderStory = Template.bind({})
FormHeaderStory.args = {
  backLabel: 'Back',
  headerPageContent: 'STEP 01/02',
}
