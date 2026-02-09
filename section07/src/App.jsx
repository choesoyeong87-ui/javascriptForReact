import { useState,useEffect,useRef} from 'react';
import './App.css'
import Viewer from './components/Viewer';
import InputController from './components/InputController';
import Even from './components/Even';

function App() {
 
const [count,setCalculate] = useState(0);
const countValue = useRef(0);

 const insMount = useRef(false);
const onClickCalculate = (num1,num2,op)=>{
 
  let sum = 0;
switch (op) {
  case '+':
    sum = parseInt(num1)+parseInt(num2);
    break;
  case '-':
    sum = parseInt(num1)-parseInt(num2);
    break;
  case '*':
    sum = parseInt(num1)*parseInt(num2);
    break;
  case '/':
    sum = parseInt(num1)/parseInt(num2);
    break;
    }
  setCalculate(sum);

 
};
useEffect(()=>{
  console.log(`countValue=${countValue.current}`)
  countValue.current=countValue+1;
  if(insMount.current===false){
    insMount.current = true
  }else{
    console.log(`App update`)
  }
})
//마운트 될때 작동되는것을 확인하자
 
return<>
   <div>
    <h1>계산기</h1>
   </div>
   
   <InputController onClickCalculate={onClickCalculate}/>
   {count % 2 === 0 ? < Even /> : null}<Even/>

   <div>
  <button type="button" onClickCapture={onClickCalculate}>버튼</button>
 
 </div>
  </>


  }


export default App