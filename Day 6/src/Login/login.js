import React from 'react';
import './login.css';

const Login = () => {
  return (
    <section id='rohith'>
    <div className="holder">

      <div className="parent">
        <h3>NG LOGIN</h3>
        <form action="/dash">
          <div>
            <input type="text" placeholder="Username or Email" required />
            <span className="border"></span>
          </div>
          <div>
            <input type="password" placeholder="Password" required />  
            <span className="border"></span>
          </div>
          <input type="submit" value="LOGIN" className="private-inp" />
          <p>
            Don't have an account?
            <a href="/Signup">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
    </section>
  );
};

export default Login;
