import React, { useState } from 'react'
import { CardChecklist, People} from 'react-bootstrap-icons'
import './Conformbox.css'
import { Link } from 'react-router-dom'
import './Enquiredata.css'
import Userlist from './Userlist'
import Enquiredata from './Enquiredata'
import Tabbutton from './Tabbutton'

const Userdataforadmin = () => {

  const [activetab,setActivetab] = useState("userlist")

  const handlefun =(tabname)=>{
    setActivetab(tabname)
  }
    

  return (
    <div className='container my-4'>
        <div className='row'>
          <div className='col-md-2'>
            <Tabbutton grapIcon={<People className='iconstyle' />} activetb={activetab} tabname="userlist" tabtext="User List" handlefun={handlefun} />
            <Tabbutton grapIcon={<CardChecklist className='iconstyle' />} activetb={activetab} tabname="enquiredata" tabtext="enquires List" handlefun={handlefun} />
          </div>
          <div className='col-md-10'>
            {activetab === "userlist" && <Userlist />}
            {activetab === "enquiredata" && <Enquiredata />}            

          </div>
          
            

        </div>
        </div>
  
  )
}

export default Userdataforadmin