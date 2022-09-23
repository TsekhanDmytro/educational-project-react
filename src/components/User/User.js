
export function User(props) {
let {user}=props
  return (<div>
        <h2>app component header </h2>
      {user.name}

    </div>);
}