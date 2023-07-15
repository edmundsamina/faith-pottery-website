import './browse-collection.css'
import flatware from '../../../images/landing/collection-flatware.png';
import vases from '../../../images/landing/collection-vase.png'
import cups from '../../../images/landing/collection-cups.png'

export function BrowseCollection(){
    return (
        <section className='browse-collection-container'>
        <h3>Browse by collection</h3>
        <div className='browse-nav-container'>

        <div className='browse-images-text'>
            <img src={flatware} alt="large stoneware plate leaning against a white wall"/>
            <p>FLATWARE</p>
        </div>

        <div className='browse-images-text'>
            <img src={vases} alt="vases in the shape of the female form on a table covered in a white linen"/>
            <p>VASES</p>
        </div>

        <div className='browse-images-text'>
            <img  src={cups} alt="an assortment of cups photographed from above, on a light wooden table"/>
            <p>CUPS</p>
        </div>

        </div>

        </section>
    )
}