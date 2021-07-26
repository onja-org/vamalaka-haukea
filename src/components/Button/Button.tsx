import React from 'react'
import styled from 'styled-components'
import { fonts } from '../../globalStyles/fonts'
import PendingIndicator from '../PendingIndicator/PendingIndicator'
import { mediaQueriesPx } from "../../mediaQueries";

export interface ButtonProps {
  label?: string
  isPrimary?: boolean
  disabled?: boolean
  isLoading?: boolean
  icon?: JSX.Element
  onClick?: () => void
}

const FirstWrapper = styled.div`
  display: inline-block;
  position: relative;
  background: rgba(252, 70, 43, 0.3);
`
const SecondWrapper = styled.div`
  display: inline-block;
  background: rgba(21, 140, 177, 0.3);
  top: 6px;
  left: -6px; */
`
const ButtonStyled = styled.button<ButtonProps>`
  ${fonts}
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 7.5px;
  @font-face {
    font-family: 'Garamond';
    src: local('Garamond'), local('Garamond');
    font-weight: 400;
    font-style: normal;
  }

  font-family: 'Garamond';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  width: max-content;
  color: ${(props) => (props.isPrimary ? '#FFFFFF' : '#041d42')};
  background-color: ${(props) => (props.isPrimary ? '#041d42' : '#FFFFFF')};
  padding: 9px 14px 8px;
  border: ${(props) => (props.isPrimary ? 'none' : '2px solid #041d42')};
  cursor: pointer;
  outline: none;
  filter: drop-shadow(-3px 3px 0px #A7CBD6) drop-shadow(2px -2px 0px #EDB6AE);
  
  ${mediaQueriesPx('md', null)`
    font-size: 24px;
    line-height: 27px;
    padding: 12px 14px 11px;
  `}
  
  &:disabled {
    color: '#FFFFFF';
    cursor: not-allowed;
    background-color: gray;
  }

  img, svg {
    width: 18px;
    height: 18px;
    ${mediaQueriesPx('md', null)`
      width: 20px;
      height: 20px;
    `}
  }
`

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  isPrimary,
  isLoading,
  icon,
  ...props
}) => {
  return (
    <FirstWrapper>
      <SecondWrapper>
        <ButtonStyled
          type='button'
          isPrimary={isPrimary ? true : false}
          disabled={disabled}
          onClick={() => ''}
          {...props}>
          {isLoading ? <PendingIndicator size='xs' alt="loading icon"/> : ''}
          {icon ? icon : ''}
          <span>{label}</span>
        </ButtonStyled>
      </SecondWrapper>
    </FirstWrapper>
  )
}
export default Button
