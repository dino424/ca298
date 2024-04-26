import { useState, useEffect } from "react";

function ShowSingleModule(props){
    const mod = props.mod;
    const [module, setModule] = useState([])

    useEffect(()=>{
        fetch(`http://127.0.0.1:8000/api/module/?mod=${mod}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response=>response.json())
        .then(data=>{
            data.forEach(x => {
                if (x.code === mod) {
                    setModule(x.full_name + " " + "(" + x.code + ")");
                }
            });
        })
        .catch(err=>console.log(err))
        }, [mod]
    );
    return(
       <div>
        <p>{module}</p>
       </div>
    )
}

export default ShowSingleModule;