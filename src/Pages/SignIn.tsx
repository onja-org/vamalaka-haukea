import {ButtonContainer} from '../components/CommonForm/CommonFormStyle'
import {
  TopContainerStyles,
  MainContainer,
  MainContent,
  AccountContainer,
  ImageContainer,
  Wrapper,
  Form,
} from '../components/RoleSelectOnboard/RoleSelectOnboardStyles';
import { CommonPageContainer } from "../components/CommonPageContainer/CommonPageContainer";
import InputName from '../components//InputName/InputName';
import Button from '../components/Button/Button';
import { Login } from '../components/Login/Login';
import { LeftSide } from '../components/LeftSide/LeftSide';
import { ReactComponent as GoogleIcon} from '../assets/google.svg';
import { CommonForm } from '../components/CommonForm/CommonForm';

const LoginFormContainer = MainContent;

export type SigninProps = {
  loginAccount: {
    emailAddress: string
    password: string
  }
  isChecked?: boolean
  errorMessage?: {
    email: string
    password: string
  }
  onChangeEmail: React.ChangeEventHandler<HTMLInputElement> | undefined
  onChangePassword: React.ChangeEventHandler<HTMLInputElement> | undefined
  onClickLoginOnGoogle: () => void
  onClickLogin: () => void
}

const SignIn: React.FC<SigninProps> = ({
  // loginAccount,
  // errorMessage,
  // isChecked,
  // onChangeEmail,
  // onChangePassword,
  onClickLogin,
  onClickLoginOnGoogle,
}) =>   {
  return (
    <CommonPageContainer>
      <TopContainerStyles>
        <MainContainer>
          <ImageContainer>
            <LeftSide backgroundImage='Baobab' />
          </ImageContainer>
          <LoginFormContainer>
            <Wrapper>
              <AccountContainer>
              <Login isSignedUp={true} href='./' />
            </AccountContainer>
            <CommonForm children={
                <>
                  <Form>
                    <InputName inputType='email'  placeholder="Enter email address" inputName="email" isValid={true} label="Email address"/>
                    <InputName inputType='password' placeholder="Enter a password" inputName="password" isValid={true} label="Create password" />
                  </Form>
                  <ButtonContainer>
                    <Button 
                      type='button'
                      label="Login"
                      onClick={onClickLogin}
                      disabled={false}
                      isPrimary={true}
                      isLoading={false}/>
                    <Button 
                      type='button'
                      label="Login with google"
                      onClick={onClickLoginOnGoogle}
                      disabled={false}
                      isPrimary={false}
                      icon={<GoogleIcon/>}
                      isLoading={false}/>
                  </ButtonContainer>
                </>
            }/>
            </Wrapper>
          </LoginFormContainer>
        </MainContainer>
    </TopContainerStyles>
    </CommonPageContainer>
  )
}

export default SignIn;



