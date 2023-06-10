import "./headerFooter.css";
import cart from '../../icons/search-cart.png'

export function Header() {
  return (
    <div className="header-container">
      <h1>faith</h1>
      <div className="nav">
        <ul className="nav-list">
          <li>New In</li>
          <li>Shop</li>
          <li>Bestsellers</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <div className="search-container">

       
          <form className="search">
            <input
              className="nosubmit"
              type="search"
              placeholder="Search products"
            />
          </form>
          <img className = "basket" src={cart} alt= "basket" />
          </div>
      </div>
    </div>
  );
}
