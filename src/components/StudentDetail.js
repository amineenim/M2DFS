import React, { useEffect, useState } from 'react';
import students from '../studentsData/students';
import '../styles/StudentDetail.css';

function StudentDetail({setSelectedStudent, selectedStudent}) {
    const [studentToShow, setStudentToShow] = useState(null);

    useEffect(() => {
        setStudentToShow(students.filter(student => student.id == selectedStudent)[0]);
    }, [selectedStudent])
    useEffect(() => console.log(studentToShow));

  return (
    <div className='student-detail'>
        <button onClick={() => setSelectedStudent(0)}>Home</button>
        <div className='detail'>
            {
                studentToShow !== null && (
                    <div className='student-display'>
                        <img src={studentToShow.imageUrl} />
                        <div className='more-details'>
                            <h4>{studentToShow.firstName + ' ' + studentToShow.lastName + ', ' + studentToShow.Birth}</h4>
                            <div className='country-container'>
                                <h5> Country : </h5><p>{studentToShow.country}</p>
                            </div>
                            <div className='strengths-container'>
                                <h4>Strengths : </h4> <p>{studentToShow.strengths}</p>
                            </div>
                            <div className='weakness-container'>
                                <h4>Weakness : </h4> <p>{studentToShow.weakness}</p>
                            </div>
                            <div className='hobbie-container'>
                                <h4>Hobbies : </h4> <p>{studentToShow.hobbies}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default StudentDetail