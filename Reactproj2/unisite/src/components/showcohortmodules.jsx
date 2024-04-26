import { useState, useEffect } from "react";

function ShowCohortModules(props) {
    const coh = props.coh;
    const [modules, setModules] = useState([]);

    const displayModules = () => {
        return modules.map((elem, index) => (
            <div key={index} className="col-md-4 mb-3">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{elem.full_name}</h5>
                        <p className="card-text">{elem.code}</p>
                    </div>
                </div>
            </div>
        ));
    };

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/module/?delivered_to=${coh}`)
            .then(response => response.json())
            .then(data => {
                setModules(data.map(e => ({ full_name: e.full_name, code: e.code })));
            })
            .catch(err => console.log(err));
    }, [coh]);

    return (
        <div className="container mt-5">
            <div className="row">
                {displayModules()}
            </div>
        </div>
    );
}

export default ShowCohortModules;
