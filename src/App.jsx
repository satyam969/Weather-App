import { useState } from 'react'
import cloud from './assets/cloud.png'
import drizzle  from './assets/drizzle.png'
import clear from './assets/clear.png'
import humidity from './assets/humidity.png'
import rain from './assets/rain.png'
import search from './assets/search.png'
import wind from './assets/wind.png'
import snow from './assets/snow.png'

import './App.css'

// import {useJsApiLoader,GoogleMap} from "@react-google-maps/api"
// it is a hook wkich tells us whether it is loaded or not
console.log(cloud);


let api="0bde8edf0f971bd934c5cb7ccda364b5";

// const [City,setcity]=useState("London");
// const [temp,setTemp]=useState("72C");

// const[winds,setwinds]=useState("23km/hr");

// const[humidityx,sethumidityx]=useState("70%");



function App() {

  const [src,setSrc]=useState(cloud);
  // paid service
// const{isloaded}=useJsApiLoader(
//   {googleMapsApiKey:"AIzaSyAyEMqF3nWGB4oa9mKCVcIEIBPzfBjPRCQ"
// })

// if(!isloaded){
// console.log("apiloading");
// }








  // let src;
  console.log(src);

const ssearch=()=>{
  const element=document.querySelector("#Cityname");
  let temp = document.querySelector(".temp");
  let windd= document.querySelector(".wd");
  let humidityp=document.querySelector(".hd");
  let cityname=document.querySelector(".city");

  // var show=document.querySelector("#show");








if(element.value===""){

 return 0;
}

console.log(element.value);
  let url=`https://api.openweathermap.org/data/2.5/weather?q=${element.value}&appid=${api}`;


     fetch(url).then((response)=>{
      response=response.json()

      return response
     }).then((data)=>{
      console.log(data);
      temp.innerHTML=Math.floor(data.main.temp-273)+" C";
      windd.innerHTML=Math.floor(data.wind.speed)+" km/h";
      humidityp.innerHTML=Math.floor(data.main.humidity)+" %";
      cityname.innerHTML=data.name;
      element.value="";

if(data.weather[0].icon==="01d"||data.weather[0].icon==="01n"){

  setSrc(clear);
}
else if(data.weather[0].icon==="02d"||data.weather[0].icon==="02n"){

  setSrc(cloud);
}
else if(data.weather[0].icon==="03d"||data.weather[0].icon==="03n"){

  setSrc(drizzle);
}
else if(data.weather[0].icon==="04d"||data.weather[0].icon==="04n"){

  setSrc(drizzle);
}
else if(data.weather[0].icon==="09d"||data.weather[0].icon==="09n"){

  setSrc(rain);
}
else if(data.weather[0].icon==="10d"||data.weather[0].icon==="10n"){

  setSrc(rain);
}
else if(data.weather[0].icon==="13d"||data.weather[0].icon==="13n"){

  setSrc(snow);
}
else{
  setSrc(clear);
}
// src={rain};


      // console.log(show);
      // console.log(data.wind.speed);
      // console.log(data.main.temp);
      // console.log(data.main.humidity);

     }
     
     
     ).catch((error)=>{
      
cityname.innerHTML="NOT Found";
temp.innerHTML="NOT Found";
windd.innerHTML="NOT Found";
humidityp.innerHTML="NOT Found";
element.value="";

     })


     
     console.log(temp);


    

  // console.log(data);
  // console.log(error)

  // if(element[0].value===""){
  //   return 0;
  // }










}



  return (
    <>
    
    
    <div className="container">

    <h1>HEY WEATHER</h1>

<div className="searchbox">


<input type="text" id='Cityname'   placeholder='search' />

<img className='searchicon' src={search} onClick={()=>{ssearch()}} alt="" />

</div>




<div className="imgbox">

<img src={src} id='show' alt="" />
<div className="temp">27 C</div>
</div>
<div className="city">London</div>

<div className="cont">
  <div className="humidity">
    <img src={humidity} alt="" />
    <div className="hd">70%</div>
  </div>
  <div className="windspeed">
    <img src={wind} alt="" />
    <div className="wd">27km/h</div>
  </div>
</div>




    </div>
          
        
         
    </>
  )
}

export default App
