import './headerFooter.css';
import { Link } from 'react-router-dom';

export function MenuOverlay(props){
    return (
        <div className="overlay-container">
            <ul className="overlay-nav">
               {props.listItemArray.map((listItem) => {return  <Link key={Math.random()*987} to={"/products"}><li key={Math.random()*987}>{listItem}</li></Link>})}
            </ul>
        </div>
    )
}