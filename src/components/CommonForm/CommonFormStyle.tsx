import styled, { css } from 'styled-components'
import { mediaQueriesPx } from '../../mediaQueries'

export const FlexLayout = css`
  display: flex;
  flex-direction: column;
`;

export const FormMainContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0;
  flex-basis: 50%;
  ${mediaQueriesPx(null, 'md')`
  display: block;
    & > div:nth-child(1) {
      display: none;
    }
  `}
`;

export const FormMainWrapper = styled.div`
  font-family: 'Futura Std', Arial, Helvetica, sans-serif;
  font-style: normal;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
  max-width: 426px;
  min-height: inherit;
  
  ${mediaQueriesPx(null, 'sm')`
   width: 100%;
  `}

  ${mediaQueriesPx('sm', 'lg')`
    width: 70%;
  `}
  ${mediaQueriesPx('lg', null)`
    padding-top: 18px;
    flex: 50%;
    height: 100%;
  `}
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

export const HeaderStyle = styled.div`
  display: none;
  ${mediaQueriesPx('lg', null)`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-left: 13px;
    padding-right: 26px;
  `}
`;

export const HeaderContent = styled.div`
  ${FlexLayout}
  align-items: flex-end;
  gap: 4px;
`;

export const HeaderPage = styled.span`
  color: #bdbdbd;
  font-size: 14px;
  line-height: 17px;
`;

export const HeaderInfo = styled.strong`
  color: #979797;
  font-weight: 650;
  font-size: 16px;
  line-height: 19px;
`;

export const FormContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  ${mediaQueriesPx('lg', null)`
    display: grid;
    grid-template-rows: 66px 1fr;
    width: 100%;
  `}
`;

export const FormStyle = styled.form`
  display: grid;
  grid-template-rows: 1fr 183px;
  align-items: center;
  max-width: 426px;
  height: 100%;
  margin: auto;
  ${mediaQueriesPx('lg', null)`
    align-items: end;
    align-items: center;
    max-width: 426px;
    margin: auto;
  `}
`;

export const FormContent = styled.div`
  ${FlexLayout}
  gap: 14px;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  margin-bottom: 34px;
  ${mediaQueriesPx('lg', null)`
    flex-direction: row;
    margin-bottom: unset;
    gap: 26px;
  `}
  & > div > div button {
    font-size: 16px;
    line-height: 18px;
    padding: 9px 14px 8px;
    ${mediaQueriesPx('md', 'lg')`
      font-size: 24px;
      line-height: 27px;
      padding: 12px 14px 11px;
    `}
  }
`
export const FormHeading = styled.h2`
  text-align: left;
  margin: 0;
  display: none;
  font-size: 30px;
  line-height: 36px;
  color: #041d42;

  ${mediaQueriesPx('lg', null)`
   display: block;
  `}
`

