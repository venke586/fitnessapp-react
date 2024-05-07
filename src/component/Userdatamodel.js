import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

const Userdatamodel = ({singalmeasur}) => {
  
  return (
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">User Measurements</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <div className='row'>
            <div className='col-md-6'>
            <LineChart
      width={500}
      height={400}
      className='my-2'
  data={singalmeasur}>
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
  data={singalmeasur}>
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
  data={singalmeasur}>
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
  data={singalmeasur}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="date" />
  <YAxis />
  <Tooltip />
  <Legend />     
  <Line type="monotone" dataKey="waist" stroke="#82ca9d" />
</LineChart>    
            </div>


          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Userdatamodel