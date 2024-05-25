import "./headerFooter.css";
import cart from "../../icons/search-cart.png";
import { MenuOverlay } from "./MenuOverlay";
import { shopOverlay, bestsellersOverlay } from "../../Data/nav-data";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [showShop, setShowShop] = useState(false);
  const [showBestsellers, setShowBestsellers] = useState(false);

  //function that conditionally shows menu overlay for shop navigation
  function dropDownShop() {
    setShowShop(!showShop);
    setShowBestsellers(false);

  }

  //function that conditionally shows menu overlay for shop bestsellers
  function dropDownBestsellers() {
    setShowBestsellers(!showBestsellers);
    setShowShop(false);

  }

  return (
    <div className="header-container">
      <a href="/">faith</a>
      <div className="nav">
        <ul className="nav-list">
         <li>New In</li>
          <li className="nav-list-shop" onClick={dropDownShop}>Shop</li>
          <li onClick={dropDownBestsellers}>Bestsellers</li>
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
          <img className="basket" src={cart} alt="basket" />
        </div>
      </div>
      {showShop && <MenuOverlay listItemArray={shopOverlay} />}{" "}
      {showBestsellers && <MenuOverlay listItemArray={bestsellersOverlay} />}
    </div>
  );
}
