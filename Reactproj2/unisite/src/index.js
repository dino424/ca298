import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Alldegrees from './pages/Alldegrees';
import AllCohorts from './pages/Allcohorts';
import SingleDegree from './pages/Singledegree';
import SingleCohort from './pages/Singlecohort';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AllModules from './pages/Allmodules';
import NewDegree from './pages/Newdegree'
import NewCohort from './pages/Newcohort';
import SingleModule from './pages/Singlemodule';
import SingleStudent from './pages/Singlestudent';
import CohortModules from './pages/Cohortmodules';
import NewModule from './pages/Newmodule';
import NewStudent from './pages/Newstudent';
import Newgrade from './pages/Newgrade';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route index element={<App/>}/>
        <Route path="alldegrees" element={<Alldegrees />}/>
        <Route path="allcohorts" element={<AllCohorts />}/>
        <Route path="allmodules" element={<AllModules />}/>
        <Route path="cohortmodules" element={<CohortModules />}/>
        <Route path="singledegree" element={<SingleDegree />}/>
        <Route path="singlecohort" element={<SingleCohort />}/>
        <Route path="singlemodule" element={<SingleModule />}/>
        <Route path="singlestudent" element={<SingleStudent />}/>
        <Route path="newdegree" element={<NewDegree />}/>
        <Route path="newcohort" element={<NewCohort />}/>
        <Route path="newmodule" element={<NewModule />}/>
        <Route path="newstudent" element={<NewStudent />}/>
        <Route path="newgrade" element={<Newgrade />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
