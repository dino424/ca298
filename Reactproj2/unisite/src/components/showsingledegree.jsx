import { useState, useEffect } from "react";

function ShowSingleDegree(props) {
    const deg = props.deg;
    const [degree, setdegree] = useState([]);

    const displayDegree = () => {
        return degree.map(elem => <li>{elem}</li>);
    };

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/cohort/?degree=${deg}`)
            .then(response => response.json())
            .then(data => {
                setdegree(data.map(e => e.id));
            })
            .catch(err => console.log(err));
    }, [deg]);

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title text-center">Degree: {deg}</h3>
                    <ul className="list-group list-group-flush">
                        {displayDegree().map((degreeItem, index) => (
                            <li key={index} className="list-group-item">{degreeItem}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ShowSingleDegree;
