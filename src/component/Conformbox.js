import React from 'react'
import { ExclamationOctagonFill } from 'react-bootstrap-icons'

const Conformbox = (props) => {
        return (
    <div className='overlaycon'>
        <div className='conformbox'>
            <p className='h4 orangecolor'><ExclamationOctagonFill /> Do you want to Remove this user</p>
            <p className='text-center mt-3'>
                <button className='btn btn-success me-2' onClick={props.handleClose}>No, It's by mistake! </button>
                <button className='btn btn-danger' onClick={()=>props.deleteFun(props.userid)}>Yes</button></p>
            </div>
    </div>
    
  )
}

export default Conformbox