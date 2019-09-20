import React from 'react';
import './App.css';
import {Switch,BrowserRouter as Router,Route} from'react-router-dom';
import SubDomain from './components/SubDomain';
class App extends React.Component
{
  render()
  {
    return <Router>
      <Switch>
        <Route path='/' component={SubDomain}/>
      </Switch>
    </Router>
  }
}

export default App;
