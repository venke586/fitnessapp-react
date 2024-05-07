import React, { useEffect, useState } from 'react'
import Conformbox from './Conformbox'
import axios from 'axios'
import Userdatamodel from './Userdatamodel'
import { Clipboard2Data, Trash } from 'react-bootstrap-icons'

const Userlist = () => {
    
    const [userlist,setUserlist] = useState([])
   
    const [singalmeasur,setSingalmeasur] = useState([])
    const [userid,setUserid] = useState("")
  

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
  

    const userListFun = async () =>{
        const responce = await axios.get("http://localhost:8000/users")
        const userdata = await responce.data
        const filterRemoveadmin = userdata.filter(adminuser=>adminuser.email !== "admin@gmail.com")
        setUserlist(filterRemoveadmin)
    }

    const conformFun=(id)=>{
      setUserid(id)
      setShow((show)=>!show)
    }

    const deleteFun = async(id) =>{
      const deleteUser = await axios.delete(`http://localhost:8000/users/${id}`)
        console.log(deleteUser.data)
        userListFun()
        handleClose()  

    }

    const singalUsermesurments = async(email)=>{
      const userlist = await axios.get("http://localhost:8000/measurements")
        const responce = await userlist.data
        const filterUsers = responce.filter(uemil=>uemil.name === email)
        setSingalmeasur(filterUsers)
    }
    
    useEffect(()=>{
        userListFun()
    },[])
  return (
    <>
     {/* model box section */}          
     {show && <Conformbox handleClose={handleClose} userid={userid} userList={userlist} deleteFun={deleteFun}/>}
          <Userdatamodel singalmeasur={singalmeasur} />
          {/* endof model box */}            
                <h3>Users List</h3>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody className="table-group-divider">
  <>
   {(userlist !== 0) && userlist.map((users,i)=>{
                    return(
                        <tr>
      <th scope="row">{i+1}</th>
      <td>{users.name}</td>
      <td>{users.email}</td>
      <td>{users.phone}</td>
      <td className='text-end'><button type='button' onClick={()=>singalUsermesurments(users.email)} className='btn btn-success me-2' data-bs-toggle="modal" data-bs-target="#exampleModal"><Clipboard2Data/> View Analytics</button>
      <button className='btn btn-danger' onClick={()=>conformFun(users._id)}><Trash/> Delete</button></td>
    </tr> 
                       
                    )
                })}
  </>
       
  </tbody>
</table>     
    </>
  )
}

export default Userlist