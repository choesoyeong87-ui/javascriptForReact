import './App.css'
import Header from './components/header'
import Editor from './components/Editor'
import List from './components/List'
import './css/App.css'
import { useState,useRef } from 'react'

 
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
function App() { 
  const [todos, setTodos] = useState(mockData); 
  const idRef = useRef(3);
  const onCreate = (content)=>{
    //이벤트함수(setTodos 핸들러함수)
    let newTodo ={
      id: idRef.current++,
    isDone: false, 
    content: content, 
    date: new Date().getTime(), 
    }
    setTodos([newTodo,...todos])
  }
  //이벤트함수(setTodos데이타 수정)
  const onUpdate =(id)=>{
    setTodos(todos.map((todo)=>{
      return todo.id === id ? {...todo,isDone:!todo.is}:todo
    }));
  }
  //이벤트함수(setTodos 삭제)
  const onDelete = (id)=>{
    setTodos(todos.filter((todo)=>{
      return todo.id !== id
    }))
  }
  return (
    <>
    <div className="App">
    <Header/>
    <Editor onCreate={onCreate}/>
    <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
    </>
  )
}

export default App
