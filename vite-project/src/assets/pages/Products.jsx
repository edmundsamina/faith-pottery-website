import "./products.css";
import { ProductCard } from "../components/product-card/ProductCard";
import { mockData } from "../data/product-mock-data";
export function Products() {
  return (
    <main className="products-page">
      <section className="products-banner-container">
        <h1>SHOP NOW</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
      </section>
      <section className="products-container">
        <div className="filtering-container">
          <div className="sort-by-attributes">
            <select className="drop-down" name="colour" id="colour">
              <option value="all">Colour</option>
              <option value="brown">White</option>
              <option value="brown">Brown</option>
              <option value="black">Black</option>
            </select>
            <select className="drop-down"  name="size" id="size">
              <option value="all">Size</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="Large">Large</option>
            </select>
            <select className="drop-down"  name="Product type" id="Product type">
            <option value="all">Product type</option>
              <option value="cups">Cups</option>
              <option value="plates">Plates</option>
              <option value="Vases">Vases</option>
            </select>
          </div>
          <select className="drop-down price-sort" name="colour" id="colour">
          <option value="all">Price</option>
              <option value="lowest">Lowest to Highest</option>
              <option value="highest">Highest to Lowest</option>

          </select>
        </div>
        <div className="products-grid">
          {mockData.map((product) => {
            return (
              <ProductCard
                key={Math.random() * 232}
                img={product.img}
                title={product.title}
                price={product.price}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
