import React, { useState } from 'react'
import axios from 'axios'

const Measurementsform = () => {

    const userEmail = window.localStorage.getItem("Email")
    const currentdata = new Date()
    const currDate = `${currentdata.getDate()}/${currentdata.getMonth()+1}/${currentdata.getFullYear()}`;

    const initialState = {
        weight:'',
        chest:'',
        stomach:'',
        arm:'',
        waist:'',
        thigh:'',
        buttock:'',
        dietdetails:'',
        illnessdetails:'',
        compareddetails:''
    }

    const [measuredata,setMeasuredata] = useState(initialState)

    const onChangemesatefun = (e) =>{
            setMeasuredata({...measuredata,[e.target.name]:e.target.value})
    }
    
     const onsumbmitmesFun = async (e)=>{        
        e.preventDefault()
            
        const userData = {
            name:userEmail,
            weight:measuredata.weight,
        date:currDate,
        chest:measuredata.chest,
        stomach:measuredata.stomach,
        arm:measuredata.arm,
        waist:measuredata.waist,
        thigh:measuredata.thigh,
        buttock:measuredata.buttock,
        dietdetails:measuredata.dietdetails,
        illnessdetails:measuredata.illnessdetails,
        compareddetails:measuredata.compareddetails
        }
        if(measuredata.weight !== "" && measuredata.chest !== "" && measuredata.stomach !== "" && measuredata.waist !== ""){  

            await axios.post("http://localhost:8000/measurements",userData)
                        
            .then(respo=>{
                console.log(respo.data)
                setMeasuredata({...initialState})
                }
                )
            window.location.href="/dashbord"

        }else{
            alert("Please submit all fields")
        }
       
    }

    

  return (
    <>
     <form onSubmit={onsumbmitmesFun}>
                <div className='row'>
                <div className='col-md-6'>
                        <input type='text' name='weight' value={measuredata.weight} className='inputFiled w-100 my-2' placeholder='Weight in kg' onChange={onChangemesatefun} />
                    </div>
                    <div className='col-md-6'>
                        <input value={currDate} className='inputFiled w-100 my-2' disabled/>
                    </div>
                    <div className='col-md-6'>
                        <input type='text' name='chest' value={measuredata.chest} className='inputFiled w-100 my-2' placeholder='Chest/ Bust in cm' onChange={onChangemesatefun} />
                    </div>
                    <div className='col-md-6'>
                        <input type='text' name='stomach' value={measuredata.stomach} className='inputFiled w-100 my-2' placeholder='Stomach in inch' onChange={onChangemesatefun} />
                    </div>
                    <div className='col-md-6'>
                        <input type="text" name='arm' value={measuredata.arm} className='inputFiled w-100 my-2' placeholder='Arm in inch' onChange={onChangemesatefun} />
                    </div>
                    <div className='col-md-6'>
                        <input type='text' name='waist' value={measuredata.waist} className='inputFiled w-100 my-2' placeholder='Waist in cm' onChange={onChangemesatefun} />
                    </div>
                    <div className='col-md-6'>
                        <input type='text' name='thigh' value={measuredata.thigh} className='inputFiled w-100 my-2' placeholder='Thigh in cm' onChange={onChangemesatefun} />
                    </div>
                    <div className='col-md-6'>
                        <input type='text' name='buttock' value={measuredata.buttock} className='inputFiled w-100 my-2' placeholder='Buttock in inch' onChange={onChangemesatefun} />
                    </div>

                    <div className='col-md-12'>
                        <input type='text' name='dietdetails' value={measuredata.dietdetails} className='inputFiled w-100 my-2' placeholder='Any deviation in Diet/ Exercise since last update?' onChange={onChangemesatefun} />
                    </div>
                    <div className='col-md-12'>
                        <input type="text" name='illnessdetails' value={measuredata.illnessdetails} className='inputFiled w-100 my-2' placeholder='Any Illness/ Medication/ Period etc.?' onChange={onChangemesatefun} />
                    </div>
                    <div className='col-md-12'>
                        <input type='text' name='compareddetails' value={measuredata.compareddetails} className='inputFiled w-100 my-2' placeholder='Overall how do you feel compared the previous week?' onChange={onChangemesatefun} />
                    </div>
                   <div className='col-md-12'>
                   <button className='btn btn-warning w-100' type='submit'>
                        Submit
                    </button>
                   </div>
                    
                </div>
                </form>
    </>
  )
}

export default Measurementsform