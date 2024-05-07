import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Editmeasuremmodel = ({measurid,getstatus}) => {
    const [singalmeasurdata,setSingalmeasurdata]=useState({
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
  })

  const singarMesarfun = async ()=>{
    const responsesingal = await axios.get(`http://localhost:8000/measurements/${measurid}`)
    const resData = await responsesingal.data
    setSingalmeasurdata({
      weight:resData.weight,
      chest:resData.chest,
      stomach:resData.stomach,
      arm:resData.arm,
      waist:resData.waist,
      thigh:resData.thigh,
      buttock:resData.buttock,
      dietdetails:resData.dietdetails,
      illnessdetails:resData.illnessdetails,
      compareddetails:resData.compareddetails
  })
  }
  useEffect(()=>{
    if(measurid !== null){
      singarMesarfun()   
    }
  },[measurid])


  const onChangemesatefun = (e) =>{
    setSingalmeasurdata({...singalmeasurdata,[e.target.name]:e.target.value})
}

const putData = (e)=>{
  e.preventDefault()
  
  axios.patch(`http://localhost:8000/measurements/${measurid}`,singalmeasurdata)
      .then((res) => {console.log(res); getstatus(true)})
      .catch((err) => {console.log(err)});
}

    return (
    <div class="modal fade" id="exampleModalTwo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-l">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Edit and submit</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <form onSubmit={putData}>
                <div className='row'>
                <div className='col-md-6'>
                        <input type='text' name='weight' value={singalmeasurdata.weight} className='inputFiled w-100 my-2' placeholder='Weight in kg' onChange={onChangemesatefun} />
                    </div>                   
                    <div className='col-md-6'>
                        <input type='text' name='chest' value={singalmeasurdata.chest} className='inputFiled w-100 my-2' placeholder='Chest/ Bust in cm' onChange={onChangemesatefun} />
                    </div>
                    <div className='col-md-6'>
                        <input type='text' name='stomach' value={singalmeasurdata.stomach} className='inputFiled w-100 my-2' placeholder='Stomach in inch' onChange={onChangemesatefun} />
                    </div>
                    <div className='col-md-6'>
                        <input type="text" name='arm' value={singalmeasurdata.arm} className='inputFiled w-100 my-2' placeholder='Arm in inch' onChange={onChangemesatefun} />
                    </div>
                    <div className='col-md-6'>
                        <input type='text' name='waist' value={singalmeasurdata.waist} className='inputFiled w-100 my-2' placeholder='Waist in cm' onChange={onChangemesatefun} />
                    </div>
                    <div className='col-md-6'>
                        <input type='text' name='thigh' value={singalmeasurdata.thigh} className='inputFiled w-100 my-2' placeholder='Thigh in cm' onChange={onChangemesatefun} />
                    </div>
                    <div className='col-md-12'>
                        <input type='text' name='buttock' value={singalmeasurdata.buttock} className='inputFiled w-100 my-2' placeholder='Buttock in inch' onChange={onChangemesatefun} />
                    </div>

                    <div className='col-md-12'>
                        <input type='text' name='dietdetails' value={singalmeasurdata.dietdetails} className='inputFiled w-100 my-2' placeholder='Any deviation in Diet/ Exercise since last update?' onChange={onChangemesatefun} />
                    </div>
                    <div className='col-md-12'>
                        <input type="text" name='illnessdetails' value={singalmeasurdata.illnessdetails} className='inputFiled w-100 my-2' placeholder='Any Illness/ Medication/ Period etc.?' onChange={onChangemesatefun} />
                    </div>
                    <div className='col-md-12'>
                        <input type='text' name='compareddetails' value={singalmeasurdata.compareddetails} className='inputFiled w-100 my-2' placeholder='Overall how do you feel compared the previous week?' onChange={onChangemesatefun} />
                    </div>
                   <div className='col-md-12'>
                   <button className='btn btn-warning w-100' type='submit' data-bs-dismiss="modal">
                        Submit
                    </button>
                   </div>
                    
                </div>
                </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success" data-bs-dismiss="modal">Cancel</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Editmeasuremmodel