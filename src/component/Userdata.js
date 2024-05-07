import React, { useState } from 'react'
import { Calendar2HeartFill, Clipboard2DataFill, GraphUpArrow } from 'react-bootstrap-icons';
import Measureanalytics from '../pages/Measureanalytics';
import Measurementsform from './forms/Measurementsform';
import Measurementslist from '../pages/Measurementslist';
import Tabbutton from './Tabbutton';

const Userdata = () => {    
  const [activeTab, setActiveTab] = useState("measureanalytics");

  const handleTabClick = (tabname) => {
    setActiveTab(tabname);
  };

    

  return (

    <div className='container my-4'>
    <div className='row'>
      <div className='col-md-2'>
    <Tabbutton handlefun={handleTabClick} grapIcon={<GraphUpArrow className='iconstyle' />} activetb={activeTab} tabname="measureanalytics" tabtext="DASHBORD" />
    <Tabbutton handlefun={handleTabClick} grapIcon={<Calendar2HeartFill className='iconstyle' />} activetb={activeTab} tabname="measurementsform" tabtext="ADD MEASUREMENT" />
    <Tabbutton handlefun={handleTabClick} grapIcon={<Clipboard2DataFill className='iconstyle' />} activetb={activeTab} tabname="measurementslist" tabtext="MEASUREMENTS" />     
      </div>

      <div className='col-md-10'>                       
              {activeTab ==="measureanalytics" && <Measureanalytics />} 
              {activeTab ==="measurementsform" && <Measurementsform />}
              {activeTab ==="measurementslist" && <Measurementslist /> }  
                       
          
            
      </div>
    </div>
  </div> 
  )
}

export default Userdata