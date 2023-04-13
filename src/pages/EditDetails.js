import React,{useState} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {studentUpdated} from '../features/StudentSlice'
import './Edit.css'

const EditDetails = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
    const data=useLocation();
    const dataid=data.state.id;
    const StdDetail=useSelector((state)=>state.student.filter((item)=>item.id===dataid));
  
    const stdName=StdDetail[0].Name
    const stdAge=StdDetail[0].Age
    const stdCourse=StdDetail[0].Course
    const stdBatch=StdDetail[0].Batch

    
    const [Name,setName]=useState(stdName);
    const [Age,setAge]=useState(stdAge);
    const [Course,setCourse]=useState(stdCourse);
    const [Batch,setBatch]=useState(stdBatch);
    const SubmitHandler=()=>{
      if(Name && Age && Course && Batch){
        dispatch(studentUpdated({
          "id":dataid,
          "Name":Name,
          "Age":Age,
          "Course":Course,
          "Batch":Batch
        }))
        navigate('/Students')
      }
     

    }
  return (
    <>
     <div className='header'>
            <label id="nam">NAME:</label>
            <input type='text' name='Name' placeholder='Name'value={Name} id="name" onChange={(e)=>setName(e.target.value)}/>
            <label id="ag">AGE:</label>
            <input type='text' name='Age' placeholder='Age'value={Age} id="age"onChange={(e)=>setAge(e.target.value)}/>
            <label id="cor">COURSE:</label>
            <input type='text' name='Course' placeholder='Course'value={Course} id="course" onChange={(e)=>setCourse(e.target.value)}/>
            <label id="bat">BATCH:</label>
            <input type='text' name='Batch' placeholder='Batch'value={Batch} id="batch" onChange={(e)=>setBatch(e.target.value)}/>
        </div>
        <div className='box2'>
        <button id='btn' onClick={SubmitHandler} style={{backgroundColor:'gray'}}>Done</button>
    </div>
    </>
  )
}

export default EditDetails
