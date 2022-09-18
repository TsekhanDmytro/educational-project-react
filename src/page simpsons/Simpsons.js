import {simpsons} from "./arr Simpsons";
import {Simpson} from "./Simpson";


export function Simpsons() {
  return (<div>
      {simpsons.map((value,index) =><Simpson key={index} simpson={value}/>)}
    </div>);
}