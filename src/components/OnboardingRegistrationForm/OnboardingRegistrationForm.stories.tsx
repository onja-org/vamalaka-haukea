import React, { FC } from 'react'
import { Meta, Story } from '@storybook/react'
import { InputProps } from './OnboardingRegistrationForm'
import { OnboardingRegistrationForm } from './OnboardingRegistrationForm'

export default {
  title: 'Onboarding Registration',
  component: OnboardingRegistrationForm,
} as Meta
const inputProps = [
  {
    label: 'Your full name',
    placeholder: 'Invictus innocent',
    name: 'email',
    type: 'email',
  },
  {
    label: 'Email adress',
    placeholder: 'Enter Email adress',
    name: 'text',
    type: 'email',
  },
  {
    label: 'Create password',
    placeholder: 'Enter a password',
    name: 'text',
    type: 'email',
  },
  {
    label: 'I agree to the terms & condition',
    placeholder: '',
    name: 'chexbox',
    type: 'checkbox',
  },
]

const Template: Story<InputProps> = (args) => (
  <OnboardingRegistrationForm {...args} />
)

export const emailInputForm = Template.bind({})
emailInputForm.args = {
  inputProps: inputProps,
}
