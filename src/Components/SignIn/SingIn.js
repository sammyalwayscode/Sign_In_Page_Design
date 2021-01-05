import React from 'react'
import "./SignIn.css"
import leaf from "../Img/leaf.png"
import atr from "../Img/arry.png"

function SingIn() {
  return (
    <div className="parentDiv">
      <div className="subParentDiv">
        <div className="signInCard">

          <div className="imageDiv">
            <p className="logo">Logo</p>
            <img src={leaf} alt="leaf" className="immmmmg" /> </div>
          <div className="formDiv">
            <div className="first">
              <p className="hello">hello,</p>
              <p className="join">join to us</p>
              <p className="afterJoin">before you sign in make sure you first of all go through the terms and <br /> conditions once that is done you can now proceed with the sign in</p>
            </div>
            <div className="inputDiv">
              <div className="shortInputDiv">
                <input placeholder="First name" className="one" />
                <input placeholder="Last name" className="two" />
              </div>
              <div><input placeholder="E-mail Address" className="three" /></div>
              <div><input placeholder="Password" className="three" /></div>
              <div><input placeholder="Country" className="three" />
                {/* <select>
                  <option>Canada</option>
                  <option>Spain</option>
                  <option>Nigeria</option>
                  <option>Europe</option>
                </select> */}

              </div>
            </div>
            <div className="arrowSignIn">
              <img src={atr} alt="arro" />
              <p className="snup">Sign up</p>
            </div>
            <p className="alre">Already have an account? <a href="/" className="ahref">SignIn</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingIn
