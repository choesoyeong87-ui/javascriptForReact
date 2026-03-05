import Header from "../../include/Header";
import { useParams, useNavigate} from "react-router-dom";
import "./ListPage.css"

const ReadPage = () =>{
    const {tno} = useParams();
    const navigate = useNavigate();
    //동적페이지 이동
    const moveModify = ()=>{
        navigate({
            pathname:`/todo/modify/${tno}`
        });
    }
return<>
    <div className="main-container">
        <Header/>
        <p>ReadPage tno = {tno}</p>
        <main className="content-area">
            <div className="button-wrapper">
                <button type="button" className="custom-btn-outline" >Read Page
                </button>
            </div>
            <div className="button-wrapper">
                <button type="button" className="custom-btn-outline" onClick={()=>moveModify()}>Modify Page 이동하기
                </button>
            </div>
        </main>

    </div>
</>
}
export default ReadPage;