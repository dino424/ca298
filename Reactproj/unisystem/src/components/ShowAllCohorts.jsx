import { useState, useEffect } from "react";

function ShowAllCohorts(){
    const [cohorts, setcohorts] = useState([])
    const displaycohorts = () =>{
        return cohorts.map(elem=>
            <li>{elem}</li>
        )
    }
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/cohort")
        .then(response=>response.json())
        .then(data=>{
            setcohorts(data.map(e=>e.id))
        })
        .catch(err=>console.log(err))
        }, []
    )
    return(
        <ul>
        {displaycohorts()}
    </ul>
    )
}

export default ShowAllCohorts;