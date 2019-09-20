import React,{Suspense} from 'react';
import './App.css';
import {Switch,BrowserRouter as Router,Route,Redirect} from'react-router-dom';
import SubDomain from './components/SubDomain';
import Signup from './components/signup';

const PrivateRoute = ({ component: Component, ...rest }) => {
  let loggedIn = JSON.parse(localStorage.getItem("user"));

  return (
    <Route
      {...rest}
      render={props =>
        loggedIn && loggedIn.token && loggedIn.user ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};
class App extends React.Component
{
  render()
  {
    return <Router>
     <Suspense fallback={<SubDomain/>}>
        <Switch>
          <Route path='/' component={SubDomain}/>
          <PrivateRoute exact path="/login"/>
          <Route exact path="/signup" component={Signup}/>
          <PrivateRoute exact path="/graphs"/>
        </Switch>
     </Suspense>
    </Router>
  }
}

export default App;
