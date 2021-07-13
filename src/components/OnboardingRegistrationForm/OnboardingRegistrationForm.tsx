import React, { FC } from 'react'
import { Input } from '../InputName/InputName'
import styled from 'styled-components'

const FormStyle = styled.div`
  background: white;
  width: 320px;
  padding: 16px;
`

export interface InputProps {
  inputProps: [
    {
      label: string
      placeholder: string
      name: string
      type: string
    }
  ]
}

export const OnboardingRegistrationForm: React.FC<InputProps> = ({
  inputProps,
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

        <button> Register Account</button>
        <button> Register with google</button>
      </form>
    </FormStyle>
  )
}
