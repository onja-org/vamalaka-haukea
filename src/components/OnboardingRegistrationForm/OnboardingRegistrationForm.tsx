import React, { FC } from 'react'
import { Input } from '../InputName/InputName'
import { TermsAndConditions } from '../TermsAndConditions/TermsAndConditions'
import styled from 'styled-components'
import Google from '../OnboardingRegistrationForm/images/google.svg'
import { useState } from 'react'

const FormStyle = styled.div`
  background: white;
  padding: 16px;
`

const Span = styled.span`
  margin: 16px;
  margin-bottom: 32px;
`

const ButtonRegisrtation = styled.button`
  background-color: #041d42;
  width: 210px;
  height: 50px;
  color: white;
  border-radius: 6px;
  margin-rigth: 16px;
`
const ButtonGoogleRegisrtation = styled.button`
  width: 210px;
  height: 50px;
  background-color: white;
  border: none;
  box-shadow: 1px 1px 10px gray;
  border-radius: 6px;
  @media (max-width: 320px) {
    margin-left: 0;
  }
  margin-left: 16px;
  margin-top: 16px;
`

interface ObjType {
  label: string
  placeholder: string
  name: string
  type: string

  // showPassword: string
}
export interface TermsAndConditionsProps {
  termsLabel: string
  href: string
  serviceTerms: string
  isChecked?: boolean
}

export interface InputProps {
  inputProps: ObjType[]
  checkboxProps: TermsAndConditionsProps
}

export const OnboardingRegistrationForm: React.FC<InputProps> = ({
  inputProps,
  checkboxProps,
}) => {
  return (
    <FormStyle>
      <form>
        {inputProps.map((prop) => (
          <Input
            label={prop.label}
            placeholder={prop.placeholder}
            name={prop.name}
            type={prop.type}
          />
        ))}
        <TermsAndConditions
          termsLabel={checkboxProps.termsLabel}
          serviceTerms={checkboxProps.serviceTerms}
          href={checkboxProps.href}
        />

        <ButtonRegisrtation>Register Account</ButtonRegisrtation>
        <ButtonGoogleRegisrtation>
          <img src={Google} />
          <Span> Register with google </Span>
        </ButtonGoogleRegisrtation>
      </form>
    </FormStyle>
  )
}
