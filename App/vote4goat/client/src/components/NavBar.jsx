import {useLocation, useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
//import logo
import logo from '../assets/Logo.png'
import Landing from '../pages/Landing';
export default function NavBar(){
    const location = useLocation();
    const navigate = useNavigate();
    function landingPage(){
      navigate('/')
    }
    function profilePage(){
      navigate('/Profile')
    }
    return(
      <>
    <div className='navBar'>
      <div id='vote4Goat'>
        <h2>VOTE4GOAT</h2>
      </div>
      <div className='Logout-Settings'>
        <button onClick={landingPage} id='Logout'>Logout</button>
        <button onClick={profilePage} id='Settings'>Profile</button>
      </div>
        <img src={logo} id='Logo'></img>
      </div>
      </>
      )
};

