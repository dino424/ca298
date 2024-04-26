import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

function ShowAllCohorts() {
    const [cohorts, setcohorts] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/cohort")
            .then(response => response.json())
            .then(data => {
                setcohorts(data.map(e => e.id));
            })
            .catch(err => console.log(err));
    }, []);

    const displaycohorts = () => {
        return cohorts.map(elem => (
            <Card className="mb-3" key={elem}>
                <Card.Body>{elem}</Card.Body>
            </Card>
        ));
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h2 className="mb-4">All Cohorts:</h2>
                    {displaycohorts()}
                </div>
            </div>
        </div>
    );
}

export default ShowAllCohorts;
