import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-top">
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="https://letterboxd.com/about/">About</a>
              </li>
              <li>
                <a href="https://letterboxd.com/about/terms/">News</a>
              </li>
              <li>
                <a href="https://letterboxd.com/about/privacy/">Pro</a>
              </li>
              <li>
                <a href="https://letterboxd.com/about/cookies/">Apps</a>
              </li>
              <li>
                <a href="https://letterboxd.com/about/press/">Help</a>
              </li>
              <li>
                <a href="https://letterboxd.com/about/press/">API</a>
              </li>
              <li>
                <a href="https://letterboxd.com/about/press/">Contact</a>
              </li>
            </ul>
          </nav>
          <ul className="socials">
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaYoutube />
            </li>
            <li>
              <FaTiktok />
            </li>
          </ul>
        </div>
        <p className="copyright">
          © LetterboXD Limited. Made by Emirhan Pakyardım. Film data from TMDb.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
