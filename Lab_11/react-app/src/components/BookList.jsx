import { useState, useEffect} from "react";

function BookList(){
    const [isLoaded, setIsLoaded] = useState(false);
    const [books, setbooks] = useState([]);
    const displayBooks = () =>{
        return books.map(elem=>
            <li>{elem}</li>
        )
    }
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/books")
        .then(response=>response.json())
        .then(data=>{
            setbooks(data.map(e=>e.text))
            setIsLoaded(true);
        })
        .catch(err=>console.log(err))
        }, []
    )
    return(
        <ul>{displayBooks()}</ul>
    ) 
}

export default BookList;