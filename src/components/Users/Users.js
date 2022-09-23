import {useEffect, useState} from "@types/react";

import {User} from "../User/User";
import {ollUsers} from "../Url_JSON/Url_JSON";

export function
Users(){
  let [users,setUsers]=useState([])

  useEffect(()=>{
    ollUsers.then(value => setUsers(value))
  },[])

  return (<div>
    {users.map(user  => (<User user={user} key={user.id}/>))}
  </div>);
}
