import React from 'react'
import { Link } from 'react-router-dom'


function Topheader() {
  return (
    <div className="topheader card">
      <img src="./../../logo1.png" alt="" className="logo card-img-top" />

      <p className='text-center'>Welcome, &nbsp;  
        <strong>Guest: </strong>  &nbsp;
        <Link to="/signup">Register on Nairaland</Link> &nbsp; 
        <span>/</span> &nbsp; 
        <Link to="/login">LOGIN!</Link> &nbsp; 
        <Link to="">Trending</Link> &nbsp; 
        <span>/</span> &nbsp; 
        <Link to="">Recent</Link> &nbsp; 
        <Link to="/create">Create</Link> 
      </p>


      <p className='text-center'>
        <strong>Stats:</strong> &nbsp; 20330 members, 30099 
        <strong>&nbsp; Date:</strong> thursay 27, 2000
        
      </p>

      <div className="container my-3">
      <div className="d-flex gap-3">
        <input type="text" className="form-control" />
        <button className="btn btn-outline-dark">Search</button>
      </div>
      </div>


    </div>
  )
}

export default Topheader