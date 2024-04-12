import { useState, useEffect } from "react";

function ShowSingleDegree(){
    const [degree, setdegree] = useState([])
    const displayDegree = () =>{
        return degree.map(elem=>
            <li>{elem}</li>
        )
    }
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/cohort/?degree=COMSCI")
        .then(response=>response.json())
        .then(data=>{
            setdegree(data.map(e=>e.id))
        })
        .catch(err=>console.log(err))
        }, []
    )
    return(
        <ul>
        {displayDegree()}
    </ul>
    )
}

export default ShowSingleDegree;