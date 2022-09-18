
export function Simpson(props) {
let {simpson}= props;
  return (<div>
 <h2>{simpson.name} {simpson.surname}</h2>
      <p>Age: {simpson.age}</p>
      <p>About me: {simpson.info} </p>
      <img src= {simpson.photo} alt={simpson.name}/>
    </div>);
}
