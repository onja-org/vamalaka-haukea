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
  name: 'email',
  type: 'email',
  validInput: true,
  inputValue: '',
  onChange: () => null,
}

export const ValidInput = Template.bind({})
ValidInput.args = {
  placeholder: 'Invictus Innocent',
  label: 'Email address',
  name: 'email',
  type: 'email',
  validInput: true,
  inputValue: 'name@gmail.com',
  onChange: () => null,
}

export const InvalidInput = Template.bind({})
InvalidInput.args = {
  placeholder: 'Invictus Innocent',
  label: 'Email address',
  name: 'email',
  type: 'email',
  validInput: false,
  inputValue: 'name@gmail',
  onChange: () => null,
}

export const PasswordInput = Template.bind({})
PasswordInput.args = {
  placeholder: 'Invictus Innocent',
  label: 'Create password',
  name: 'password',
  type: 'password',
  validInput: false,
  inputValue: 'aaaaj',
  onChange: () => null,
}
