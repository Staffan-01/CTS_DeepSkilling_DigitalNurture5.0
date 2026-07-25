import React from 'react';
import CohortDetails from './CohortDetails';
import './App.css';

const cohorts = [
  {
    id: 1,
    cohortName: 'Batch A - React',
    status: 'ongoing',
    trainer: 'John Smith',
    duration: '8 weeks',
    startDate: '2026-06-01',
    endDate: '2026-07-26'
  },
  {
    id: 2,
    cohortName: 'Batch B - Angular',
    status: 'completed',
    trainer: 'Jane Doe',
    duration: '6 weeks',
    startDate: '2026-04-01',
    endDate: '2026-05-12'
  },
  {
    id: 3,
    cohortName: 'Batch C - Vue.js',
    status: 'ongoing',
    trainer: 'Mike Johnson',
    duration: '10 weeks',
    startDate: '2026-06-15',
    endDate: '2026-08-23'
  },
  {
    id: 4,
    cohortName: 'Batch D - Node.js',
    status: 'completed',
    trainer: 'Sarah Williams',
    duration: '7 weeks',
    startDate: '2026-03-01',
    endDate: '2026-04-19'
  }
];

function App() {
  return (
    <div className="App">
      <h1>Cohort Dashboard</h1>
      <div className="cohort-container">
        {cohorts.map(cohort => (
          <CohortDetails key={cohort.id} cohort={cohort} />
        ))}
      </div>
    </div>
  );
}

export default App;
