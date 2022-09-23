import {Button_Info} from "../Button_Info/Button_Info";

export function User(props) {
let {user, lift}= props
  return (<div>
    {<h3>{user.name}</h3>}
    <button onClick={()=>lift(user)}>detail information</button>
    </div>);
}