import React from "react";
import { AiFillMobile } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import './signup-login.css';
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { app, auth, googleAuthProvider } from '../../firebase.js';
import { useNavigate } from "react-router-dom";
import GoogleButton from 'react-google-button';

const SignUpContent = ({ onNextClick }) => {

    const [registerEmail, setRegisterEmail] = useState();
    const [registerPassword, setRegisterPassword] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();

    const navigate = useNavigate();

    //handles creating user with email and password
    const handleSignup = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(userCredential);
            const user = userCredential.user;
            localStorage.setItem('token', user.accessToken);
            localStorage.setItem('user', JSON.stringify(user));

        } catch (error) {
            console.error('Error signing up:', error.message);
        }
    }

    //handles creating user google credentials
    const handleSignUpWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleAuthProvider);
            console.log(result);
            localStorage.setItem('token', result.user.accessToken);
            localStorage.setItem('user', JSON.stringify(result.user));
            onNextClick();
        } catch (error) {
            console.error(error);
        }
    }
    //function calls handleSignup function and onnextclick
    const handleNextClick = () => {
        handleSignup();
        onNextClick();
    }
    return (
        <div className="signup-content">
            <div className="head">
                <h1 className="heading1">Sign Up</h1>
                <p className="paragraph">Please fill in your information below</p>
            </div>
            <div className="name-boxes">
                <div className="name-box">
                    <input type="text" placeholder="First Name" />
                </div>
                <div className="name-box">
                    <input type="text" placeholder="Last Name" />
                </div>
            </div>

            <div className="mobile-number">
                <AiFillMobile style={{ fontSize: '40px', margin: '5px 20px', color: "grey" }} />

                <input type="text" placeholder="Enter your Mobile number" />
            </div>
            <div className="email">
                <MdEmail style={{ fontSize: '40px', margin: '5px 20px', color: "grey" }} />
                <input type="email" placeholder="Enter your e-mail" onChange={(event) => { setRegisterEmail(event.target.value); }} />
            </div>
            <div className="password">
                <MdOutlinePassword style={{ fontSize: '40px', margin: '5px 20px', color: "grey" }} />
                <input type="password" placeholder="Enter password" onChange={(event) => { setRegisterPassword(event.target.value); }} />
            </div>
            <GoogleButton style={{ backgroundColor: '#f5f5f5', color: '#333', border: 'none', padding: '8px 20px', borderRadius: '4px' }}
                onClick={handleSignUpWithGoogle}
            />
            <div className='exist-account-next'>
                <div className="exist-account">
                    <p>Already have an account? </p>
                    <a href="./Login"><p style={{ fontWeight: "bold", color: "blue" }}>Login to your account</p></a>
                </div>

                <button className="next" onClick={handleNextClick}>   Next    <span style={{ marginLeft: '20px' }}> {'>'}</span></button>

            </div>
        </div>

    );
};

export default SignUpContent;