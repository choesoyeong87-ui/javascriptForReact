
const Student = ({name,kor,eng,math,sum,avg,date})=> {

return<>
<div> 
      <div >{name}</div> 
      <div >{kor}</div> 
      <div >{eng}</div> 
      <div >{math}</div> 
      <div >{sum}</div> 
      <div >{avg}</div> 
      <div > {new Date(date).toLocaleDateString()}</div> 
      <div></div> 
      <button>수정</button> 
      <button>삭제</button> 
    </div> 
      
      
  
</>
}
export default Student;