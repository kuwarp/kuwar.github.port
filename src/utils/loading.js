import ReactLoading from "react-loading";
import "./loading.css";
import logo from "../img/KUWARP.gif";
const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
      <div className='lazy'>
        <span></span><span></span><span></span><span></span>
        
        <span></span><span></span><span></span><span></span>
    
    </div>
        <ReactLoading
          type="cylon"
          color="darkkhaki"
          margin="12%"
          height="10%"
          width="10%"
          delay="7"
        />
        <div id="section_land">
            <p className="intro">Landing On KuwarP Portfolio</p>
        </div>
        <ReactLoading
         id='section_logo-i'
          type="cylon"
          color="darkkhaki"
          margin="12%"
          height="10%"
          width="10%"
          delay="2"
        />
      <div id="section_logo">
          <img className="logo" src={logo} alt="" />
         
        </div>
     
      </div>
    </div>
  );
};
export default Loading;
