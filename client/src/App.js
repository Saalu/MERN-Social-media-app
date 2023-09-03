import './App.css';
import { useState } from 'react';
import Login from './components/Login';
import Posts from './components/Posts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="App">
    {  isLogin?
     (<Posts/>):
     ( <Login setIsLogin={setIsLogin}/>)
      }
    </div>
  );
}

export default App;
