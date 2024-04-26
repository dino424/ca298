import React, { useState } from 'react';
import ShowCohortModules from '../components/showcohortmodules';

const CohortModules = () => {
    const [cohort, setCohort] = useState('');

    const handleCohortChange = (event) => {
        setCohort(event.target.value);
    };

    const handleViewCohort= () => {
        console.log('Viewing Modules for the cohort:', cohort);
    };

    return(  
        <section>
            <h1>Modules: </h1>
            <input 
                type="text" 
                value={cohort} 
                onChange={handleCohortChange} 
                placeholder="Enter Cohort" 
            />
            <button onClick={handleViewCohort}>View Modules for this Cohort</button>
            {cohort && <ShowCohortModules coh={cohort} />}
        </section>
    )
}

export default CohortModules;