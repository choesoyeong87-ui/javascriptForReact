import Button from "./Button";
import Header from "./Header";

const NotFound = () =>{
 return <>
  <Header title={"HEADER"} leftChild={<Button text={'LEFT'} type={"POSITIVE"} onClick={(e)=>{alert(e.target.innerText)}}/>}rightChild={<Button text={'RIGHT'} type={'NEGATIVE'}onClick={(e)=>{alert(e.target.innerText)}}/>}/>
 </> 
}

export default NotFound;
