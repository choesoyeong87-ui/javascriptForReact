const Controller = ({onClickButton})=>{
    return <>
    <div className ='App'>
    
     <div className='controller'>
      <button onClick={onClickButton} value={1}>1</button>
      <button onClick={onClickButton} value={10}>10</button>
      <button onClick={onClickButton} value={100}>100</button>
      <button onClick={onClickButton} value={-1}>-1</button>
      <button onClick={onClickButton} value={-10}>-10</button>
      <button onClick={onClickButton} value={-100}>-100</button>
     </div>
     </div>
    </>
}
export default Controller;