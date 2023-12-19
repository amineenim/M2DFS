import React, { useState } from 'react';
import SingleStudent from './SingleStudent';
import '../styles/HomePage.css';
import students from '../studentsData/students';
import StudentDetail from './StudentDetail';

function HomePage() {
    // state that stores the id of the selected student
    const [selectedStudent, setSelectedStudent] = useState(0);

  return (
    <div className='students-container'>
        <h2>
            <p>here you will find the best class in the world, the master 2 full stack web and mobile development</p>
            <h3>2023/2024</h3>
            {
                selectedStudent > 0 ? 
                (<h3>Student Detail</h3>) : 
                (<h3>List Of Students</h3>)
            }
            
        </h2>
        {
            selectedStudent == 0 && (
                <div className='students-list'>
            {
                        students.map((student) => {
                            return <SingleStudent key={student.id} 
                            id = {student.id}
                            firstName = {student.firstName}
                            lastName = {student.lastName}
                            country = {student.country}
                            imageUrl = {student.imageUrl}
                            setSelectedStudent = {setSelectedStudent}
                            />
                        })
                    }
                </div>
            )
        }
        {
            selectedStudent > 0 && <StudentDetail setSelectedStudent={setSelectedStudent} selectedStudent = {selectedStudent}/>
        }
        
    </div>
  )
}

export default HomePage