import React from 'react';
import './Signup.css'
import Log from '../Login/login';
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

function Sig() {
    
    const nav = useNavigate();

    const navigate = () => {
        nav("/");
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

            <p>Create Your Account</p>


            <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='Name'/>
            <MDBInput wrapperClass='mb-4' label='Email' id='form2' type='email'/>
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>
           


            <div className="text-center pt-1 mb-5 pb-1">
             <a href='/'> <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign Up</MDBBtn> </a>
        
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Already have an account?</p>
              <MDBBtn outline className='mx-2' color='danger' onClick={navigate}>
                Sign In
              </MDBBtn>
            </div>

          </div>

        </MDBCol>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 class="mb-4">"Hurry Up! Sign up to get more offers"</h4>
              <p class="small mb-0">"Invest in life insurance today, so your loved ones can have a secure tomorrow." 
              </p>
            </div>

          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Sig;