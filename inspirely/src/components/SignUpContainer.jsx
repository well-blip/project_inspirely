import React, { useState } from 'react';
import '../signup-login.css';
import { MdEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import { AiFillMobile } from "react-icons/ai";
import SignUpImage from '../components/signUpImage';
import SignUpContent from '../components/SignUpContent';
import Signup2 from '../pages/Signup2';

const SignUpContainer = () => {
  const [showSignup2, setShowSignup2] = useState(false);

  const handleNextClick = () => {
    setShowSignup2(true);
  };
  return (
    <div className="signup-container">
      <SignUpImage />
      {showSignup2 ? (
        <Signup2 />
      ) : (
        <SignUpContent onNextClick={handleNextClick} />
      )}
    </div>
  );
};

export default SignUpContainer;