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
            <span>READ MORE <svg width="60" height="25" viewBox="0 0 84 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M82.7071 12.7071C83.0976 12.3166 83.0976 11.6834 82.7071 11.2929L76.3431 4.92893C75.9526 4.53841 75.3195 4.53841 74.9289 4.92893C74.5384 5.31946 74.5384 5.95262 74.9289 6.34315L80.5858 12L74.9289 17.6569C74.5384 18.0474 74.5384 18.6805 74.9289 19.0711C75.3195 19.4616 75.9526 19.4616 76.3431 19.0711L82.7071 12.7071ZM1 13H82V11H1V13Z" fill="#716040"/>
</svg></span>
        </div>
        <div className="blog-nav">
        <img className="blog-nav-img" src={blog2} alt="a beige room, with a dark wooden shelf. A woman is placing some white pottery peices on the shelf. Once of the vases has some dried flowers inside."/>
            <h6>Gift guide: Ideas for the perfect house warming gift</h6>
            <span>READ MORE <svg width="60" height="25" viewBox="0 0 84 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M82.7071 12.7071C83.0976 12.3166 83.0976 11.6834 82.7071 11.2929L76.3431 4.92893C75.9526 4.53841 75.3195 4.53841 74.9289 4.92893C74.5384 5.31946 74.5384 5.95262 74.9289 6.34315L80.5858 12L74.9289 17.6569C74.5384 18.0474 74.5384 18.6805 74.9289 19.0711C75.3195 19.4616 75.9526 19.4616 76.3431 19.0711L82.7071 12.7071ZM1 13H82V11H1V13Z" fill="#716040"/>
</svg></span>
        </div>
      </div>
    </div>
  );
}
