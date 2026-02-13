
import './App.css'
import {Routes,Route,Link,useNavigate} from "react-router-dom";
import Home from './components/Home';
import New from './components/New';
import Diary from './components/Diary';
import Edit from './components/Edit';
import Notfound from './components/Notfound';
import Button from "./components/Button";

import { getEmotionImage } from './util/get-emotion-image';

function App() {
  const nav = useNavigate();
  const onClickButton=()=>{
    nav("/new");
  }
  
  return (
    <>
    <Button text={"123"} onClick={()=>{console.log("123번클릭")}}/>
    <Button text={"123"} type={"POSITIVE"} onClick={()=>{console.log("123번클릭")}}/>
    <Button text={"123"} type={"NEGATIVE"} onClick={()=>{console.log("123번클릭")}}/>
      <div>Hello</div>
      <img src={getEmotionImage(1)}/>
        <img src={getEmotionImage(2)}/>
        <img src={getEmotionImage(3)}/>
        <img src={getEmotionImage(4)}/>
        <img src={getEmotionImage(5)}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/new" element={<New/>}/>
        <Route path="/diary/:id" element={<Diary/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </>
  )
}

export default App
