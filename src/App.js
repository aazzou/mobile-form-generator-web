import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import { observer } from 'mobx-react'

import MobileFormStore from './store/MobileFormStore'

import { Login, Home, Sheets, WebUsers, MobileUsers, Studio } from './pages/'
import { IFormCreator, IFormNew, IFormList, HeadLessIFormCreator } from './pages/forms'
import DevTools from 'mobx-react-devtools';

const isLoggedIn = () => {
    let token = window.localStorage.getItem("owline:token");
    return (token !== null);
}

const PrivateRoute = ({ component: Component, ...rest }) => (

  <Route {...rest} render={props => (
    isLoggedIn() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)


@observer
class App extends React.Component {
  constructor (props){
    super(props)
  }

  render() {
    return (
      <div>
        <DevTools />
         <Router>
           <div>
           <Route path='/' component={Studio} />
            <Route exact path='/login' component={Login} />
            <Route path='/studio' component={Studio} />
            <PrivateRoute exact path='/home' component={Home} />
            <PrivateRoute exact path='/sheets' component={Sheets} />
            <PrivateRoute exact path='/users/mobile' component={MobileUsers} />
            <PrivateRoute exact path='/users/web' component={WebUsers} />
            <PrivateRoute exact path='/forms' component={IFormList} />
            <PrivateRoute exact path='/forms/new' component={IFormNew} />
            <PrivateRoute path='/forms/studio/:id' component={IFormCreator} />
          </div>
        </Router>
      </div>
    );

  }
}
export default withRouter(App)
