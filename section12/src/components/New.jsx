import { useParams } from "react-router-dom";
import Button from "./Button";
import Header from "./Header";
const New = () =>{
  const param = useParams();
  
 return <>
  <Header title={"HEADER"} leftChild={<Button text={'LEFT'} type={"POSITIVE"} onClick={(e)=>{alert(e.target.innerText)}}/>}rightChild={<Button text={'RIGHT'} type={'NEGATIVE'}onClick={(e)=>{alert(e.target.innerText)}}/>}/>
    <h1>new</h1>
 </> 
}

export default New;
;