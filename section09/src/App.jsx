import './App.css'
import Header from './components/header'
import Editor from './components/Editor'
import List from './components/List'
import './css/App.css'
import { useState,useRef, useReducer } from 'react'
import Exam from './components/Exam'

 
const mockData = [ 
  { 
    id: 0, 
    isDone: false, 
    content: "React 공부하기", 
    date: new Date().getTime(), 
  }, 
  { 
    id: 1, 
    isDone: false, 
    content: "빨래하기", 
    date: new Date().getTime(), 
  }, 
  { 
    id: 2, 
    isDone: false, 
    content: "자바공부하기", 
    date: new Date().getTime(), 
  }, 
]; 
function reducer(state,action) {
  switch (action,type) {
    case "INSERT":
      return [action.data,...todos];

    case "UPDATE":
      return state.map((item)=> item.id === action.targetId ? {...item,isDone:!item.isDone}:item);
      
       case "DELETE":
      return state.filter(
        (item)=>item.id!==action.targetId
      );
      
  
    default:
      return state;
  }

}
function App() {
  //const [todos, setTodos] = useState(mockData);
  const[todos,dispatch]=useReducer(reducer,mockData); 
  const idRef = useRef(3);
  const onCreate = (content)=>{
    //이벤트함수(setTodos 핸들러함수)
    let newTodo ={
      id: idRef.current++,
    isDone: false, 
    content: content, 
    date: new Date().getTime(), 
      }
      dispatch({type : "INSERT",data : newTodo})
    }
    //이벤트함수(setTodos데이타 수정)
    const onUpdate =(id)=>{
      dispatch({type:"UPDATE",id:id})
  }
    
  //이벤트함수(setTodos 삭제)
  const onDelete = (id)=>{
    dispatch({type:"DELETE",id:id})
  }
    
  return(
    <>
    <div className="App">
    <Header/>
    <Exam/>
    <Editor onCreate={onCreate}/>
    <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
    </>
  );
}

export default App
