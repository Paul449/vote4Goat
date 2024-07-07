import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate, useLocation } from 'react-router-dom';
const signUp = function(){
    let location = useLocation();
    let navigate = useNavigate();
    return(<>
    <div className="signUp">
  <h2>Sign Up</h2>
  <form action="/signup" method="post">
    <label htmlFor="first_name">First Name</label>
    <input type="text" id="first_name" name="first_name" required="" />
    <label htmlFor="last_name">Last Name</label>
    <input type="text" id="last_name" name="last_name" required="" />
    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" required="" />
    <label htmlFor="password">Password</label>
    <input type="password" id="password" name="password" required="" />
    <button type="submit">Sign Up</button>
    <p>Already registered? <a href='/Login'>Click here to sign in</a></p>
  </form>
</div>
    </>)
};
//exporting login page
export default signUp;