import Student from "./Student";
const List= (stus)=>{

    return<>
   <h3>👨학생목록👧</h3>
      <input placeholder="학생의 이름을 검색하세요" /> 
      <div>
        <Student/>
        </div> 
    </>
}
export default List;