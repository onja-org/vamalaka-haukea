import { useState } from 'react'
import {
  TopContainerStyles,
  MainContainer,
  MainContent,
  AccountContainer,
  ImageContainer,
  JoinUsHeader,
  Frame
} from './RoleSelectOnboardStyles';

import { DescriptionOffer } from '../DescriptionOffer/descriptionOffer'
import { RoleSelectOption } from '../RoleSelectOption/RoleSelectOption'
import { Login } from '../Login/Login';
import { LeftSide } from '../LeftSide/LeftSide';

import StepCounter from '../StepCounter/StepCounter';

export const RoleSelectOnboard = () => {
  const roleOptions = [
    { label: 'Buyer', id: '1' },
    { label: 'Seller', id: '2' },
  ]
  const [role, setRole] = useState({ label: '', id: '' })

  return (
    <TopContainerStyles>
      <MainContainer>
        <ImageContainer>
          <LeftSide backgroundImage='Baobab' />
        </ImageContainer>
        <MainContent>
          {role.label ? (
            <p>Form field of account registration will be here ....</p>
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
              <AccountContainer>
                <Login isSignedUp={false} href='./' />
                <StepCounter stepNum= '01'stepName= 'Personal Info.'/>
              </AccountContainer>
            </Frame>
          )}
        </MainContent>
      </MainContainer>
    </TopContainerStyles>
  )
}
