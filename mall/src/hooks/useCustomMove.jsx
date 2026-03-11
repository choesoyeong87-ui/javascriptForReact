import { useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
  //"5"존재하면 5리턴하고, "" 없으면 defaultValue 리턴하는 화살표함수
} from "react-router-dom";
const getNum = (param, defaultValue) => {
  // 삼항연산자로 쓸거면 이렇게 사용가능
  // return(!param)?(defaultValue):parseInt(param);
  if (!param) {
    return defaultValue;
  }
  return parseInt(param);
};

//사용자 훅스
const useCustomMove = () => {
  const navigate = useNavigate();

  //const queryDefault = "?page=2&size=10"
  const [refresh, setRefresh] = useState(false);
  const [queryParams] = useSearchParams();
  const page = getNum(queryParams.get("page"), 1);
  const size = getNum(queryParams.get("size"), 10);
  //page=2 size=10
  const queryDefault = createSearchParams({ page, size }).toString(); //새로 추가
  // http://~~~~~/todo/list?page=1&size=10
  const moveToList = (pageParam) => {
    let queryStr = "";
    if (pageParam) {
      const pageNum = getNum(pageParam.page, page);
      const sizeNum = getNum(pageParam.size, size);
      queryStr = createSearchParams({
        page: pageNum,
        size: sizeNum,
      }).toString();
    } else {
      queryStr = queryDefault;
    }

    navigate({
      pathname: `../todo/list`,
      search: queryStr,
    });
    setRefresh(!refresh); //추가
  };
  // http://~~~~~/todo/modify/10?page=1&size=10 없으면 1과10으로만들어주는거야
  const moveToModify = (num) => {
    console.log(queryDefault);

    //todo만 바꾸면 됨 notice로 그리고 설명을 할 수 있어야함
    navigate({
      pathname: `../todo/modify/${num}`,
      search: queryDefault, //수정시에 기존의 쿼리 스트링 유지를 위해
    });
  };
  // http://~~~~~/todo/read/10?page=1&size=10
  const moveToRead = (num) => {
    navigate({
      pathname: `../todo/read/${num}`,
      search: queryDefault, //수정시에 기존의 쿼리 스트링 유지를 위해
    });
    setRefresh(!refresh);
  };
  return { moveToList, moveToModify, moveToRead, page, size, refresh }; //moveToModify 추가
};

export default useCustomMove;
