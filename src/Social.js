import React from 'react'
import './Social.css';
import { Link } from 'react-router-dom';

function Social() {
  return (
<div class="responsive-container-block bigContainer">
  <div class="responsive-container-block Container bottomContainer">
    <div class="ultimateImg">
      <img class="mainImg" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/14_Essentials_of_Social_Media_Marketing_to_Boost_Your_Business.jpg"></img>
      <div class="purpleBox">
        <p class="purpleText">
          Your ratings are must needed to make our website the Bestest!
        </p>
        <img class="stars" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/mp5.svg"></img>
      </div>
    </div>
    <div class="allText bottomText">
      <p class="text-blk headingText">
        Social Media Marketing
      </p>
      <p class="text-blk subHeadingText">
      Social media marketing is a powerful way for businesses of all sizes to reach prospects and customers
     
     </p>
     <p class="text-blk subHeadingText">
      <u><b>Best For:</b></u> People discover, learn about, follow, and shop from brands on social media, so if you’re not on platforms like Facebook, Instagram, and LinkedIn, you’re missing out! Great marketing on social media can bring remarkable success to your business, creating devoted brand advocates and even driving leads and sales. </p>
      <p class="text-blk subHeadingText"> <u><b>Price:</b></u> Generous free with premium pricing starting at $10 per month
      </p>
      <p class="text-blk description">
        
      </p>
      <a class="work-heading">
        <Link to="/Pay"><a href="#"></a>PAYMENT</Link>
      </a>
    </div>
  </div>
</div>
)
}

export default Social