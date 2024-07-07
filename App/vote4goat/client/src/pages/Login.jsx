import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
const Login = function(){
    /*const [Form, setForm] = useState({username:'',email:''});*/
    /*const [login,{error,data}] = useMutation();*/
    return(<>
  <form className="signin-form">
  <h2>Sign In</h2>
  <input type="email" placeholder="Email" required="" />
  <input type="password" placeholder="Password" required="" />
  <button type="submit">Sign In</button>
  <p>Not registered yet? <a href='/signUp'>click here to create an account</a></p>
</form>
    </>);

};
//exporting login page
export default Login;