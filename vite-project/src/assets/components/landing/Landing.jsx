import heroImg from "../../../../public/images/landing/landing-img.png";
import './landing.css'
export function Landing() {
  return (
    <div className="hero-section">
      <img
        className="landing-img"
        src={heroImg}
        alt="A composition of three white boho chic curved vases, with a hand reaching towards some dried flowers in one of the vases"
      />
      <h2>Unique pieces that you’ll cherish forever</h2>
      <div className="Arrow">Arrow</div>
    </div>
  );
}
