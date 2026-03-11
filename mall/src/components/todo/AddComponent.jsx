import { useState } from "react";
import useCustomMove from "../../hooks/useCustomMove";
import InfoModal from "../common/InfoModal";
import { postAdd } from "../../api/todoApi";
import "./AddComponent.css"; // CSS 파일 임포트

const initState = {
  title: "",
  writer: "",
  complete: false,
  dueDate: "",
};

export default function AddComponent() {
  const [todo, setTodo] = useState({ ...initState });
  //api 서버에 저장된 번호
  const [result, setResult] = useState(null);
  //모달창을 isShow 할건지
  const [infoModalOn, setInfoModalOn] = useState(false);
  const { moveToList } = useCustomMove();

  // 입력값 변경 핸들러 (객체 불변성을 지키며 업데이트)
  const handleChangeTodo = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickAdd = () => {
    postAdd(todo)
      .then((data) => {
        console.log(data);
        //입력값이 성공된 결과값 저장
        setResult(data.TNO);
        setInfoModalOn(true); // 모달 오픈
        setTodo({ ...initState }); // 입력 필드 초기화
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const closeModal = () => {
    //모달창을 isShow 감춤
    setInfoModalOn(false);
    moveToList(); // 목록으로 이동
  };

  127;
  return (
    <div className="add-container">
      {/* 등록 완료 알림 모달 */}
      <InfoModal
        show={infoModalOn}
        title={`ADD RESULT`}
        content={`New ${result} Added`}
        callbackFn={closeModal}
      />

      <div className="form-wrapper">
        <div className="form-group">
          <label className="form-label">TITLE</label>
          <input
            className="form-control"
            name="title"
            type="text"
            value={todo.title}
            onChange={handleChangeTodo}
            placeholder="Enter Title"
          />
        </div>

        <div className="form-group">
          <label className="form-label">WRITER</label>
          <input
            className="form-control"
            name="writer"
            type="text"
            value={todo.writer}
            onChange={handleChangeTodo}
            placeholder="Enter Writer"
          />
        </div>

        <div className="form-group">
          <label className="form-label">DUEDATE</label>
          <input
            className="form-control"
            name="dueDate"
            type="date"
            value={todo.dueDate}
            onChange={handleChangeTodo}
          />
        </div>
      </div>

      <div className="button-group">
        <button className="btn btn-save" type="button" onClick={handleClickAdd}>
          저장
        </button>
        <button
          className="btn btn-list"
          type="button"
          onClick={() => moveToList({ page: 1, size: 10 })}
        >
          목록
        </button>
      </div>
    </div>
  );
}
