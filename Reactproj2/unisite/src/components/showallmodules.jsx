import { useState, useEffect } from "react";

function ShowAllModules() {
    const [modules, setModules] = useState([]);

    const displayModules = () => {
        return modules.map((elem, index) => (
            <div key={index} className="col-md-4 mb-3">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{elem.code}</h5>
                        <p className="card-text">{elem.full_name}</p>
                    </div>
                </div>
            </div>
        ));
    };

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/module")
            .then(response => response.json())
            .then(data => {
                setModules(data.map(e => ({ code: e.code, full_name: e.full_name })));
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="container mt-5">
            <div className="row">
                {displayModules()}
            </div>
        </div>
    );
}

export default ShowAllModules;
