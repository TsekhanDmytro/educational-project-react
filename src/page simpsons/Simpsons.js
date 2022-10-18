import Simpson from "./Simpson";
import {simpsons} from "./arr Simpsons";

export default function Simpsons() {
    return (<div>
        {simpsons.map((simpson, index)  => <Simpson kay={index} simpson={simpson}  />)}
    </div>);
}
