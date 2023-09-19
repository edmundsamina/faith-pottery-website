import "./new-carousel.css";
import { ProductCard } from "../../product-card/ProductCard";
import { mockData } from "../../../Data/product-mock-data";
import { useState} from 'react';

export function NewCarousel() {
const [scrollPosition, setScrollPosition] = useState(0);

//functions below update the useState with a value that then gets passed to the carousel grid and 
//tells it what percentage to move the carousel left or right making use of inline css styling
  const handleLeftClick = () => {
    if(scrollPosition !== 0){
      setScrollPosition(scrollPosition + 25);
    }
  };
  
  const handleRightClick = () => {  
    console.log(scrollPosition)
  if(scrollPosition !== (mockData.length*-25)){
    setScrollPosition(scrollPosition - 25);

  }
  };


  return (
    <section className="new-carousel-container">
     <div className="slider">
      <div className="title-section">
        <p>NEW THIS WEEK</p>
        <span className="carousel-arrows">
          <svg
          onClick={handleLeftClick}
            width="48"
            height="30"
            viewBox="0 0 58 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.939339 10.9393C0.353554 11.5251 0.353554 12.4749 0.939339 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939339 10.9393ZM58 10.5L2 10.5V13.5L58 13.5V10.5Z"
              fill="#020826"
            />
          </svg>
          <svg
          onClick={handleRightClick}
            width="48"
            height="30"
            viewBox="0 0 58 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M57.0607 13.0607C57.6464 12.4749 57.6464 11.5251 57.0607 10.9393L47.5147 1.3934C46.9289 0.807611 45.9792 0.807611 45.3934 1.3934C44.8076 1.97919 44.8076 2.92893 45.3934 3.51472L53.8787 12L45.3934 20.4853C44.8076 21.0711 44.8076 22.0208 45.3934 22.6066C45.9792 23.1924 46.9289 23.1924 47.5147 22.6066L57.0607 13.0607ZM0 13.5H56V10.5H0V13.5Z"
              fill="#020826"
            />
          </svg>
        </span>
      </div>
     
      <div className="carousel-grid" style={{transform: `translateX(${scrollPosition}%)`}}>
        { mockData.map((product) =>{
          return <ProductCard
          key={Math.random()*232}
          img={product.img}
          title={product.title}
          price={product.price}
        />
        })
        }
        
         </div>
         </div>
    </section>
  );
}
