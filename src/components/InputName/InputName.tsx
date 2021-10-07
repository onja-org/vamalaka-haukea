import React, { useState } from 'react'

import styled, { css } from 'styled-components'
import { fonts } from '../../globalStyles/fonts'

export interface InputProps {
  label: string
  placeholder: string
  inputName?: string
  inputType: string
  isValid: boolean
  prop?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  erroMessage?: string
}

interface styledPropType {
  isError: boolean
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  inputName,
  inputType,
  isValid,
  onChange,
  erroMessage
}) => {
  const [showPassword, setShowpassword] = useState(false);
  const [inputValue, setInputValue] = useState('');

  function inputValueHandler(e: any) {
    setInputValue(e.target.value);
    if(onChange) {
      onChange(e);
    }
  }
  return (
    <InputContainer>
      <div style={{ position: 'relative' }}>
      
        <LabelContainer>
          <Label>{label}</Label>
          {!isValid && 
          <ErrorMessage>
            {erroMessage}
          </ErrorMessage>}
        </LabelContainer>
        
        <InputElement
          value={inputValue}
          placeholder={placeholder}
          type={showPassword ? 'text' : inputType}
          name={inputName}
          onChange={inputValueHandler}
          isError={!isValid}
          autoComplete='off'
          required
        />
        {inputType === 'password' ? (
          <Button isError={!isValid} type='button' onClick={() => setShowpassword(!showPassword)}>
            {showPassword ? 'hide' : 'show'}
          </Button>
        ) : (
          ''
        )}
      </div>
    </InputContainer>
  )
}

export default Input


const inputStyles = css`
  ${fonts}
  font-family:'Futura Std', Arial, Helvetica, sans-serif;
  background: #ffffff;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #979797;
  outline: none;
  border: 1px solid #041d42;
  border-radius: 6px;
  position: relative;
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const Label = styled.label`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  color: #979797;
  align-items: start;
  font-family: 'Futura Std', Arial, Helvetica, sans-serif;
`;

const ErrorMessage = styled.small`
  color: #FC462B;
  font-size: 16px;
  line-hight: 19px;
`;

const InputElement = styled.input<styledPropType>`
  ${fonts}

  position: absolute;
  width: -webkit-fill-available;
  padding-top: 12px;
  padding-left: 14px;
  padding-bottom: 12px;
  padding-right: 34px;
  ${inputStyles}
  border: 1px solid ${({isError}) => isError ? '#FC462B' : '#041d42'};
  color: ${({isError}) => isError ? '#FC462B' : '#041d42'};
  &:focus {
    box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.11);
  }

  @media (min-width: 400px ) {
    padding-top: 12px;
    padding-left: 27px;
    padding-bottom: 12px;
    padding-right: 76px;
    &:focus {
      box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.11);
    }
  }
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
const Button = styled.button<styledPropType>`
  position: absolute;
  border: none;
  background: none;
  cursor: pointer;
  bottom: 13px;
  right: 17px;
  color: ${({isError}) => isError ? '#FC462B' : '#041d42'};
  @media (min-width: 400px) {
    right: 38px;
  }
`

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`