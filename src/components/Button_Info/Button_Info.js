export function Button_Info(props) {
let {user}=props
  return (<div>
      {<h1>Name: {user.name} </h1>}
      {<h2>ID number:{user.id} </h2>}
      {<p>Address: {user.address.street} {user.address.suite}, {user.address.city} </p>}
      {<p>Phone: {user.phone}</p>}


    </div>);
}