import styled from 'styled-components'
import { useEffect } from 'react'

import { mediaQueriesPx } from '../mediaQueries'
import { CommonPageContainer } from '../components/CommonPageContainer/CommonPageContainer'
import LearnMoreBanner from '../components/LearnMoreBanner/LearnMoreBanner'
import ImageBanner from '../assets/banner.png'
import { CategoryList } from '../components/CategoryList/CategoryList'
import PendingIndicator from '../components/PendingIndicator/PendingIndicator'
import { CallToAction } from '../components/CallToAction/CallToAction'

import { fetchCategories } from '../redux/slices/categoriesSlice'
import OfferCollections from '../OfferCollection/OfferCollections'
import { fetchOffers } from '../redux/slices/offersSlice'
import { useAppSelector, useAppDispatch } from '../redux/hooks'

export default function HomePage() {
	const dispatch = useAppDispatch()
	const offerState = useAppSelector((state) => state.offers)
	const categoriesState = useAppSelector((state) => state.categories)
	const { offers, status: OfferStatus } = offerState
	const { categories, status: categoriesStatus } = categoriesState

	console.log(offers)

	useEffect(() => {
		dispatch(fetchOffers([]))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		dispatch(fetchCategories([]))
	}, [dispatch])

	return (
		<CommonPageContainer>
			<Main>
				<LearnMoreBanner
					bannerHeading='Madagascars peer-to-peer e-commerce platform'
					bannerDescription='Purchase high-quality products made by the people that sell them. By cutting out middlemen, you know exactly where your purchase is from and how it was made.'
					bannerImage={ImageBanner}
				/>
				<CategoryLabel>Top Categories</CategoryLabel>
				{categoriesStatus === 'loading' ? (
					<PendingIndicator alt='PendingSmallIcon' size='s' />
				) : (
					<CategoryList
						categories={categories}
						primary={true}
						selectCategory={() => {}}
					/>
				)}
				<Separator />
				<OfferCollections offers={offers} status={OfferStatus} />
				<CallToAction
					title='Discover amazing products and profit from a truly fair market:'
					subTitle='This is a subtitle that is very informative'
				/>
			</Main>
		</CommonPageContainer>
	)
}

const Main = styled.main`
	position: relative;
	align-items: center;
	justify-content: center;
	padding-bottom: 318px;

	& > div:last-of-type {
		position: absolute;
		-webkit-transform: translateX(-50%);
		-ms-transform: translateX(-50%);
		transform: translateX(-50%);
		left: 50%;
		width: 100%;
		margin-top: 178px;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center;
		${mediaQueriesPx('lg', null)`
      margin-top: 144px;
    `}
	}

	& > img {
		display: flex;
		left: 50%;
		margin: auto;
	}
`
const CategoryLabel = styled.h3`
	font-family: Futura Std;
	font-style: normal;
	font-weight: normal;
	font-size: 30px;
	line-height: 36px;
	color: #041d42;
	margin-top: 43px;
	margin-bottom: 13px;
	${mediaQueriesPx('lg', null)`
    margin-top: 124px;
  `}
`
const Separator = styled.hr`
	display: none;
	margin: 0;
	margin-top: 25px;
	${mediaQueriesPx('lg', null)`
    border-top: 1px solid #041D42;
    display: block;
  `}
`
