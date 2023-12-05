import React, { useState } from 'react'
import Header from '../sharedcomponents/header.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '../scss/businesses.scss'



export default function Businenesses() {
  
const [closeSearch,setCS] = useState(true);
const [emptySearch, setES] = useState(true);

const handleChange = (event) => {
  

  console.log("The new value is:", event.target.value  )
  console.log(event.target.value  == '' )
  if(event.target.value  == ""){
    setES(true);
  } else 
  {setES(false);
  }
  ;
 
}
const searchResponse = () => {
  
  console.log("Valid search")
  
 }

  return (
    <div className="body" >
      <div className='header'>
    <Header/>  
    </div>
       
    <div className="page-welcome"  >
         <h1 style={{display : !(closeSearch & emptySearch) ? 'none' : 'block'}}>Local & Authentic Brands Suitable for All Needs</h1>
      </div> 
            
      <div className='searchBody'>
          <div className="box">
            <input type="checkbox" id="check"  checked = {(closeSearch & emptySearch)} />
            <div className='search-box'>
            <input type = "text" placeholder = "Type here..." onChange={handleChange}/>
            
            <div className="searchIcon" onClick={()=>setCS(!closeSearch)}>
            <label for="check">
              <FontAwesomeIcon icon = {faSearch} onClick={emptySearch?null:searchResponse} className={emptySearch?'':'fa-beat'}/>
              </label>
              </div>
            </div>
          </div>
      </div>
     
      <div className="slideShow">
        <h1> SlideShow</h1>
      </div>
    
    </div>


    

   
   
  )
}
