import React from 'react'
import {
  HeaderStyle,
  HeaderContent,
  HeaderPage,
  HeaderInfo,
} from '../CommonForm/CommonFormStyle'
import { Back } from '../Back/Back'

export interface FormHeaderProps {
  backLink: string
  backLabel: string
  headerPageContent: string
}

export const FormHeader: React.FC<FormHeaderProps> = ({
  backLabel,
  headerPageContent,
}) => {
  return (
    <HeaderStyle>
      <Back to='/' label={backLabel} />
      <HeaderContent>
        <HeaderPage>{headerPageContent}</HeaderPage>
        <HeaderInfo>Personal Info.</HeaderInfo>
      </HeaderContent>
    </HeaderStyle>
  )
}
