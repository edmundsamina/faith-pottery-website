import "./aboutUs.css";
import handmade from '../../../icons/hand-right.png'
import shopcart from '../../../icons/cart.png'
import heart from '../../../icons/heart.png'
import aboutUsimg from '../../../images/landing/midpage-banner.png'

export function AboutUs() {
  return (
    <section className="about-us-section">
      <div className="icons-banner">
        <div className="icons-text">
        <img src={handmade} alt="brown outline of a hand"/>
        <p>HAND MADE WITH LOVE</p>
        </div>
        <div className="icons-text">
        <img src={shopcart} alt="brown outline of a shopping cart"/>
        <p>FAST AND RELIABLE SHIPPING</p>
        </div>
        <div className="icons-text">
        <img src={heart} alt="brown outline of a heart"/>
        <p>UNIQUE, ONE OF A KIND PEICES</p>
        </div>
      </div>
      <div className="about-us-image-section">
        <img src={aboutUsimg} alt="close up of a handmade vase with some dried flowers inside of it"/>
      </div>
      <div className="about-us-text-banner">
        <div className="title-button">
        <h5>Faith is creative pottery studio based in London </h5>
        <p>READ MORE</p>
        </div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
      </div>
    </section>
  );
}
