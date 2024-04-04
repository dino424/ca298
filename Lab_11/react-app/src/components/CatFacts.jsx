import { useState, useEffect} from "react";

function CatFacts(){
    const [isLoaded, setIsLoaded] = useState(false);
    const [facts, setfacts] = useState([])
    const displayFacts = () =>{
        return facts.map(elem=>
            <li>{elem}</li>
        )
    }
    useEffect(()=>{
        fetch("https://cat-fact.herokuapp.com/facts")
        .then(response=>response.json())
        .then(data=>{
            setfacts(data.map(e=>e.text))
            setIsLoaded(true);
        })
        .catch(err=>console.log(err))
        }, []
    )
    if(isLoaded){
        return (
            <ul>
                {displayFacts()}
            </ul>
        )
    }
    else{
        return (
            <img src="Loading.png" />
        )
    }
}

export default CatFacts;