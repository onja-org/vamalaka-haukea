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
    name: 'username',
    type: 'text',
    validInput: false,
  },
  {
    label: 'Email adress',
    placeholder: 'Enter Email adress',
    name: 'email',
    type: 'email',
    validInput: true,
  },
  {
    label: 'Create password',
    placeholder: 'Enter a password',
    name: 'password',
    type: 'password',
    validInput: true,
    // showPassword: 'show',
  },
]

const checkboxProps = {
  termsLabel: 'I agree to the',
  serviceTerms: 'terms & conditions',
  href: '/',
  isChecked: true,
}
const Template: Story<InputProps> = (args) => (
  <OnboardingRegistrationForm {...args} />
)

export const emailInputForm = Template.bind({})
emailInputForm.args = {
  inputProps: inputProps,
  checkboxProps: checkboxProps,
}
