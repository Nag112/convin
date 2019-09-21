import React,{Suspense} from 'react';
import './App.css';
import {Switch,BrowserRouter as Router,Route,Redirect} from'react-router-dom';
import SubDomain from './components/SubDomain';
import Signup from './components/signup';
import Login from './components/login';
import Graphs from './components/graphs'
const PrivateRoute = ({ component: Component, ...rest }) => {
  let loggedIn = JSON.parse(localStorage.getItem('token'));
  return (
    <Route
      {...rest}
      render={props =>
        loggedIn ? (
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
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/graphs" component={Graphs}/>
          <Route path='/' component={SubDomain}/>
        </Switch>
     </Suspense>
    </Router>
  }
}

export default App;
