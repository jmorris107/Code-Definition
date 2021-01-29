import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as 
    Router,
    Switch, 
    Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import List from './components/pages/List'
import Learn from './components/pages/Learn'
import SignUp from './components/pages/SignUp'


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/list' component={List} />
        <Route path='/learn' component={Learn} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
      </Router>
    </>
  );
}

export default App;
