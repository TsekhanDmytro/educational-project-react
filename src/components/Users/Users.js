import {userService} from "../../services";
import User from "../User/User";

import {useEffect, useState} from "react";

export  function Users() {
const [users, setUsers]= useState([])
useEffect(()=>{
userService.getAll()
    .then(({data})=>{setUsers(data)})

},[])

  return (<div>
    {users.map(user =><User user={user} kay={user.id}/>)}
    </div>);
}
