import Header from "../../include/Header";
import { useParams } from "react-router-dom";
import "./ListPage.css"

const Modify= () =>{
    const {tno} = useParams();
    
return<>
    <div className="main-container">
        <Header/>
        <p>ModifyPage tno = {tno}</p>
        <main className="content-area">
            <div className="button-wrapper">
                <button type="button" className="custom-btn-outline" >Modify Page
                </button>
            </div>
        </main>

    </div>
</>
}
export default Modify;