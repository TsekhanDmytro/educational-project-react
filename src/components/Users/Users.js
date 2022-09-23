import React, {useEffect, useState} from 'react';

import {User} from "../User/User";
import {ollUsers} from "../Url_JSON/Url_JSON";
import {Button_Info} from "../Button_Info/Button_Info";

export function Users() {
const [users, setUsers]=useState([])
  const[user,setUser]=useState(null)
  const lift=(obj)=>{
  setUser(obj)
  }
  useEffect(()=>{
    ollUsers.then(value =>setUsers(value)).then(value => setUser(value))
  },[])
  return (<div>
    {user&& <Button_Info user={user} key={user.id}/>}
    {users.map(user => <User user={user} lift={lift} key={user.id}/>)}
    </div>);
}