import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Students from '../pages/Students'
import ContactUs from '../pages/ContactUs'
import AddNewStudents from '../pages/AddNewStudents'
import EditDetails from '../pages/EditDetails'

const RoutesP = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Students' element={<Students/>}/>
      <Route path='/ContactUs' element={<ContactUs/>}/>
      <Route path='/AddnewStudent' element={<AddNewStudents/>}/>
      <Route path='/EditDetails' element={<EditDetails/>}/>
    </Routes>
  )
}

export default RoutesP