import './index.css'
import numeral from 'numeral';


const year=2019;

const courseValue = numeral(1000).format('$0,0.00');
console.log(`i would pay ${courseValue} for this awsome course!`); //eslint-disable-line no-console
