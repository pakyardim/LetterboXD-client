import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import logo2 from "../images/logo2.png";
import SignInPopup from "./SignInPopup";

const Header = () => {
  const [isTriggered, setIsTriggered] = React.useState(false);

  const handleClick = () => {
    setIsTriggered(!isTriggered);
  };
  return (
    <header>
      <section>
        <Link to="/">
          <div className="head-left">
            <img className="logo" src={logo2} alt="Letterboxd Logo" />
            <h1>LetterboXD</h1>
          </div>
        </Link>

        <ul className="navitems">
          <li>
            <Link to="/">SIGN IN</Link>
          </li>
          <li>
            <button onClick={handleClick} className="createAccountBtn">
              CREATE ACCOUNT
            </button>
            <SignInPopup setTrigger={setIsTriggered} trigger={isTriggered} />
          </li>
          <li>FILMS</li>
          <li>LISTS</li>
          <li>
            <FaSearch />
          </li>
        </ul>
      </section>
    </header>
  );
};

export default Header;
