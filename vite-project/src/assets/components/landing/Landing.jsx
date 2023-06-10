import heroImg from '../../images/landing/landing-img.png';
import arrow from '../../icons/Arrow 1.png'
import { Button } from '../buttons/Button';
import './landing.css'


export function Landing() {
  return (
    <div className="hero-section">
      <img
        className="landing-img"
        src={heroImg}
        alt="A composition of three white boho chic curved vases, with a hand reaching towards some dried flowers in one of the vases"
      />
      <h2 className="hero-title">Unique pieces that you’ll cherish forever</h2>
   
     <img className="arrow" src={arrow} alt="arrow pointing to button"/>
      <Button text="SHOP NOW" className=""onClick={()=>{}}/>
    </div>
  );
}
