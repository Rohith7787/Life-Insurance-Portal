import React from 'react';
import Sig from '../Signup/Signup';
import './login.css'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
 
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { useNavigate } from 'react-router-dom';

function Log() {
  const nav = useNavigate();

  const navigate = () => {
      nav("/signup");
  }
  return (
    <MDBContainer className="my-5 gradient-form">

      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img src="https://cdn.dribbble.com/users/118246/screenshots/2943355/media/53f28b287e734843125bbc4d55647e6e.gif"
                style={{width: '185px'}} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">NovaGuard Life Insurance</h4>
            </div>

            <p>Please login to your account</p>


            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>


            <div className="text-center pt-1 mb-5 pb-1">
             <a> <MDBBtn className="mb-4 w-100 gradient-custom-2" style={{color:'white'}}><a href="/dash" style={{color:'white'}}>Sign in</a></MDBBtn> </a>
              <a className="text-muted" href="#!">Forgot password?</a>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
             <a href='/signup'> <MDBBtn outline className='mx-2' color='danger'>
                Sign Up
              </MDBBtn></a>
            </div>

          </div>

        </MDBCol>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 class="mb-4">"Secure Your Future: The Importance of Life Insurance for Financial Protection"</h4>
              <p class="small mb-0">"Life insurance is the foundation of financial security for your loved ones." 
              </p>
            </div>

          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Log;