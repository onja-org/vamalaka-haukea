import React, { ReactElement } from 'react'
import { FormMainWrapper } from './CommonFormStyle'
export type CommonFormProps = {
  children: JSX.Element
}

export const CommonForm: React.FC<CommonFormProps> = ({ children }) => {
  return <FormMainWrapper>{children}</FormMainWrapper>
}
