import React from 'react';
import Card from '../Card/Card';

const AboutUs = () => {
  const teamMembers = [
    { name: 'John Doe', role: 'CEO' },
    { name: 'Jane Smith', role: 'CTO' },
  ];

  return (
    <div className='container'>
      <h2>About Us</h2>
      <p>Learn more about our amazing team!</p>
      {teamMembers.map((member, index) => (
        <Card key={index} title={member.name} content={`Role: ${member.role}`} />
      ))}
    </div>
  );
};

export default AboutUs;
