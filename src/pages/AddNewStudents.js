import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { studentAdded } from '../features/StudentSlice';
import { useDispatch,useSelector } from 'react-redux';
import './Add.css'

const AddNewStudents = () => {
    const data=useSelector((state)=>state.student);
    const [Name,setName]=useState("");
    const [Age,setAge]=useState("");
    const [Course,setCourse]=useState("");
    const [Batch,setBatch]=useState("");
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const cancelAddStudent=()=>{
        navigate("/Students");
        
    }

    const SubmitNewStudent=()=>{
        if(Name && Age && Course && Batch){
            dispatch(studentAdded({
             "id":data.length,
                "Name":Name,
                "Age":Age,
                "Course":Course,
                "Batch":Batch
            }))
            navigate("/Students")
            
        }

    }
  return (
    <>
    <div className='box'>
        <div className='header'>
            <label id="nam">NAME :</label>
            <input type='text' name='Name' placeholder='Name'value={Name} id="name"onChange={(e)=>setName(e.target.value)}/>
            <label id="ag">AGE :</label>
            <input type='text' name='Age' placeholder='Age'value={Age} id="age" onChange={(e)=>setAge(e.target.value)}/>
            <label id="cor">COURSE :</label>
            <input type='text' name='Course' placeholder='Course'value={Course} id="course" onChange={(e)=>setCourse(e.target.value)}/>
            <label id="bat">BATCH :</label>
            <input type='text' name='Batch' placeholder='Batch'value={Batch} id="batch" onChange={(e)=>setBatch(e.target.value)}/>
        </div>
    </div>
    <div className='box2'>
        <button className='butn2' id="cancel"onClick={cancelAddStudent} style={{backgroundColor:'gray'}}>Cancel</button>
        <button className='butn2' id="submit" onClick={SubmitNewStudent}>Submit</button>
    </div>
    </>
  )
}

export default AddNewStudents
