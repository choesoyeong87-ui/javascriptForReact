
import { useRef, useState } from 'react'
import './App.css'
import Editor from './components/Editor'
import Header from './components/Header'
import List from './components/List'

function App() {
 const[stus,setStus]=useState([]);
 const idRef = useRef(0);
 const onCreate = ({name,kor,eng,math})=>{ 
    const newStu = {
      id: idRef.current++, 
      name : name, 
      kor: kor,
      eng : eng,
      math : math,
      sum : parseInt(kor)+parseInt(eng)+parseInt(math),
      avg : (parseInt(kor)+parseInt(eng)+parseInt(math))/3, 
      date: new Date().getTime(), 
      }
      setStus([newStu, ...stus]); 
    }; 
 
 
  return (
    <>
     <Header/>
     <Editor onCreate ={onCreate}/>
     <List stus = {stus}/>
    </>
  )
}

export default App
