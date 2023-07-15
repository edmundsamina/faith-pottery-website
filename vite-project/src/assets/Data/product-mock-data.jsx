import abstractVaseGrey from '../images/products/medium abstract vase grey.png';
import whiteBowl from '../images/products/white ceramic bowl.png';
import candleHolders from '../images/products/blackblue ceramic candle.png';
import napkinRings from '../images/products/Napkin rings.png';
import ceramicSet from '../images/products/Flatware & cup set.png';
import whiteAbstractVase from '../images/products/white geometric vase.png';
import mediumVase from '../images/products/medium abstract vase white.png';
import blackTeapots from '../images/products/black ceramic teapot.png';


export const mockData = [
    {
        title: 'Medium abstract vase',
        img: abstractVaseGrey,
        price: 150,
        date: new Date(),
        quantity: 5,
        colour: 'grey',
        type: 'vase',
        size: 'medium'
    },
    {
        title: 'White ceramic bowl',
        img: whiteBowl,
        price: 55,
        date: new Date(),
        quantity: 1,
        colour:'white',
        type: 'bowl',
        size: 'medium'

    },
    {
        title: 'Black/Blue ceramic candle holders',
        img: candleHolders,
        price: 110,
        date: new Date(),
        quantity: 10,
        colour:'black, blue',
        type: 'candle holders',
        size: 'small'
    },
    {
        title: 'Ceramic napkin rings',
        img: napkinRings,
        price: 10,
        date: new Date(), 
        quantity: 2,
        colour:'cream',
        type: 'napkin rings',
        size: 'small'

    },
    {
        title: 'Ceramic flatware & cup set',
        img: ceramicSet,
        price: 85,
        date: new Date(),
        quantity: 0,
        colour:'white',
        type: 'cup, flatware',
        size: 'medium'
    },
    {
        title: 'Medium abstract vase - White',
        img: mediumVase,
        price: 150,
        date: new Date(),
        quantity: 2,
        colour:'white',
        type: 'vase',
        size: 'medium'
    },
    {
        title: 'White geometric  vase',
        img: whiteAbstractVase,
        price: 110,
        date: new Date(),
        quantity: 25,
        colour:'white',
        type: 'vase',
        size: 'large'


    },
    {
        title: 'Black ceramic teapot',
        img: blackTeapots,
        price: 195,
        date: new Date(),
        quantity: 5,
        colour:'black',
        type: 'teapot',
        size: 'large'
    }

]