import "./productCard.css";

export function ProductCard(props) {
  return (
    <div className={`product-card ${props.className}`}>
      <img src={props.img} />
      <p>{props.title}</p>
      <span>£{props.price}</span>
    </div>
  );
 }
