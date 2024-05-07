import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CardChecklist, People  } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import Footer from './footer/Footer'
import Navbar from './header/Navbar'

function Enquiredata() {
    
    const [userenquires,setUserenquires] = useState([])

    const enquiresListFun = async () =>{
        const responce = await axios.get("http://localhost:8000/enquires")
        const userdata = await responce.data
        setUserenquires(userdata)
    }

    useEffect(()=>{
        enquiresListFun()
    },[userenquires])

  return (
    <>
   
   <h3>Enquiry List</h3>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First name</th>
      <th scope="col">Last name</th>
      <th scope="col">Email</th>
      <th scope="col">Mobaile</th>
      <th scope="col">Message</th>
    </tr>
  </thead>
  <tbody className="table-group-divider">
  <>
   {userenquires !== 0 && userenquires.map((users,i)=>{
                    return(
                        <tr>
      <th scope="row">{i+1}</th>
      <td>{users.firstname}</td>
      <td>{users.lastname}</td>
      <td>{users.email}</td>
      <td>{users.mobaile}</td>
      <td>{users.message}</td>
    </tr> 
                       
                    )
                })}
  </>
       
  </tbody>
</table>    
    </>    
  )
}

export default Enquiredata