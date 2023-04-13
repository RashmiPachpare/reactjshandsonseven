import React from 'react'
import { Link } from 'react-router-dom'

const TableRow = ({student,student:{id,Name,Age,Course, Batch,},}) => {
  return (
    <>
    <td>{Name}</td>
    <td className='algn'>{Age}</td>
    <td className='algn'>{Course}</td>
    <td className='algn'>{Batch}</td>
    <td>
        <Link to='/EditDetails' state={{id}}>Edit</Link>
    </td>
    </>
  )
}

export default TableRow
