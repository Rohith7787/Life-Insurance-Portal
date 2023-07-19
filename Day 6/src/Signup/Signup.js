import React from 'react';
import './Signup.css'

const Sig = () => {
  return (
    <section id='rohith'>
    <div className="holder">
      <div className="parent">
        <h3>Sign Up</h3>
        <form action="">
          <div>
            <input type="text" placeholder="Name *" required />
            <span className="border"></span>
          </div>
          <div>
            <input type="email" placeholder="Email *" required />
            <span className="border"></span>
          </div>
          <div>
            <input type="password" placeholder="Password *" required />
            <span className="border"></span>
          </div>
          <div>
            <input type="password" placeholder="Confirm Password *" required />
            <span className="border"></span>
          </div>
          <input type="submit" value="Register" className="private-inp" />
          <p>
            Already Have an Account?
            <a href="/Login">Login Here</a>
          </p>
        </form>
      
      </div>
    </div>
    </section>
  );
};

export default Sig;
