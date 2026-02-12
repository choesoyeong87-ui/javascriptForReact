import Button from "./Button";
import Header from "./Header";
import { useParams } from "react-router-dom";

const Diary = () =>{
    const params = useParams();
    const onClicButton = e=>alert(e.target.innerText);
 return <>
  <Header title={"HEADER"} leftChild={<Button text={'LEFT'} type={"POSITIVE"} onClick={(e)=>{alert(e.target.innerText)}}/>}rightChild={<Button text={'RIGHT'} type={'NEGATIVE'}onClick={(e)=>{alert(e.target.innerText)}}/>}/>
    <h1>{params.id}번의 Diary</h1>
 </> 
}

export default Diary;
;