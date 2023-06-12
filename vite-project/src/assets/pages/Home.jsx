import { Landing } from '../components/landing/Landing';
import { NewCarousel } from '../components/landing/new-carousel/NewCarousel';
import { LandingBlog } from '../components/landing/blog/LandingBlog';
import { How } from '../components/landing/how/how';
export function Home(){
    return (
        <div className="home-container">
        <Landing/>
        <NewCarousel/>
        <How/>

        <LandingBlog/>        
        </div>
    )
}