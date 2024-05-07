import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

const Measureanalytics = () => {
    const [userdata,setUserdata]=useState([])
    const userEmail = localStorage.getItem("Email")
    
      
    const userDatafun = async ()=>{
        const userlist = await axios.get("http://localhost:8000/measurements")
        const responce = await userlist.data
        const filterUsers = responce.filter(uemil=>uemil.name === userEmail)
        setUserdata(filterUsers)
    }
  
    useEffect(()=>{
      userDatafun()
    },[])
  return (
    <div className='row'>
     <div className='col-md-6'>
            <LineChart
      width={500}
      height={400}
      className='my-2'
  data={userdata}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="date" />
  <YAxis />
  <Tooltip />
  <Legend />
 
  <Line type="monotone" dataKey="weight" stroke="#82ca9d" />
</LineChart>    
            </div>
            <div className='col-md-6'>
            <LineChart
      width={500}
      className='my-2'
      height={400}
  data={userdata}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="date" />
  <YAxis />
  <Tooltip />
  <Legend />     
  <Line type="monotone" dataKey="chest" stroke="#82ca9d" />
</LineChart>    
            </div>

            <div className='col-md-6'>
            <LineChart
      width={500}
      height={400}
  data={userdata}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="date" />
  <YAxis />
  <Tooltip />
  <Legend />     
  <Line type="monotone" dataKey="stomach" stroke="#82ca9d" />
</LineChart>    
            </div>

            <div className='col-md-6'>
            <LineChart
      width={500}
      height={400}
  data={userdata}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="date" />
  <YAxis />
  <Tooltip />
  <Legend />     
  <Line type="monotone" dataKey="waist" stroke="#82ca9d" />
</LineChart>    
            </div>


    </div>
  )
}

export default Measureanalytics