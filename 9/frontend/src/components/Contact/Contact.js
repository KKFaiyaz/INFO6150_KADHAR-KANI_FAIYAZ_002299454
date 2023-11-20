import React from 'react';
import Card from '../Card/Card';

const Contact = () => {
  const contactInfo = [
    { type: 'Email', value: 'eg@northeastern.com' },
    { type: 'Phone', value: '+1 123-456-7890' },
  ];

  return (
    <div className='container'>
      <h2>Contact Us</h2>
      <p>Get in touch with us using the following contact information:</p>
      {contactInfo.map((contact, index) => (
        <Card key={index} title={contact.type} content={contact.value} />
      ))}
    </div>
  );
};

export default Contact;
