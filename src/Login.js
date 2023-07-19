import './Login.css';
import { Link } from 'react-router-dom';
import React, { Component } from 'react'

export class Login extends Component {
  render() {
    return (
      <div className='box1'>
  
      <div class="box">
        <div class="inner-box">
          <div class="forms-wrap">
            <form action="index.html" autocomplete="off" class="sign-in-form">
              <div class="logo">
                <img src="data:image/jpeg;base64,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" alt="easyclass" />
                <h4>Register here!</h4>
              </div>

              <div class="heading">
                <h2>Welcome</h2>
                <a><img className="google"src="https://th.bing.com/th/id/OIP.Kg2FF2wpIK_HLyo8Q56ycAHaFj?pid=ImgDet&rs=1"></img></a>
                <br></br>
                <h6>--------Or--------</h6>
                <br></br>
                <h6>Already have an account?</h6>
                <Link to="/Signup"><a href="#" class="toggle">Sign Up</a></Link>
              </div>

              <div class="actual-form">
                

                
                <div class="input-wrap"> 
                  <input
                    type="email"
                    minlength="4"
                    class="input-field"
                    autocomplete="off"
                    placeholder='Email'
                    required
                  />
                  
                </div>
                
                    
                <div class="input-wrap"> 
                  <input
                    type="text"
                    minlength="7"
                    class="input-field"
                    autocomplete="off"
                    placeholder='password'
                    required
                  />
                  
                </div>

                <div class="text">
                <input type="checkbox"></input> By signing up, I agree to the Terms of Services and Privacy Policy
                </div>
                <br>
                </br>
                <Link to="/Landing"><input type="submit" value="Log  In" class="sign-btn" /></Link>
            
              </div>
            </form>

            
          </div>

          <div class="carousel">
            
            <img className="wall"  src="https://s40424.pcdn.co/in/wp-content/uploads/2023/03/How-to-Learn-Digital-Marketing.jpg.optimal.jpg" style={{height:"550px" ,width:"200"}}></img>

           
          </div>
        </div>
      </div>
   

 
    </div>
    
  )
  }
}

export default Login