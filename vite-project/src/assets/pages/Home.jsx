import { Landing } from '../components/landing/Landing';
import { NewCarousel } from '../components/landing/new-carousel/NewCarousel';
import { LandingBlog } from '../components/landing/blog/LandingBlog';

export function Home(){
    return (
        <div className="home-container">
        <Landing/>
        <NewCarousel/>
        <LandingBlog/>        
        </div>
    )
}