//java : import
//import (sub,div) from './math.js';
import randomColor from 'randomcolor';
import add,{sub,div} from './math.js';


let color = randomColor();
console.log(`coloer=${color}`);
console.log(add(10,20));
console.log(sub(10,20));
console.log(div(10,20));
console.log("안녕 node.js");