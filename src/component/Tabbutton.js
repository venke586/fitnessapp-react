import React from 'react'
import { Link } from 'react-router-dom'

const Tabbutton = ({grapIcon,activetb,tabname,tabtext,handlefun}) => {
  return (
    <>
    
    <div onClick={()=>handlefun(tabname)} className={activetb === tabname ?"iconbox active":'iconbox'}>
        <Link to=''>
        {grapIcon}
          {tabtext}</Link> 
        </div>
    </>
  )
}

export default Tabbutton