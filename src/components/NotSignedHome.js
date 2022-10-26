import React from "react";
import { FaAndroid, FaApple, FaEye, FaHeart, FaStar, FaAlignLeft, FaCalendar, FaThLarge} from "react-icons/fa";

const NotSignedHome = () => {
  return (
    <main>
      <div className="notSignedMain">
        <div className="headlines">
          <h2>Track films you’ve watched.</h2>
          <h2>Save those you want to see.</h2>
          <h2>(And it's even better than Letterboxd.)</h2>
        </div>
        <button className="notSignedButton">GET STARTED - IT'S FREE!</button>
      </div>
      <div className="">
        <p className="available">
          The social network for film lovers. Not available on <FaApple />{" "}
          <FaAndroid />
        </p>
      </div>

      <section className="highlights">
        <h2 className="tagline">LETTERBOXD LETS YOU...</h2>
        <div className="cards">
          <div className="card green">
            <span><FaEye/></span>
            <p>
            Keep track of every film you’ve ever watched (or just start from the day you join)
            </p>
          </div>
          <div className="card orange">
            <span><FaHeart/></span>
            <p>
            Show some love for your favorite films, lists and reviews with a “like”
            </p>
          </div>
          <div className="card blue">
            <span><FaAlignLeft/></span>
            <p>
            Write and share reviews, and follow friends and other members to read theirs
            </p>
          </div>
          <div className="card green">
            <span><FaStar/></span>
            <p>
            Rate each film on a five-star scale (with halves) to record and share your reaction
            </p>
          </div>
          <div className="card orange">
            <span><FaCalendar/></span>
            <p>
              Keep a diary of your film watching 
            </p>
          </div>
          <div className="card blue">
            <span><FaThLarge/></span>
            <p>
            Compile and share lists of films on any topic and keep a watchlist of films to see
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotSignedHome;
