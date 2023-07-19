import React from 'react'
import './About.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div class="responsive-container-block bigContainer">
    <div class="responsive-container-block Container bottomContainer">
      <div class="allText bottomText">
        <p class="text-blk headingText">
          ABOUT US
        </p>
        <p class="text-blk subHeadingText">
          We build to your bespoke
        </p>
        <p class="text-blk description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo in ullamcorper quis vestibulum ligula elementum ut. Congue in dignissim tincidunt ut dolor eu. Mi, eget posuere vitae sed purus nisl lorem.
        </p>
        
        
      </div>
      <div class="videoContainer">
        <iframe allowfullscreen="allowfullscreen" class="mainVideo" controls="controls" style={{height:"450px",width:"500px"}} src="https://i.pinimg.com/originals/00/6b/27/006b2787627b0b67bb91d9716d6e5058.gif">
        </iframe>
        
      </div>
    </div>
  </div>
)
}

export default About
 