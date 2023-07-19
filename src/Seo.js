import React from 'react'
import './Seo.css';
import { Link } from 'react-router-dom';

function Seo() {
  return (
<div class="responsive-container-block bigContainer">
  <div class="responsive-container-block Container bottomContainer">
    <div class="ultimateImg">
      <img class="mainImg" src="https://evolutionco.com/assets/site/img/blog/digital-marketing/Banner-Image.jpg"></img>
      <div class="purpleBox">
        <p class="purpleText">
          Your ratings are must needed to make our website the Bestest!
        </p>
        <img class="stars" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/mp5.svg"></img>
      </div>
    </div>
    <div class="allText bottomText">
      <p class="text-blk headingText">
        SEO Marketing
      </p>
      <p class="text-blk subHeadingText">
      The Process of making your site better for search engines. Also the job title of a person who does this for a living: We just hired a new SEO to improve our presence on the web.
     </p>
     <p class="text-blk subHeadingText">
      <u><b>Best For:</b></u>SEO Best practices are a set of tasks designed to help improve a website's search engine rankings. Common search engine optimization best practices include on-site optimization, researching keywords, and building backlinks to a site. </p>
      <p class="text-blk subHeadingText"> <u><b>Price:</b></u> When a business is looking for a new website they can use a template service for a few hundred dollars, and may also receive quotes well over $10,000 for custom design and development.
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

export default Seo

