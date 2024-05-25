import './how.css'
import gridTopA from '../../../images/landing/how-image-grid01.png'
import gridTopB from '../../../images/landing/how-image-grid02.png'
import gridTopC from '../../../images/landing/how-image-grid03.png'
import gridButtomA from '../../../images/landing/how-image-grid04.png'
import gridButtomB from '../../../images/landing/how-image-grid05.png'
import gridButtomC from '../../../images/landing/how-image-grid06.png'


export function How() {
  return (
    <div className="how-container">
      <div className="how-text-container">
        <h4>How our pottery is made</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="image-grid">
      <img className="image-img gridTopA" alt="woman in blue apron cutting a block of brown clay with a wire"src={gridTopA}/>
      <img className="image-img gridTopB" alt="pottery materials in a white room, materials for carving and shaping clay."src={gridTopB}/>
      <img className="image-img gridTopC" alt="woman in a beige shirt shaping a pottery peice of a sculpture of the female form"src={gridTopC}/>
      <img className="image-img gridBottomA" alt="a shelf, a pin board and some pottery art displayed on the wall"src={gridButtomA}/>
      <img className="image-img gridBottomB" alt="lots of small round finished pottery peices, some are beige, some are white and some are black"src={gridButtomB}/>
      <img className="image-img gridBottomC" alt="a close up view of the inside of a peice of clay being shaped, the womans hand is using a shaping knife to shape the inside of the bowl." src={gridButtomC}/>
      </div>
    </div>
  );
}
