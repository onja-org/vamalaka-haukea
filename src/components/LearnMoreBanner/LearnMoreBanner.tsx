import React from 'react'
import styled from 'styled-components'
import { fonts } from '../../globalStyles/fonts'
import Button from '../Button/Button'
import { mediaQueriesPx } from '../../mediaQueries'

export interface BannerProps {
  bannerHeading: string
  bannerDescription: string
  bannerImage: string
}

export const LearnMoreBanner: React.FC<BannerProps> = ({
  bannerHeading,
  bannerDescription,
  bannerImage,
}) => {
  return (
    <BannerContainer>
      <BannerFigure>
        <BannerImage src={bannerImage} alt='features image intro' />
      </BannerFigure>
      <Article>
        <BannerHeading>{bannerHeading}</BannerHeading>
        <BannerDescription>{bannerDescription}</BannerDescription>
        <Button
          type='button'
          label={'Learn how it works'}
          onClick={() => {}}
          disabled={false}
          isPrimary={true}
          isLoading={false}
        />
      </Article>
    </BannerContainer>
  )
}

const BannerContainer = styled.header`
  ${fonts}
  display: flex;
  flex-direction: column;
  ${mediaQueriesPx('lg', null)`
    flex-direction: row-reverse;
  `}
`

const BannerFigure = styled.figure`
  margin: 0;
  margin-bottom: 24px;

  ${mediaQueriesPx('lg', null)`
    margin-bottom: 0;
  `}
`

const BannerImage = styled.img`
  width: 100%;
  ${mediaQueriesPx('lg', null)`
    max-width: 614px;
  `}
`

const BannerHeading = styled.h2`
  font-family: Futura Std;
  font-style: normal;
  font-weight: normal;
  display: flex;
  align-items: center;
  color: #041d42;

  ${mediaQueriesPx(null, 'lg')`
    font-weight: normal;
    font-size: 25px;
    line-height: 30px;
  `}
  ${mediaQueriesPx('lg', null)`
    font-size: 50px;
    line-height: 60px;
  `}
`

const BannerDescription = styled.p`
  font-family: Garamond;
  font-style: normal;
  font-weight: normal;
  align-items: center;
  ${mediaQueriesPx(null, 'lg')`
    font-size: 20px;
    line-height: 22px;
  `}
  color: #041D42;
  ${mediaQueriesPx('lg', null)`
    font-size: 35px;
    line-height: 39px;
  `}
`

const Article = styled.article`
  ${mediaQueriesPx('md', null)`
    max-width: 618px;
  `}
`

export default LearnMoreBanner
