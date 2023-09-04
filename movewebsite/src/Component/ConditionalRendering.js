
import RandomColor from 'randomcolor'

let clr=RandomColor()

function getRandomNumber(low, high) {
    let r = Math.floor(Math.random() * (high - low + 1)) + low;
    return r;
  }
  
 
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }




export function ConditionalRendering({product,styles,isTrue}){
            if(isTrue){
                return (<h1 style={{color:getRandomColor(),
                ...styles}}>{product} *****</h1>)
                
            }
                return (<h1  style={{color:RandomColor( {luminosity: 'light', hue: 'monochrome'}),
                ...styles}}>{product}</h1>)
          
}


