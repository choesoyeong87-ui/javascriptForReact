import { useState } from "react";

const Bulb = ()=>{
    const [light,setLight] = useState('ON');
    const conLightClick =(e)=>setLight(light === 'ON'? 'OFF':'ON')

    console.log(light);
  return<>
   
    <div>
        {light === 'ON' ? (
             <h1 style={{backgroundColor: 'orange'}}>Bulb ON</h1>
        ) : (
    <h1 style={{backgroundColor: 'gray'}}>Bulb ON</h1>
        )}
    
    </div>
    <button type="button" onClick={conLightClick}>{light === 'ON'? '끄기':'켜기'}</button>
    </>
}
export default Bulb;