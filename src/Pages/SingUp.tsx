import OnboardingPage from './OnboardingPage';
import { RoleSelectOnboard } from '../components/RoleSelectOnboard/RoleSelectOnboard'

export default function SignUp() {
  return (
    <OnboardingPage children ={<RoleSelectOnboard/>}/>
  )
}
