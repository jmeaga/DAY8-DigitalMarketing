import React from 'react'
import './Signup.css';
import { Link } from 'react-router-dom';

function Signup() {
  return (
      <div className='box1'>
  
      <div class="box">
        <div class="inner-box">
          <div class="forms-wrap">
            <form action="index.html" autocomplete="off" class="sign-in-form">
              <div class="logo">
                <img src="https://thumbs.dreamstime.com/b/vector-illustration-singing-woman-karaoke-party-copy-space-75761308.jpg" alt="easyclass" />
                <h4>Register here!</h4>
              </div>

              <div class="heading">
                <h2>Welcome!</h2>
                <a><img className="google"src="https://th.bing.com/th/id/OIP.Kg2FF2wpIK_HLyo8Q56ycAHaFj?pid=ImgDet&rs=1"></img></a>
                <br></br>
                <h6>--------Or--------</h6>
                <br></br>
                <h6>Already have an account?</h6>
               <Link to="/Login"> <a href="#" class="toggle">Log In</a></Link>
              </div>

              <div class="actual-form">
                <div class="input-wrap">
                  <input
                    type="text"
                    minlength="4"
                    class="input-field"
                    autocomplete="off"
                    placeholder='Name'
                    required
                  />
                  
                </div>

                
                
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
                <div class="input-wrap"> 
                <input
                  type="text"
                  minlength="7"
                  class="input-field"
                  autocomplete="off"
                  placeholder=' confirm password'
                  required
                />
                
              </div>

                <div class="text">
                <input type="checkbox"></input> By signing up, I agree to the Terms of Services and Privacy Policy
                </div>
                <br>
                </br>
                <Link to="/Landing"><input type="submit" value="Sign Up" class="sign-btn" /></Link>
            
              </div>
            </form>

            
          </div>

          <div class="carousel">
            
            <img className="wall" src="https://d3mxt5v3yxgcsr.cloudfront.net/courses/14117/course_14117_image.png" style={{height:"600px" }}></img>
            

           
          </div>
        </div>
      </div>
   

 
    </div>
    
  )
}

export default Signup