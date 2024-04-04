import { useState } from "react";

function Counter(){
    const [myInt, setMyVar] = useState(0);
return(
    <p>
        {myInt}
        <button onClick={
            ()=>{
                setMyVar(myInt + 1);
            }
        }>
            Click me
        </button>
    </p>)
}

export default Counter;