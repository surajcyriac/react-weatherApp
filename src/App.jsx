import { useState } from 'react'
import './App.css'
import { TextField } from '@mui/material'
import { weathercallApi } from '../apis'


function App() {
  const [Place,setPlace]=useState("Location")
  const [FeelsLike,setFeelsLike]=useState("Feels Like")
  const [Wind,setWind]=useState({speed:"wind"})
  const [Description,setDescription]=useState("Description")

  const getweather=async(location)=>{

    try{
   console.log(location);
      const response=await weathercallApi(location)
  setPlace(response.data.name)
  setFeelsLike(response.data.main.feels_like)  
  setWind(response.data.wind)
  setDescription(response.data.weather[0].description)

   
  }catch(err){
      console.log(err);
      
    }

  }


  
  return (
    <>
    <div style={{minHeight:"100vh",    backgroundImage: `url('https://www.noaa.gov/sites/default/files/styles/landscape_width_1275/public/legacy/image/2019/Jun/PHOTO-dark%20and%20stormy%20cloudscape-istock-1125x534-Landscape.jpg')`,
 backgroundSize:"cover"}} className='d-flex justify-content-center align-items-center k'>
    <div style={{width:'600px'}} className='bg-light rounded p-5 bg-opacity-50 d-flex justify-content-center align-items-center flex-column'>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSg_8j8f8DHg5wD5X_aMGGRcRj1nscjvgwSI-MERniuptgi16lmvL8uySxKskvgdlnQUs&usqp=CAU" alt=""style={{height:"200px" ,width:"200px"}} className='rounded-5'/>
<h2>Find Today's Weather</h2>
<TextField id="standard-basic"  onChange={e=>getweather(e.target.value)} label="Enter your Location" variant="standard" />
<div className='d-flex justify-content-around align-items-center w-100 m-3'>
  <h1><i className="fa-solid fa-location-dot"></i> <span className='fs-5 text-tertiary ms-2'>{Place}</span></h1>
    <h1><i className="fa-solid fa-temperature-low"></i><span className='fs-5 text-tertiary ms-2'>{FeelsLike}</span> </h1>
</div>
<div className='d-flex justify-content-around align-items-around w-100 m-3'>
    <h1><i className="fa-solid fa-wind"></i><span className='fs-5 text-tertiary ms-3'>{Wind.speed}</span> </h1>
    <h1><i className="fa-solid fa-cloud-sun"></i><span className='fs-5 text-tertiary ms-2'>{Description}</span> </h1>
</div>
</div>

      </div>
    </>
  )
}

export default App
