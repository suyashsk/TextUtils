import React, { useState } from 'react'
import Switch from '@mui/material/Switch';
import { Link } from 'react-router-dom'

const label = { inputProps: { 'aria-label': 'Switch demo' } };
const Header = ({mode,setMode}) => {
   
    function toggleMode(){
        setMode(!mode)
    }

  return (
    <div className='header_container'>
        
        <div className='unlist'>
        <Link to="/" className='items'><h1 className='heading'>TextUtils</h1></Link>
        <ul className='list'>
            <li ><Link to="/" className='items'>Home</Link></li>
            <li ><Link to="/about" className='items'>AboutUs</Link></li>
            <li ><Link to="/contact" className='items'>Contact</Link></li>
        </ul>
        </div>
        <button onClick={toggleMode} className='btn11'><Switch {...label} defaultChecked color="default" /> {mode ? "Enable Light mode" : "Enable Dark Mode"} </button>
    </div>
  )
}

export default Header