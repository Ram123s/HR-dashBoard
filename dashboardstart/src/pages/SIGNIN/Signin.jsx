import React from "react";
import logo from "../../assets/logo.png";
import sininImg from "../../assets/signinimg.svg";
import "./Signin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { PiSuitcaseLight } from "react-icons/pi";
import { RiLockPasswordLine } from "react-icons/ri";

const Signin = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className=" content p-5 col-lg-6 col 12">
          <div className="logo ">
          <img src={logo} alt="" />
          <h3>Your Logo</h3>
          </div>
          

          <div className="signin_content">
            <h1>Sign Into</h1>
            <h3>Your Account</h3>
        

      <form className="form-class">
      <div>
            
              <input
                type="text "
                className=" inputbox"
                placeholder=" Company Id"
              />
              <PiSuitcaseLight className="icons" />
             
            </div>
            <div>
           
              <input
                type="password  "
                className="inputbox"
                placeholder=" password"
              />
              <RiLockPasswordLine className="icons2" />
            </div>
            <div>
              <input type="checkbox" />
              <span>Remember me</span>
            </div>

            <button className="signinbtn btn btn-danger">Sign In</button>
      </form>
           
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <img className="img-fluid" src={sininImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Signin;