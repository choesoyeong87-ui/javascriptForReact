import { useEffect, useState } from "react";
import { getOne, putOne, deleteOne } from "../../api/todoApi"; // 필요한 API 함수 가정
import "./ModifyComponent.css";
import InfoModal from "../common/InfoModal";

const initState = {
  tno: 0,
  title: "",
  writer: "",
  dueDate: "",
  complete: false,
};

const ModifyComponent = ({ tno, moveToList, moveToRead }) => {
  const [todo, setTodo] = useState({ ...initState });
  //모달창 isShow
  const [infoModalOn, setInfoModalOn] = useState(false);
  const [result, setResult] = useState(null); //모달 창을 위한 상태
  //수정컴포넌트가 로딩이 될때 해당된 번호에 대한 api서버로부터 가져온다.
  useEffect(() => {
    getOne(tno).then((data) => setTodo(data));
  }, [tno]);
  //데이터가 변경이 될때 마다 settodo 수정
  const handleChangeTodo = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };
  //select 문에서의 처리방식
  const handleChangeTodoComplete = (e) => {
    const value = e.target.value;
    setTodo({
      ...todo,
      complete: value === "Y", // 불리언 값으로 직접 저장
    });
  };

  const handleClickModify = () => {
    // 실제 수정 로직 호출 (예시)
    putOne(todo).then((data) => {
      setResult(data.RESULT);
      setInfoModalOn(true);
    });
  };

  144;
  const handleClickDelete = () => {
    // 실제 삭제 로직 호출 (예시)
    deleteOne(tno).then((data) => {
      setResult(data.RESULT);
      setInfoModalOn(true);
    });
  };
  //모달창을 close
  const closeModal = () => {
    setInfoModalOn(false);
    moveToList();
    // moveToRead(tno);
  };

  return (
    <div className="modify-container">
      <InfoModal
        show={infoModalOn}
        title={`결과`}
        content={`${result}`}
        callbackFn={closeModal}
      />
      <div className="form-group">
        <label className="form-label">TNO</label>
        <input className="form-control" value={tno} type="text" disabled />
      </div>
      <div className="form-group">
        <label className="form-label">WRITER</label>
        <input
          className="form-control"
          value={todo.writer}
          type="text"
          disabled
        />
      </div>
      <div className="form-group">
        <label className="form-label">TITLE</label>
        <input
          className="form-control"
          type="text"
          name="title"
          value={todo.title}
          onChange={handleChangeTodo}
        />
      </div>
      <div className="form-group">
        <label className="form-label">DATE</label>
        <input
          className="form-control"
          name="dueDate"
          value={todo.dueDate}
          type="date"
          onChange={handleChangeTodo}
        />
      </div>
      <div className="form-group">
        <label className="form-label">COMPLETE</label>
        <select
          className="form-select"
          name="status"
          value={todo.complete ? "Y" : "N"}
          onChange={handleChangeTodoComplete}
        >
          <option value="Y">Completed</option>
          <option value="N">Not Yet</option>
        </select>
      </div>

      <div className="button-group">
        <button
          className="btn btn-modify"
          type="button"
          onClick={handleClickModify}
        >
          수정하기
        </button>
        <button
          className="btn btn-delete"
          type="button"
          onClick={handleClickDelete}
        >
          삭제하기
        </button>
        <button
          className="btn btn-list"
          type="button"
          onClick={() => moveToList()}
        >
          목록가기
        </button>
      </div>
    </div>
  );
};

export default ModifyComponent;
