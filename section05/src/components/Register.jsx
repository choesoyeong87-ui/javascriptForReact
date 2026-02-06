import { useState } from "react";
//회원가입폼
//1. 이름 2. 생년월일 3. 국적 4. 자기소개
const Register = ()=> {
    const[input,setInput]=useState({
        name:'이름입력',
        birth:'',
        national:'',
        bio:''
    });
    const onChange =(e)=>{
        setInput({
            ...input,
            [e.target.name]:e.target.value
        });
    }
    // // const [name,setName] = useState("이름입력");
    // // const [birth,setBirth] = useState("");
    // // const [national,setNational] = useState("");
    // // const [bio,setBio] = useState("");
    // const onChangeName = (e)=>{
    //     console.log(e);
    //     // console.log(e);
    //     // setName(e.target.value);
    //     setInput({
    //         ...input,
    //     name:e.target.value,
    //     })
    // }

    // const onChangeBirth = (e)=>{
    //     // console.log(e);
    //     // setBirth(e.target.value);
    //     setInput({
    //         ...input,
    //     birth:e.target.value,
    //     })
    // }

    // const onChangeNational = (e)=>{
    //     // console.log(e);
    //     // setNational(e.target.value);
    //     setInput({
    //         ...input,
    //     national:e.target.value,
    //     })
    // }

    // const onChangeBio = (e)=>{
    //     // console.log(e);
    //     // setBio(e.target.value);
    //     setInput({
    //         ...input,
    //     bio:e.target.value,
    //     })
    // }

    
    return<>
    <div>
        <label htmlFor="name">성명</label>
        <input value={input.name} type="text" name="name" id="name" onChange={onChange}/>
    </div>

    <div>
        <label htmlFor="birth">생년월일</label>
        <input value={input.birth} type="date" name="birth" id="birth" onChange={onChange} />
    </div>

    <div>
        <label htmlFor="nation">국적</label>
        <select value={input.national} name="nation" id="nation"onChange={onChange} >
            <option value=""></option>
            <option value="kr">한국</option>
            <option value="usa">미국</option>
            <option value="jp">일본</option>
        </select>
    </div>

    <div>
        <label htmlFor="blo">자기소개</label>
        <textarea value={input.bio} name="bio" id="bio" cols="30" rows="10" onChange={onChange}></textarea>
    </div>
    </>

}
export default Register;