import "./about.css";
import Award from "../../img/award.jpg";
import hym from '../../img/KUWARP.gif'

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={hym}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        <p className="para">
            I mostly work on web development using JavaScript and Database
            technologies. I build and develop robust, secure and scalable
            infrastructure and servers using various database technologies such
            as MySql,postreSql,MongoDb,Maria,Laravel and proficient with both
            frontend and backend web development technologies such as React,
            Node.js, JavaScript, PHP, etc. I have Strong Knowledge in operating
            System Mechanism. I also known pen-test, OS Administration, and
            working on different different Opersting Systems such as : Windows,
            Linux,Ubuntu.
          </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">My Certifications</h4>
            <p className="a-award-desc" >
              <a className="linking" href="\" >click on this for Hackerrank</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
