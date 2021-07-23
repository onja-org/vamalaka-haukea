import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Input, InputProps } from './InputName'

export default {
  title: 'Input/Input Name',
  component: Input,
} as Meta

const Template: Story<InputProps> = (args) => <Input {...args} />

export const largeInput = Template.bind({})
largeInput.args = {
  placeholder: 'Invictus Innocent',
  label: 'Your full name',
  name: 'large',
  type: 'email',
  validInput: true,
}

export const smallInput = Template.bind({})
smallInput.args = {
  placeholder: 'Invictus Innocent',
  label: 'Your full name',
  name: 'small',
  type: 'email',
  validInput: true,
}

export const redBorderInput = Template.bind({})
redBorderInput.args = {
  placeholder: 'Invictus Innocent',
  label: 'Your full name',
  name: 'small',
  type: 'email',
  validInput: false,
}
