import './app.scss'
import Home from './pages/home/Home'
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Watch from './pages/watch/Watch';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './authContext/AuthContext';

function App() {
  const {user} = useContext(AuthContext)
  return (
    <div className="App">
      <Switch>
          <Route path="/" exact>
           {user ? <Home /> : <Redirect to="register" />} 
          </Route>
          <Route path="/login">
            {!user ? <Login /> : <Redirect to="/" />} 
          </Route>
          <Route path="/register">
            {!user ? <Register /> : <Redirect to="/" />} 
          </Route>
          {user && (
            <>
              <Route path="/movies">
                <Home type="movie"/>
              </Route>
              <Route path="/series">
                <Home type="series"/>
              </Route>
              <Route path="/watch">
                <Watch />
              </Route>
            </>
          )}
      </Switch>
    </div>
  );
}

export default App;
