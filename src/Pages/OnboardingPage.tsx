import { CommonPageContainer } from "../components/CommonPageContainer/CommonPageContainer";
export interface OnboardProperties {
  children: JSX.Element
}

const OnboardingPage: React.FC<OnboardProperties> = ({children}) => {
  return (
    <CommonPageContainer>
      {children}
    </CommonPageContainer>
  )
}

export default OnboardingPage
