import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Input, InputProps } from './InputName'

export default {
  title: 'Input/Input Name',
  component: Input,
} as Meta

const Template: Story<InputProps> = (args) => <Input {...args} />

export const EmptyInput = Template.bind({})
EmptyInput.args = {
  placeholder: 'Invictus Innocent',
  label: 'Email address',
  inputName: 'email',
  inputType: 'email',
  isValid: true,
}

export const ValidInput = Template.bind({})
ValidInput.args = {
  placeholder: 'Invictus Innocent',
  label: 'Email address',
  inputName: 'email',
  inputType: 'email',
  isValid: true,
}

export const InvalidInput = Template.bind({})
InvalidInput.args = {
  placeholder: 'Invictus Innocent',
  label: 'Email address',
  inputName: 'email',
  inputType: 'email',
  isValid: false,
}

export const PasswordInput = Template.bind({})
PasswordInput.args = {
  placeholder: 'Invictus Innocent',
  label: 'Create password',
  inputName: 'password',
  inputType: 'password',
  isValid: false,
}
