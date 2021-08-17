import { Route, Switch } from 'react-router-dom'
// import { sendQuery, getAdsQuery } from './graphqlHelper';
// import { useSelector, useDispatch } from 'react-redux'

// import {
//   adsSelector,
//   decrement,
//   fetchAds,
//   incrementByAmount,
// } from './redux/slices/adsSlice'
// import { useAppSelector, useAppDispatch } from './redux/hooks'
import HomePage from './Pages/HomePage'
import SignIn from './Pages/SignIn'
import { RoleSelectOnboard } from './components/RoleSelectOnboard/RoleSelectOnboard'
import Transactions from './Pages/Transactions'
import NotFound from './Pages/NotFound'
//import OnboardingPage from './Pages/OnboardingPage'

function App() {
  // const count = useAppSelector((state) => state.ads.value)
  // const ads = useSelector(adsSelector)

  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/signin' component={SignIn} />
      <Route exact path='/transactions' component={Transactions} />
      <Route exact path='/signup' component={RoleSelectOnboard} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default App
