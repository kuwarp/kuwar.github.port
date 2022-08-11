import react from "react";


import "./intro.css";
import Me from "../../img/legit.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, Here is</h2>
          <h1 className="i-name">Kuwar Pratap Singh</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Software Engineer</div>
              <div className="i-title-item">Frontend developer</div>
              <div className="i-title-item">Writer</div>
              <div className="i-title-item">Freelancer</div>
            </div>
          </div>
          <p className=" i-desc">
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
          
          <br />
          <br />
          <br />

          <div className="i-title-item i-title-contribution">
          {/* http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=vn7n24fzkq&theme=default */}
            {/* <a className="contri-link" href="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=kuwarp&theme=dracula"> */}
            <a className="contri-link" href=" http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=kuwarp&theme=default">
              My Contibutions ➡️
            </a>
          </div>
        </div>
      </div>
      

      <div className="i-right">
        <img src={Me} alt="" className="i-img " />
      </div>
    </div>
  );
};

export default Intro;
