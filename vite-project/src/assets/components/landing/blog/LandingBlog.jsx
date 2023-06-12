import "./blog.css";
import blog1 from '../../../images/landing/blog1.png';
import blog2 from '../../../images/landing/blog2.png'


export function LandingBlog() {
  return (
    <div className="landing-blog-container">
      <h4>ON THE BLOG</h4>
      <h5>Have a look at what we've been up to</h5>
      <div className="blog-nav-container">
        <div className="blog-nav">
            <img className="blog-nav-img" src={blog1} alt="a shelf, a pin board and some pottery art displayed on the wall"/>
            <h6>The inspiration behind our latest collection </h6>
            <span>READ MORE</span>
        </div>
        <div className="blog-nav">
        <img className="blog-nav-img" src={blog2} alt="a beige room, with a dark wooden shelf. A woman is placing some white pottery peices on the shelf. Once of the vases has some dried flowers inside."/>
            <h6>Gift guide: Ideas for the perfect house warming gift</h6>
            <span>READ MORE</span>
        </div>
      </div>
    </div>
  );
}
