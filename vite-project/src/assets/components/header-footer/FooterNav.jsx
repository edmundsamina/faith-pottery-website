export function FooterNav(props){
    return (
        <div className="footer-nav-container">
            <h5 className="nav-heading">
                {props.heading}
            </h5>
            <ul className="footer-nav-ul">
                {props.listItems.map((list)=>{
                    return <li className="footer-nav-list" key={Math.random()*987}>{list}</li>
                })}
            </ul>
        </div>
    )
}