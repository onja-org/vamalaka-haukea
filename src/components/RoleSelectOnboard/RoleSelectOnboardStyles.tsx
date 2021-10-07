import styled from "styled-components"
import { mediaQueriesPx } from "../../mediaQueries"

export const TopContainerStyles = styled.div`
  width: 100%;
  min-height: 444px;
`

export const MainContainer = styled.div`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  width: 90%;
  padding-top: 41px;
  display: flex;
  justify-content: center;
`

export const MainContent = styled.div`
  position: relative;
  max-width: 583px;
  width: 100%;
  background-color: #fff;

  ${mediaQueriesPx('lg', null)`
    flex-basis: 50%;
    padding: calc(113px - 14px * 2) 0;
  `}
`;

export const AccountContainer = styled.div`
  color: #979797;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  margin: auto;
  max-width: 426px;
  padding:0px 14px;

  ${mediaQueriesPx(null, 'sm')`
    width: 100%;
  `}

  ${mediaQueriesPx('sm', 'lg')`
    width: 70%;
  `}
  
  ${mediaQueriesPx(null, 'lg')`
    & > a {
      margin-bottom: 48px;
    }
    div:first-of-type {
      margin-bottom: 48px;
    }
    div:last-of-type {
        display: none;
    }
  `} 
  ${mediaQueriesPx('lg', null)`
    & > a {
      position: absolute;
      margin: 0;
      top: 22px;
    }
    div:first-of-type {
      padding: 0;
    }
    div {
      position: absolute;
      margin: 0;
      top: 22px;
    }
    div:last-of-type {
      right: 27px;
      p:last-of-type {
        display: none;
      }
    }
  `}
`;

export const Wrapper = styled.div`
  height: 100%;
  ${mediaQueriesPx(null, 'lg')`
    height: auto;
    min-height: 497px;
    margin-inline: 17px;
    margin-block: 45px 0px;
  `}
`;

export const Frame = styled.div`
  max-width: 426px;
  margin: auto;
  padding: 14px;
  div {
    margin: 14px 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 35px;
`;

export const ImageContainer = styled.div`
  margin: 0;
  padding: 0;
  max-width: 583px;
  height: 100%;
  overflow: hidden;
  ${mediaQueriesPx(null, 'lg')`
    display: none;
  `} 
  ${mediaQueriesPx('lg', null)`
    flex-basis: 50%;
  `}
  p {
    margin: 0;
  }
`

export const JoinUsHeader = styled.h3`
  font-family: Futura Std;
  font-style: normal;
  font-weight: 650;
  font-size: 30px;
  line-height: 36px;
  align-items: center;
  color: #041D42;
  margin: calc(27px - 14px) 0 4px 0;
`;
