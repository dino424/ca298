import { useState, useEffect } from "react";

function ShowSingleCohort(props) {
    const coh = props.coh;
    const [cohorts, setcohorts] = useState([]);

    const displaycohorts = () => {
        return cohorts.map(elem => <li>{elem}</li>);
    };

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/student/?cohort=${coh}`)
            .then(response => response.json())
            .then(data => {
                setcohorts(data.map(e => e.last_name));
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title text-center">Cohort: {coh}</h3>
                    <ul className="list-group list-group-flush">
                        {displaycohorts().map((cohort, index) => (
                            <li key={index} className="list-group-item">{cohort}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ShowSingleCohort;
