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
        <p>READ MORE<svg width="80" height="25" viewBox="0 0 84 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M82.7071 12.7071C83.0976 12.3166 83.0976 11.6834 82.7071 11.2929L76.3431 4.92893C75.9526 4.53841 75.3195 4.53841 74.9289 4.92893C74.5384 5.31946 74.5384 5.95262 74.9289 6.34315L80.5858 12L74.9289 17.6569C74.5384 18.0474 74.5384 18.6805 74.9289 19.0711C75.3195 19.4616 75.9526 19.4616 76.3431 19.0711L82.7071 12.7071ZM1 13H82V11H1V13Z" fill="#ffff"/>
</svg>

</p>
        </div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
      </div>
    </section>
  );
}
