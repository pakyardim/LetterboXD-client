import React from "react";
import SignUpForm from "./SignUpForm";

const SignInPopup = (props) => {
  return (props.trigger) ? (
    <div className="popup">
        <SignUpForm />
        <button onClick={()=> props.setTrigger(false)}className="closeBtn">Close</button>
    </div>
  ) : "";
};


export default SignInPopup;
