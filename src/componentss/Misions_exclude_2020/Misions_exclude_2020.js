import {useEffect, useState} from "react";
import {ollMision} from "../Url_Direction/Url_Direction";

export function Misions_exclude_2020() {
let[misions, setMisions]= useState([])
useEffect(()=>{
    ollMision.then(value => setMisions(value))
    },[])
  return (<div>


    </div>);
}