// import {React,useContext} from "react";
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBBox } from "cdbreact";
// import { ThemeContext } from "../../Context";
import logo from "../../img/KUWARP.gif";
import "../footer/footer.css";
const footer = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox
        display="flex"
        flex="column"
        className=" mx-auto py-5"
        style={{ width: "80%" }}
      >
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a
              href="/"
              className="logo d-flex  text-decoration-none align-items-center p-0 "
            >
              <img alt="logo" src={logo} width="30px" />
              <span className="mb-4  ml-3 p-2 h5 font-weight-bold ">KUWARP</span>
            </a>
          </CDBBox>
          <CDBBox
            display="flex"
            style={{ width: "50%" }}
            justifyContent="between"
          >
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                Socials
              </p>
              <CDBBox
                flex="column"
                display="flex"
                style={{ cursor: "pointer", padding: "2"}}
              >
                <CDBFooterLink> <a style={{color:"#8feb5e"}} href="https://github.com/kuwarp?tab=repositories" target="_blank" className="text-decoration-none" rel="noopener noreferrer"> Reposetries</a> </CDBFooterLink>
                <CDBFooterLink> <a style={{color:"#8feb5e"}} href="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=kuwarp&theme=dracula" target="_blank" className="text-decoration-none" rel="noopener noreferrer"> About-me</a> </CDBFooterLink>
                <CDBFooterLink> <a style={{color:"#8feb5e"}}  href="https://github.com/kuwarp/node-js" target="_blank" className="text-decoration-none" rel="noopener noreferrer"> NodeJs-Notes </a> </CDBFooterLink>
                <CDBFooterLink> <a style={{color:"#8feb5e"}}  href="http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=kuwarp&theme=gruvbox" target="_blank" className="text-decoration-none" rel="noopener noreferrer"> Mostly-Commit language </a> </CDBFooterLink>
                {/* http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=vn7n24fzkq&theme=default */}
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                Certificates
              </p>
              <CDBBox
                className="box"
                display="flex"
                flex="column"
                style={{ cursor: "pointer", padding: "0" }}
              >
                <a href="http://" style={{color:"#8feb5e", textDecoration:"none"}}>Hacker Rank</a>
                <a href="http://" style={{color:"#8feb5e", textDecoration:"none"}}>Compete</a>
                <a href="http://" style={{color:"#8feb5e", textDecoration:"none"}}>DataBase</a>
                
                
              </CDBBox>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <CDBBox display="flex" className="mt-4" justifyContent="between">
          <small className="ml-2">
            &copy; KuwarP, 2022. All rights reserved.
          </small>
          <CDBBox display="flex">
            <CDBBtn flat color="dark" className="p-2">
              <a href="http://www.facebook.com">
                <CDBIcon fab icon="facebook-f" />
              </a>
            </CDBBtn>
            <CDBBtn flat color="dark" className="mx-3 p-2">
              <CDBIcon fab icon="twitter" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="instagram" />
            </CDBBtn>
          </CDBBox>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};
export default footer;
