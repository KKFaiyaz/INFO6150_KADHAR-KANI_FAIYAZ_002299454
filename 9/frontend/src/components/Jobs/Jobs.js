import React from 'react';
import Card from '../Card/Card';

const Jobs = () => {
  const jobList = [
    { title: 'Job 1', description: 'Description for Job 1' },
    { title: 'Job 2', description: 'Description for Job 2' },
  ];

  return (
    <div className='container'>
      <h2>Explore Job Opportunities</h2>
      {jobList.map((job, index) => (
        <Card key={index} title={job.title} content={job.description} />
      ))}
    </div>
  );
};

export default Jobs;
