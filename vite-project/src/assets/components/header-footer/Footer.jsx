import img1 from "../../images/landing/footer-banner01.png";
import img2 from "../../images/landing/footer-banner02.png";
import img3 from "../../images/landing/footer-banner03.png";
import img4 from "../../images/landing/footer-banner04.png";
import img5 from "../../images/landing/footer-banner05.png";
import footerImg from '../../images/landing/how-image-grid06.png'
import { footerNavLinks } from "../../Data/nav-data";
import { FooterNav } from "./FooterNav";

const instaImages = [img1, img2, img3, img4, img5];

export function Footer() {
  return (
    <div className="footer-container">
    <div className="newsletter-container">
    <h4>Stay in the know</h4>
    <h5>Sign up to the weekly newsletter to get up-to-date news about new collections, promotions and events.</h5>
    <div className="signup-container">
    <input/>
    <button>SIGN ME UP</button>

    </div>

    </div>
    <div className="footer-nav">
    {footerNavLinks.map((nav)=>{
        return <FooterNav key={Math.random()*46747} heading={nav.heading} listItems={nav.links}/>
    })}
    <div className="footer-image-container">
        <h5>faith</h5>
        <img className="footer-nav-img" src={footerImg} alt="a clay peice of pottery being moulded with a clay knife"/>
    </div>

    </div>
      <div className="instagram-banner">
        <h6>@faith_studio</h6>
        <div className="insta-images-grid">
          {instaImages.map((img) => {
            return (
              <img
              className="instagram-images"
                key={Math.random() * 30}
                src={img}
                alt="instagram reel of pottery"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
