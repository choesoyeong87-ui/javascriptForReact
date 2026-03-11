import Header from "../../include/Header";
import { useParams, useSearchParams } from "react-router-dom";
import "./ListPage.css";
import ModifyComponent from "../../components/todo/ModifyComponent";
import useCustomMove from "../../hooks/useCustomMove";

const Modify = () => {
  const { tno } = useParams();
  const { moveToList, moveRead } = useCustomMove();

  return (
    <>
      <div className="main-container">
        <Header />
        <main className="list-content-area">
          <div className="list-wrapper">
            {/* 실제 데이터 목록이 표시되는 컴포넌트 */}
            <ModifyComponent
              tno={tno}
              moveToList={moveToList}
              moveRead={moveRead}
            />
          </div>
        </main>
      </div>
    </>
  );
};
export default Modify;
