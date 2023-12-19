import React from 'react';
import '../styles/SingleStudent.css';

function SingleStudent({id,firstName, lastName, country, imageUrl, setSelectedStudent}) {

  return (
    <div className='single-student' onClick={() => {
        setSelectedStudent(id);
        console.log("selected student is with id " + id);
        }}>
        <div className='student-image'
        style={{ backgroundImage : `url(${imageUrl})` }}
        ></div>
        <h4>{firstName}</h4>
        <h4>{lastName}</h4>
        <strong>{country}</strong>
    </div>
  )
}

export default SingleStudent