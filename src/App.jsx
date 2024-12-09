import logo from "./logo.jpg";
import sectwo from "./sectwo.jpeg";
import userPic from "./User profile.jpg";
import user1 from "./50.jpg";
import user2 from "./58.jpg";
import user3 from "./86.jpg";
import user4 from "./9.jpg";
import ball from "./ball.webp"
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div>
          <nav className="header-1">
            <a href="#">
              <img src={logo} alt="logo" className="logo" />
              GO-PRO!
            </a>
            <ul className="">
              <div className="nav-bar">
                <li className="nav-link">
                  <a href="">Network</a>
                </li>
                <li className="nav-link">
                  <a href="">Game On!</a>
                </li>
                <li className="nav-link">
                  <a href="">More</a>
                </li>
                <li className="nav-link">
                  <a href="">Contact Us</a>
                </li>
              </div>
            </ul>
          </nav>
        </div>
      </div>
      <div className="cover-page">
        <h1>WHY SHOULD PROFESSIONALS HAVE ALL THE FUN?</h1>
        {/* <h1></h1> */}
        <h2>|JOIN THE |COMMUNITY |AND GO |PRO!</h2>
        <p>
          We provide you with the endless possibilities to Level-up your game.
          We believe in you and are ready to provide quality products to enhance
          your cricket.
        </p>
      </div>
      <div className="sec-one">
        <h1>"---WHY CHOOSE US?---"</h1>
        <div className="sec-one-part-1">
          <div className="points-3">
            <h3>LEVEL UP 01</h3>
              <p>
                Get in-depth analysis of matches, players with Cric-Insights.
              </p>
            <h3>SCORE SYSTEM 02</h3>
              <p>
                Explore player performances and match outcomes with a Professional Scorecard.

              </p>
            <h3>TAKE CONTROL 03</h3>
              <p>
                Take control of your ground reservations with Book My Ground.
              </p>
          </div>
          <div className="sec-img">
            <img src={sectwo} alt="" />
          </div>
            <div className="points-6">
              <h3>04 BUILD INTEREST</h3>
              <p>
                Find players, opponent teams, umpires and scorers with Looking.
              </p>
              <h3>05 JOIN THE COMMUNITY</h3>
              <p>
                Enter the world of the entire Cricket Community and unite with them.
              </p>
              <h3>06 GET CANDID</h3>
              <p>
                View your favourite star's candid moments!
              </p>
          </div>
        </div>
      </div>
      <div className="sec-three">
        <h1>---LOVE WE GET---</h1>
        <h3>BY</h3>
        <h1>THE EXPERIENCE WE OFFER</h1>
        <div className="sec-three-img">
          <div className="review-img">
            <img src={user1} alt="" />
            <p>The best app for cricket. It has reduced our efforts and PRO-Insights is totally cherry on the top. Would recommend to everyone.</p>
          </div>
          <div className="review-img">
            <img src={user2} alt="" />
            <p>Amazing cricket scoring app. Any time you can check insights of opponents and make strategy against the team as well individuals. </p>
          </div>
          <div className="review-img">
            <img src={user3} alt="" />
            <p>This app has made me play better cricket. The analysis, insights add value to your game and tournaments. Will definitely recommend to all. Keep rocking guys.</p>
          </div>
          <div className="review-img">
            <img src={user4} alt="" />
            <p>I can't thank you enough. GO-PRO! has made my cricket life more interesting and addictive. It has helped a lot to improve individual and team game with Insights. Can’t live without GO-PRO! App.</p>
          </div>
        </div>
          <div className="sec-three-p">
            <p>" WE BELIEVE IN PROVIDING QUALITY " SERVICE! </p>
          </div>
      </div>
      <div className="footer-div">
        {/* <img src={ball} alt=""/> */}
        <h1>THANKS FOR VISITING!</h1>
        <footer className="footer">
          <div className="footer-h3"> 
            <h3>Know more about us...</h3>
            <div>
              <h3>Follow Our Socials To Stay Updated</h3>  
            </div>
          </div>
          <div className="footer-para-1">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nostrum sunt maiores temporibus illum, laboriosam eius neque assumenda delectus nisi.</p>
            <div className="footer-links">
              <ul>
                <li><a href="">~Facebook</a></li>
                <li><a href="">~Instagran</a></li>
                <li><a href="">~Twitter</a></li>

              </ul>
            </div>
          </div>
      
          
        </footer>
      </div>
    </div>
  );
}

export default App;
