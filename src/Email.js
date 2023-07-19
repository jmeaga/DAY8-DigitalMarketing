import React from 'react'
import './Email.css';
import { Link } from 'react-router-dom';

function Email() {
  return (
<div class="responsive-container-block bigContainer">
  <div class="responsive-container-block Container bottomContainer">
    <div class="ultimateImg">
      <img class="mainImg" src="https://static.vecteezy.com/system/resources/previews/003/503/593/original/touching-email-marketing-concept-free-photo.jpg"></img>
      <div class="purpleBox">
        <p class="purpleText">
          Your ratings are must needed to make our website the Bestest!
        </p>
        <img class="stars" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/mp5.svg"></img>
      </div>
    </div>
    <div class="allText bottomText">
      <p class="text-blk headingText">
        Email Marketing
      </p>
      <p class="text-blk subHeadingText">
      DEO is one of the best available free email marketing platforms. As a great up-and-coming service, many people have switched to it and been delighted by its features and free offerings. Beyond that, MailerLite offers all the features you’d expect from an industry-leading email marketing service. A free plan supports up to 1000 contacts and lets you send 12,000 emails monthly (much more generous than Mailchimp).
     </p>
     <p class="text-blk subHeadingText">
      <u><b>Best For:</b></u>DEO is best for businesses of all sizes that want to create and send email newsletters, landing pages, and forms. It’s a powerful email marketing platform that offers a wide range of features. </p>
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

export default Email