import React from 'react';
import './landingpage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <div className="contae">
          <a href="/About" className="logo"> <b>Nova Guard Insurance</b></a>
          <ul className="links">
            <a href='/Home'><li>Home</li></a>
            <a href="/About"><li>About Us</li></a>
            <a href='Help'><li>help</li></a>
            <a href='/Login'><li>Login</li></a>
          </ul>
        </div>
      </header>
      <div className="content">
        <div className="contae">
          <div className="info">
            <h1>Looking For an Insurance ?</h1>
            <p>NovaGuard offers various life insurance products that provide financial protection to policyholders and their families in the event of unfortunate circumstances such as death, disability, or critical illness...</p>
            <a href='/Moreinfo'><button>More Info</button></a>
          </div>
          <div className="image">
            <img src="https://media.istockphoto.com/id/1305352525/vector/family-under-umbrella-concept-of-life-insurance-protection-of-health-and-life-of-children.jpg?s=612x612&w=0&k=20&c=a30dkj2BafYVg-8m06bD16-DaMxwMXUSTlAJ3pe875o=" alt="Landing Page" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
