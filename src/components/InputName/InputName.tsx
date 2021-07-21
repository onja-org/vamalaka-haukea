import React, { useState } from 'react'

import styled, { css } from 'styled-components'
import { fonts } from '../../globalStyles/fonts'

const inputStyles = css`
  ${fonts}
  'Futura Std', Arial, Helvetica, sans-serif
  background: #ffffff;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #979797;
  text-transform: capitalize;
  outline: none;
  border: 1px solid #041d42;
  border-radius: 6px;
  position: relative;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: max-content;
  .labelStyle {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    color: #979797;
    padding-bottom: 6px;
    align-items: start;
    font-family: 'Futura Std', Arial, Helvetica, sans-serif;
  }
`

const InputElement = styled.input`
  ${fonts}
  position: absolute;

  max-width: 240px;
  padding-top: 12px;
  padding-left: 14px;
  padding-bottom: 12px;
  padding-right: 34px;
  &:focus {
    box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.11);
  }

  ${inputStyles}
  @media (min-width: 400px ) {
    max-width: 320px;
    padding-top: 12px;
    padding-left: 27px;
    padding-bottom: 12px;
    padding-right: 76px;
    &:focus {
      box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.11);
    }

    ${inputStyles}
  }
  ${inputStyles}
  font-family: 'Futura Std', Arial, Helvetica, sans-serif;

  &::-webkit-input-placeholder {
    ${fonts}
    font-family: 'Futura Std', Arial, Helvetica, sans-serif;
  }

  &:-ms-input-placeholder {
    ${fonts}
    font-family: 'Futura Std', Arial, Helvetica, sans-serif;
  }

  &::placeholder {
    ${fonts}
    font-family: 'Futura Std', Arial, Helvetica, sans-serif;
  }
`
const Button = styled.button`
  position: absolute;
  border: none;
  background: none;
  cursor: pointer;
  bottom: 13px;
  right: 17px;
  @media (min-width: 400px) {
    right: 38px;
  }
`

export interface InputProps {
  label: string
  placeholder: string
  name: string
  type: string
  // showPassword: string
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  name,
  type,
  // showPassword,
}) => {
  const [showPassword, setShowpassword] = useState(false)

  return (
    <InputContainer>
      <label className='labelStyle'>{label}</label>
      {name === 'password' ? (
        <div style={{ position: 'relative' }}>
          <InputElement
            placeholder={placeholder}
            type={showPassword ? 'text' : type}
          />
          <Button type='button' onClick={() => setShowpassword(!showPassword)}>
            show
          </Button>
        </div>
      ) : (
        <InputElement placeholder={placeholder} type={type} />
      )}
    </InputContainer>
  )
}

export default Input
