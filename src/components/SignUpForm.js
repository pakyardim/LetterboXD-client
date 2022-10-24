import axios from "axios";
import React from "react";

const SignUpForm = () => {
  const [userName, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/users", {
        userName,
        email,
        password,
        headers: { "Access-Control-Allow-Origin": "*" },
      });
    } catch (err) {
      console.log(err);
    }
    e.target.reset();
  };

  return (
    <div className="loginContainer">
      <h1>Join LetterboXD</h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <fieldset>
          <section className="account-info">
            <div className="form-row">
              <label>Email adress</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="username123@gmail.com"
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div className="form-row">
              <label>Username</label>
              <input
                onChange={(e) => setUserName(e.target.value)}
                placeholder="username123"
                type="text"
                id="username"
                name="username"
              />
            </div>
            <div className="form-row">
              <label>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                type="password"
                id="password"
                name="password"
              />
            </div>
            <div className="form-row">
              <label className="checkboxLabel">
                <input type="checkbox" className="checkbox" />
                "I'm at least 16 years old and I agree to the Terms of Service
                and Privacy Policy."
              </label>
              <label>that doesn't affect anything btw.</label>
            </div>
            <div className="form-row buttons">
              <input
                type="submit"
                id="submit"
                value="Sign Up"
                className="subBtn"
              />
            </div>
          </section>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUpForm;
