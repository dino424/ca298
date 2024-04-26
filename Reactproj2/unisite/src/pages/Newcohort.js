import { useState } from 'react';
import CreateNewCohort from '../components/createnewcohort';

function NewCohort() {
    const [formData, setFormData] = useState({ id: "", year: "", degree: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`ID: ${formData.id}, Year: ${formData.year}, Degree: ${formData.degree}`);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1>Add new Cohort</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="id">ID:</label>
                            <input type="text" className="form-control" name="id" value={formData.id} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="year">Year:</label>
                            <input type="number" className="form-control" name="year" value={formData.year} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="degree">Degree:</label>
                            <input type="text" className="form-control" name="degree" value={formData.degree} onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

            <CreateNewCohort id={formData.id} year={formData.year} degree={formData.degree} />
        </div>
    );
}

export default NewCohort;
