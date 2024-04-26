import { useState } from 'react';
import CreateNewModule from '../components/createnewmodule';

function NewModule() {
    const [formData, setFormData] = useState({ name: "", code: "", rec: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Full Name: ${formData.name}, Shortcode: ${formData.code}, Delivered To: ${formData.rec}`);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1>Create New Module</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name:</label>
                            <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="code">Shortcode:</label>
                            <input type="text" className="form-control" name="code" value={formData.code} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="rec">Delivered To:</label>
                            <input type="text" className="form-control" name="rec" value={formData.rec} onChange={handleChange} />
                        </div>
                        <div clas
                        sName="form-group">
                            <label htmlFor="ca_split">Percent CA:</label>
                            <input type="number" className="form-control" name="ca_split" value={formData.ca_split} onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

            <CreateNewModule name={formData.name} code={formData.code} rec={formData.rec} ca_split={formData.ca_split} />
        </div>
    );
}

export default NewModule;