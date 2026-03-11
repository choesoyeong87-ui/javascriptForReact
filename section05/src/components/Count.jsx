import { useState } from "react";

counst Count = ()=>{
const [count,setCount] = useState(0);
  const conPlusClick =(e)=>{setCount(count+1)}
    return<>
    <div>
    <h1>{count}</h1>
    <button type="button" onClick={conPlusClick}>+</button>
    </div>
    </>
    
}
export default Count;