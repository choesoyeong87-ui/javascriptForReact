import { useState } from "react";
import { useSearchParams,useParams } from "react-router-dom";
import Header from "./Header";
import Button from "./Button";

const Edit = () =>{
  const params = useParams();
 return <>
 <h2>{params.id}번의 Edit</h2>
 </> 
 
  }


export default Edit;
