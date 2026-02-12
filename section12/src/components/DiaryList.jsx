import Button from "./Button";
import DiaryItem from "./DiaryItem";
import "./DiaryList.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DiaryList=({monthlyData})=>{
    //정렬순서 상태변화
    const [sortType,setSortType] = useState("latest")
    //페이지 라우팅
    const nav = useNavigate();
    //정렬처리(내림차순,오름차순)
    const getSortedMonthlyData=()=>{
        return monthlyData.toSorted((a,b)=>{
            if (sortType === "oldest") {
                return a.createdDate - b.createDate
            }else{
                return b.createdDate - a.createDate
            }
        })
    }
    const onChangeSortType = (e)=>{
        setSortType(e.target.value)
    }

const sortedMonthlyData = getSortedMonthlyData();



    return<>
    <div className="DiaryList">
    <div className="memu_bar">
    <select value={sortType} onChange={onChangeSortType}>
        <option value={"latest"}>LATEST</option>
        <option value={"oldest"}>OLDEST</option>
    </select>

    <Button text={"새일기쓰기"} type={"POSITIVE"} onClick={()=>nav("/new")}/>
</div>
    <div className="list_wrapper">
        {sortedMonthlyData.map((item)=> <DiaryItem key={item.id}{...item}/>)}
    </div>
    
    </div>
    </>
}
export default DiaryList;