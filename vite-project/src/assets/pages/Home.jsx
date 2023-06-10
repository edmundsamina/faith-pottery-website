import { Landing } from '../components/landing/Landing';
import { NewCarousel } from '../components/new-carousel/NewCarousel';

export function Home(){
    return (
        <div className="home-container">
        <Landing/>
        <NewCarousel/>        
        </div>
    )
}