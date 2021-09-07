import { Route, Switch } from 'react-router-dom'
import HomePage from './Pages/HomePage'

import SignIn from './Pages/SignIn'
import SignUp from './Pages/SingUp'
import OnboardingPage from './Pages/OnboardingPage'
import Transactions from './Pages/Transactions'
import NotFound from './Pages/NotFound'
import { Paths } from './components/helper/routerPaths'

function App() {
	return (
		<Switch>
			<Route exact path={Paths.ONBOARDING} component={OnboardingPage} />
			<Route exact path={Paths.HOME} component={HomePage} />
			<Route exact path={Paths.SIGNIN} component={SignIn} />
			<Route exact path={Paths.TRANSACTIONS} component={Transactions} />
			<Route exact path={Paths.SIGNUP} component={SignUp} />
			<Route component={NotFound} />
		</Switch>
	)
}

export default App
