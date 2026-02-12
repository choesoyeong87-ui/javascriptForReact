import { useState } from "react";
import Student from "./Student";
const List= ({stus,onDelete, onUpdate})=>{
const [search, setSearch] = useState('');
const getFilteData = ()=>{
    if (search === '') {
        return stus;
    }
    return stus.filter(student=>{
        return student.name.toLowerCase().includes(search.toLowerCase())
    })
}

    return<>
   <h3>👨학생목록👧</h3>
      <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="학생의 이름을 검색하세요" />
      <div className="StudentTitle">
        <div className="id">번호</div>
        <div className="name">이름</div>
        <div className="kor">국어</div>
        <div className="eng">영어</div>
        <div className="math">수학</div>
        <div className="sum">총점</div>
        <div className="avg">평균</div>
        <div className="date">날짜</div>
        <div className="but_area"></div>
        </div> 
      <div>
        {getFilteData().map((student)=>{
            return  <Student key={student.id} {...student} onDelete={onDelete} onUpdate={onUpdate}/>
        })}
        </div> 
    </>
}
export default List;