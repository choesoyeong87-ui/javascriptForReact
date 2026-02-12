import { useRef, useState } from "react"
import '../css/Student.css'
import Student from "./Student";
const UpdateStu = ({id,name,onUpdate,setIsUpdate})=>{
    const [student, setStudent] = useState({kor : '',eng : '', math : ''});
    const inputRef = useRef();
    const onClickBt = e =>{
    onUpdate(id,student.kor,student.eng,student.math);
    setIsUpdate(false);
    setStudent({kor:'',eng:'',math:''});
    }
    const onChangeStu = e => {
        setStudent({
            ...student,
            [e.target.name]:e.target.value
        });
    }
    const onKeydown = e => {
        if (e.keyCode === 13) {
            onClickBt();
        }
    };
    return <>
    <div className="Update">
        <div className="id">{id}</div>
        <div className="name">{name}</div>
        <input type="text" ref={inputRef} value={student.kor} name="kor" onChange={onChangeStu}/>
        <input type="text" value={student.eng} name="eng" onChange={onChangeStu}/>
        <input type="text" value={student.math} name="math" onChange={onChangeStu}/>
        <div className="sum"></div>
        <div className="avg"></div>
        <div className="date"></div>
        <div className="btn_area"></div>
        <button type="button" onClick={onClickBt}>수정완료</button>

    </div>

    
    </>
    

}
export default UpdateStu;