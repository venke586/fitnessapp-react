import React, { useEffect, useState } from 'react'
import { PencilSquare } from 'react-bootstrap-icons';
import axios from 'axios';
import Editmeasuremmodel from '../component/Editmeasuremmodel';

const Measurementslist = () => {

    const [measuredata,setMeasuredata] = useState([])
    const userEmail = localStorage.getItem("Email")
    const [measurid,setMeasurid] = useState(null)    
    const [status,setStatus] = useState(false)
    
    useEffect(()=>{
        if(status){
          measureListFun()
          setStatus(false)
        }
    },[status])
    
    const measureListFun = async () =>{
        const responce = await axios.get("http://localhost:8000/measurements")
        const masurdata = await responce.data
        const findMesurList = masurdata.filter(usr=>usr.name === userEmail)
        setMeasuredata(findMesurList)
    }
    
    const updateRecordfun= async (id)=>{
      setMeasurid(id)
  }
    
    useEffect(()=>{
      if(measuredata.length === 0){
        measureListFun()
      }       
    },[])



  return (
    <>
     <Editmeasuremmodel measurid={measurid} getstatus={(e)=>setStatus(e)} measurlist={measureListFun} />
            <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Weight</th>
      <th scope="col">Chest</th>
      <th scope="col">Stomach</th>
      <th scope="col">Arm</th>
      <th scope="col">Waist</th>
      <th scope="col">Thigh</th>
      <th scope="col">Buttock</th>
      <th scope="col">Diet/Exercise</th>
      <th scope="col">Illness/Period</th>
      <th scope="col">Overall</th>
    </tr>
  </thead>
  <tbody className="table-group-divider">
  <>
   {measuredata !== 0 && measuredata.map((users)=>{
                    return(
    <tr key={users._id}>
      <td>{users.date}</td>
      <td>{users.weight}</td>
      <td>{users.chest}</td>
      <td>{users.stomach}</td>
      <td>{users.arm}</td>
      <td>{users.waist}</td>
      <td>{users.thigh}</td>
      <td>{users.buttock}</td>
      <td>{users.dietdetails}</td>
      <td>{users.illnessdetails}</td>
      <td>{users.compareddetails}</td>
      <td><button className='btn btn-primary' onClick={()=>updateRecordfun(users._id)} data-bs-toggle="modal" data-bs-target="#exampleModalTwo"><PencilSquare /></button></td>
    </tr>                      
                    )
                })}
  </>
       
  </tbody>
</table> 
    </>
  )
}

export default Measurementslist