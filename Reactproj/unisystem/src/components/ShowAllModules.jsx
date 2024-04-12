import { useState, useEffect } from "react";

function ShowAllModules(){
    const [modules, setmodules] = useState([])
    const displaymodules = () =>{
        return modules.map(elem=>
            <li>{elem}</li>
        )
    }
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/module")
        .then(response=>response.json())
        .then(data=>{
            setmodules(data.map(e=>e.code))
        })
        .catch(err=>console.log(err))
        }, []
    )
    return(
        <ul>
        {displaymodules()}
    </ul>
    )
}

export default ShowAllModules;