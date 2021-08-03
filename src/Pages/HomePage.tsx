import styled from "styled-components"
import { CommonPageContainer } from "../components/CommonPageContainer/CommonPageContainer";
import LearnMoreBanner from "../components/LearnMoreBanner/LearnMoreBanner";
import ImageBanner from '../stories/assets/banner.png';
import { CategoryList } from "../components/CategoryList/CategoryList";
import {Offer} from "../components/Offer/Offer";
import Image from '../stories/assets/offer.svg'
import SellerPrevImage from '../stories/assets/seller-prev-img.png'
import { mediaQueriesPx } from "../mediaQueries";
import { CallToAction } from "../components/CallToAction/CallToAction";
const categories = [
  { id: '1', title: 'Food' },
  { id: '2', title: 'Handmade' },
  { id: '3', title: 'Spices' },
  { id: '4', title: 'Collectibles' },
  {id: '5', title: 'Everything'},
]

const offers = [
  {
  imageForOffer: Image,
  imageDescription: 'Image of offer',
  offerName: 'Cocoa nuts',
  currency: 'Euro',
  amount: 25.0,
  unit: 'kilo',
  star: 3,
  ratingDescription: 'star',
  amountOfProduct: 27,
  offerDescription:
    'This is a very detailed description that is absolutely necessary for being attractive to customers...',
  isLearnEnabled: true,
  isFavourited: false,
  detailButtonText: 'See details',
  favoriteButtonText: 'Add to favourite',
  profile: SellerPrevImage,
  name: {
    firstName: 'Eliud',
    lastName: 'Kipchoge',
  },
  location: {
    country: 'Madagascar',
    city: 'Mahanoro',
  }, 
  id: 1,
},
{imageForOffer: Image,
  imageDescription: 'Image of offer',
  offerName: 'Cocoa nuts',
  currency: 'Euro',
  amount: 25.0,
  unit: 'kilo',
  star: 3,
  ratingDescription: 'star',
  amountOfProduct: 27,
  offerDescription:
    'This is a very detailed description that is absolutely necessary for being attractive to customers...',
  isLearnEnabled: true,
  isFavourited: false,
  detailButtonText: 'See details',
  favoriteButtonText: 'Add to favourite',
  profile: SellerPrevImage,
  name: {
    firstName: 'Eliud',
    lastName: 'Kipchoge',
  },
  location: {
    country: 'Madagascar',
    city: 'Mahanoro',
  }, 
  id: 2,
},{
  imageForOffer: Image,
  imageDescription: 'Image of offer',
  offerName: 'Cocoa nuts',
  currency: 'Euro',
  amount: 25.0,
  unit: 'kilo',
  star: 3,
  ratingDescription: 'star',
  amountOfProduct: 27,
  offerDescription:
    'This is a very detailed description that is absolutely necessary for being attractive to customers...',
  isLearnEnabled: true,
  isFavourited: false,
  detailButtonText: 'See details',
  favoriteButtonText: 'Add to favourite',
  profile: SellerPrevImage,
  name: {
    firstName: 'Eliud',
    lastName: 'Kipchoge',
  },
  location: {
    country: 'Madagascar',
    city: 'Mahanoro',
  }, 
  id: 3,
}]

export default function HomePage() {
  return (
        <CommonPageContainer>
            <Main>
                <LearnMoreBanner bannerHeading="Madagascars peer-to-peer e-commerce platform" bannerDescription = "Purchase high-quality products made by the people that sell them. By cutting out middlemen, you know exactly where your purchase is from and how it was made." bannerImage={ImageBanner} />
                <CategoryLabel>Top Categories</CategoryLabel>
                <CategoryList categories={categories} primary={true} selectCategory={() => {}}/>
                <Separator/>
                <OfferList>
                  {offers.map(offer => {
                    return <Offer key={offer.id} 
                      imageForOffer ={Image}
                      imageDescription = {offer.imageDescription}
                      imageForRating=''
                      offerName= {offer.offerName}
                      currency= {offer.currency}
                      amount={offer.amount}
                      unit= {offer.unit}
                      star= {offer.star}
                      ratingDescription = {offer.ratingDescription}
                      amountOfProduct={offer.amountOfProduct}
                      offerDescription={offer.offerDescription}
                      isLearnEnabled={offer.isLearnEnabled}
                      isFavourited= {offer.isFavourited}
                      detailButtonText= {offer.detailButtonText}
                      favoriteButtonText= {offer.favoriteButtonText}
                      profile= {offer.profile}
                      name={offer.name}
                      location={offer.location}/>
                    })}
                </OfferList>
                <CallToAction title="Discover amazing products and profit from a truly fair market:" subTitle="This is a subtitle that is very informative"/>
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
`;
const CategoryLabel = styled.h3`
    font-family: Futura Std;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 36px;
    color: #041D42;
    margin-top: 43px;
    margin-bottom: 13px;
    ${mediaQueriesPx('lg', null)`
    margin-top: 124px;
  `}
`;
const OfferList = styled.div`
  margin-top: 39px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  ${mediaQueriesPx('lg', null)`
    margin-top: 30px;
  `}
`;
const Separator = styled.hr`
  display: none;
  margin: 0;
  margin-top: 25px;
  ${mediaQueriesPx('lg', null)`
    border-top: 1px solid #041D42;
    display: block;
  `}
`;
