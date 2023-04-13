import React from 'react'
import { useSelector } from 'react-redux'
import TableRow from '../Components/TableRow'
import { useNavigate } from 'react-router-dom';
import './Student.css'
const Students = () => {
  const navigate=useNavigate();
 const data= useSelector((state)=>state.student);
//  console.log("Data is here",data)
const AddNewStudent=()=>{
  navigate('/AddnewStudent')

}


  return (
    <>
    <header className='header'>
     <center><h1>STUDENT DETAILS</h1></center> 
      <button className='btn' onClick={AddNewStudent}>Add New Student</button>
    </header>
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td className='algn'>Age</td>
          <td className='algn'>Course</td>
          <td className='algn'>Batch</td>
          <td className='algn'>Change</td>
        </tr>
      </thead>
      <tbody>
        {
          data.map((student)=>{
            return(
              <tr key={student.id}>
                <TableRow student={student}/>
              </tr>
            )
          })
        }
      </tbody>
    </table>
    </>
  )
}

export default Students
