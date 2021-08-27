import React from 'react'
import styled from 'styled-components'
import { fonts } from '../../globalStyles/fonts'
import Button from '../Button/Button'
import { mediaQueriesPx } from '../../mediaQueries'
export interface CallToActionProperties {
  subTitle: string
  title: string
}

export const CallToAction: React.FC<CallToActionProperties> = ({
  subTitle,
  title,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
      <ActionButtonContainer>
        <Button
          type='button'
          isPrimary={true}
          label='Discover Products'
          isLoading={false}
        />
        <Button
          type='button'
          isPrimary={false}
          label='Become a member'
          isLoading={false}
        />
      </ActionButtonContainer>
    </Container>
  )
}

const Container = styled('div')`
  display: flex;
  padding-top: 29px;
  padding-bottom: 36px;
  flex-direction: column;
  align-items: center;

  max-width: 1167px;
  background: #ffffff;
  ${mediaQueriesPx('lg', null)`
    padding-top: 63px;
    padding-bottom: 74px;
  `}
`
const Title = styled.h2`
  ${fonts}
  font-family: Futura Std;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 36px;

  margin-top: 14px;
  margin-bottom: 0;
  display: flex;
  align-items: flex-end;
  text-align: center;
  order: 2;

  color: #041d42;

  ${mediaQueriesPx('lg', null)`
    font-size: 50px;
    line-height: 60px;
    max-width: 851px;
  `}
`
const SubTitle = styled('h3')`
  ${fonts}
  font-family: Garamond;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 22px;
  margin: 0;

  display: flex;
  align-items: flex-end;
  text-align: center;
  order: 1;

  color: #979797;

  ${mediaQueriesPx('lg', null)`
      font-size: 30px;
      line-height: 34px;
  `}
`

const ActionButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 34px;
  gap: 21px;
  order: 3;
  ${mediaQueriesPx('lg', null)`
    margin-top: 39px;
    flex-direction: row;
    gap: 47.8px;
  `}
`
