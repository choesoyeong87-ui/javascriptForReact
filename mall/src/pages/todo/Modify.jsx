import Header from "../../include/Header";
import { useParams, useSearchParams } from "react-router-dom";
import "./ListPage.css"

const Modify= () =>{
    const {tno} = useParams();
     const [queryParams] = useSearchParams();

    const page = queryParams.get("page")?parseInt(queryParams.get("page")):(1);
    const size = queryParams.get("page")?parseInt(queryParams.get("size")):(10);
return<>
    <div className="main-container">
        <Header/>
        <p>ModifyPage tno = {tno}</p>
        <p>ModifyPage page = {page} size={size}</p>
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