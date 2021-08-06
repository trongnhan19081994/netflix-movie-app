import './app.scss'
import Home from './pages/home/Home'
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Watch from './pages/watch/Watch';

function App() {
  return (
    <div className="App">
    <Home />
      <Register />
      <Login />
      <Watch />
    </div>
  );
}

export default App;
