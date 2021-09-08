import React, { useEffect, useState } from 'react'
import {
  TopContainerStyles,
  MainContainer,
  MainContent,
  AccountContainer,
  ImageContainer,
  JoinUsHeader,
  Frame,
  Wrapper,
  Form,
} from './RoleSelectOnboardStyles';

import {ButtonContainer} from '../CommonForm/CommonFormStyle';
import { CommonForm } from '../CommonForm/CommonForm';
import { DescriptionOffer } from '../DescriptionOffer/descriptionOffer'
import { RoleSelectOption } from '../RoleSelectOption/RoleSelectOption'
import { Login } from '../Login/Login';
import { LeftSide } from '../LeftSide/LeftSide';
import InputName from '../InputName/InputName';
import Button from '../Button/Button';
import { ReactComponent as GoogleIcon} from '../../assets/google.svg';
import { Back } from '../Back/Back';
import StepCounter from '../StepCounter/StepCounter';
import { TermsAndConditions } from '../TermsAndConditions/TermsAndConditions';

import { useSelector } from 'react-redux';
import {
  fetchUserRegistration,
  userRegistrationError,
} from '../../redux/slices/userSlice'
import { useAppDispatch } from '../../redux/hooks';


export const RoleSelectOnboard = () => {
  const roleOptions = [
    { label: 'buyer', id: '1' },
    { label: 'seller', id: '2' },
  ]
  const [role, setRole] = useState({ label: '', id: '' });
  const [accountToRegister, setAccountToRegister] = React.useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    role: '',
  });

  const dispatch = useAppDispatch()
  const userRegisterError = useSelector(userRegistrationError)
  
  const isInvalidUserName = userRegisterError?.message.includes("username") || userRegisterError?.message.includes("User name");
  const isInvalidEmail = userRegisterError?.message.includes("email");
  const isInvalidPassword = userRegisterError?.message.includes("password");
  
  const submitRegistration = () => {
      dispatch(
        fetchUserRegistration({
          ...accountToRegister
        })
      )
  };

  const usernameErrorMessage = isInvalidUserName && accountToRegister.username.length < 1 ? 'Username must not be empty' : isInvalidUserName && accountToRegister.username.length > 0 ? 'User name already exists' : '';
  const emailErrorMessage = isInvalidEmail && accountToRegister.email.length < 1 ? 'Email must not be empty' : isInvalidEmail && accountToRegister.email.length > 0 ? 'Email must be a valid email address' : '';
  const passwordErrorMessage = isInvalidPassword && accountToRegister.password.length < 1 ? 'Password must not be empty' : isInvalidPassword && accountToRegister.password.length > 0 ? 'Password must be at least 8 characters long' : '';

  const onSelectRole = () => {
    setAccountToRegister({
      ...accountToRegister,
      role: role.label,
    })
  }

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountToRegister({
      ...accountToRegister,
      username: e.target.value,
    })
  }

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountToRegister({
      ...accountToRegister,
      email: e.target.value,
    })
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountToRegister({
      ...accountToRegister,
      password: e.target.value,
      confirmPassword: e.target.value
    })
  }
  
  useEffect(() => {
    onSelectRole();
    // eslint-disable-next-line
  }, [role]);

  return (
    <TopContainerStyles>
      <MainContainer>
        <ImageContainer>
          <LeftSide backgroundImage='Baobab' />
        </ImageContainer>
        <MainContent>
          {role.label ? (
            <Wrapper>
              <CommonForm children={
                <>
                  <div>
                    <JoinUsHeader>Join us</JoinUsHeader>
                    <Form>
                      <InputName inputType='email' onChange={onChangeUsername} placeholder="Username" inputName="username" isValid={!isInvalidUserName} label="Your username" erroMessage={usernameErrorMessage}/>
                      <InputName inputType='email' onChange={onChangeEmail} placeholder="Enter email address" inputName="email" isValid={!isInvalidEmail} label="Email address" erroMessage={emailErrorMessage}/>
                      <InputName inputType='password' onChange={onChangePassword} placeholder="Enter a password" inputName="password" isValid={!isInvalidPassword} label="Create password" erroMessage={passwordErrorMessage}/>
                      <TermsAndConditions
                        termsLabel='I agree to the'
                        serviceTerms="terms & conditions"
                        href= '/'
                        isChecked={false}
                      />
                    </Form>
                  </div>
                  <ButtonContainer>
                    <Button 
                      type='button'
                      label="Register Account"
                      onClick={() => {
                        submitRegistration();
                      }}
                      disabled={false}
                      isPrimary={true}
                      isLoading={false}/>
                    <Button 
                      type='button'
                      label="Register with Google"
                      onClick={() => {}}
                      disabled={false}
                      isPrimary={false}
                      icon={<GoogleIcon/>}
                      isLoading={false}/>
                  </ButtonContainer>
                </>
              }/>
            </Wrapper>
          ) : (
            <Frame>
              <JoinUsHeader>Join us</JoinUsHeader>
              <DescriptionOffer
                text={
                  "To begin this story, tell us what kind of account you'd be opening "
                }
              />
              {roleOptions.map((role) => (
                <RoleSelectOption
                  key={role.id}
                  setRole={setRole}
                  role={role}
                  label={role.label}
                  text='Own or belong to a company, this is for you.'
                />
              ))}
            </Frame>
          )}
          <AccountContainer>
            {role.label ?
            <Back size='large' to='/' label="Back"/>
            :
            <Login isSignedUp={false} href='./'/>
            }
            <StepCounter stepNum= '01'stepName= 'Personal Info.'/>
          </AccountContainer>
        </MainContent>
      </MainContainer>
    </TopContainerStyles>
  )
}
