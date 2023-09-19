import './headerFooter.css';

export function MenuOverlay(props){
    return (
        <div className="overlay-container">
            <ul className="overlay-nav">
               {props.listItemArray.map((listItem) => {return <li key={Math.random()*987}>{listItem}</li>})}
            </ul>
        </div>
    )
}