import React from 'react';
import '../components/Authenticate/signup-login.css';


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