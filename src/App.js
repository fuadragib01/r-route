import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import Post from './components/Post';

function App() {

  const [login, setLogin] = useState(false);

  return (
    <BrowserRouter>
      <div className='App'>
        <Header/>
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/profile">
            {/* {login ? <Profile/> : <Redirect to='/'/>} */}
            <Profile login={login} />
          </Route>
          <Route exact path="/post/:id" component={Post} />

          <Route exact component={NotFound} />
        </Switch>

        <button onClick={()=>setLogin(!login)}>{login ? 'Log Out' : 'LogIn'}</button>
      </div>
    </BrowserRouter>
  );
}

export default App;
