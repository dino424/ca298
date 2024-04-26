import React, { useState } from 'react';
import ShowSingleCohort from '../components/showsinglecohort';

const SingleCohort = () => {
    const [cohort, setCohort] = useState('');

    const handleCohortChange = (event) => {
        setCohort(event.target.value);
    };

    const handleViewCohort = () => {
        console.log('Viewing cohort:', cohort);
    };

    return(  
        <section>
            <h1>Cohort: </h1>
            <input 
                type="text" 
                value={cohort} 
                onChange={handleCohortChange} 
                placeholder="Enter cohort" 
            />
            <button onClick={handleViewCohort}>View Cohort</button>
            {cohort && <ShowSingleCohort coh={cohort} />}
        </section>
    )
};

export default SingleCohort;