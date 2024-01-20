import React from 'react';
import '../signup-login.css';
import { MdEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import { AiFillMobile } from "react-icons/ai";
import SignUpImage from '../components/signUpImage';


const Signup2 = () => {
    return (
        <div className="signup-container">
            
            <div className="signup-content">
                <div className="head">
                    <h1 className='heading1'>Sign Up</h1>
                    <p className='paragraph'>How do you plan on using the platform?</p>
                </div>
                <div className='choices'>
                    <button className='choice-button'>Student</button>
                    <button className='choice-button'>Educator</button>
                </div>
                <a href='./'><button className="next">   Next    <span style={{marginLeft:'20px'}}> {'>'}</span></button></a>
        
            </div>
        </div>
    );
};
export default Signup2;