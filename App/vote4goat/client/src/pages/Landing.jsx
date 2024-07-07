import {useLocation, useNavigate} from 'react-router-dom';
import Login from '../pages/Login';
const Landing = function(){
  const location = useLocation();
  const navigate = useNavigate();
  function handleLogin(){
    navigate('/Login')
  }
  function handleSignUp(){
    navigate('/signUp')
  }
    return(<>
    <main>
<div className="Landing">
  <button onClick={handleLogin} className="btn sign-in">Sign In</button>
  <button onClick={handleSignUp} className="btn sign-up">Sign Up</button>
</div>
</main>
    </>)
};

export default Landing;