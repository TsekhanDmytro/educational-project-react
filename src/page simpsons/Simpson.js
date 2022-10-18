export default function Simpson({simpson}) {
    return (<div>
        <h3>{simpson.name} {simpson.surname} Age-{simpson.age} years</h3>
        <img className="fit-picture"
             src={simpson.photo}
             alt={simpson.name}/>
        <p>{simpson.info}</p>
    </div>);
}
