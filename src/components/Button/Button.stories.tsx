import { Story, Meta } from '@storybook/react'
import Button, {ButtonProps} from './Button'
import { ReactComponent as GoogleIcon} from '../../assets/google.svg';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />
export const LearnEnabled = Template.bind({})
LearnEnabled.args = {
  isPrimary: true,
  label: 'Learn more',
  isLoading: false,
  icon: null,
}

export const LearnLoading = Template.bind({})
LearnLoading.args = {
  isPrimary: true,
  label: 'Learn more',
  isLoading: true,
  icon: null,
}
export const Learndisabled = Template.bind({})
Learndisabled.args = {
  isPrimary: true,
  disabled: true,
  label: 'Learn more',
  isLoading: false,
  icon: null,
}
export const Autoformat = Template.bind({})
Autoformat.args = {
  isPrimary: false,
  label: 'Can you trust us?',
  isLoading: false,
  icon: null,
}

export const AutoformatWithIcon = Template.bind({})
AutoformatWithIcon.args = {
  isPrimary: false,
  label: 'Can you trust us?',
  isLoading: false,
  icon: <GoogleIcon/>,
}
