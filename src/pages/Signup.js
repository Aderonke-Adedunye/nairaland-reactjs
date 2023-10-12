import React, {useState, useLayoutEffect, useEffect, useRef} from 'react'
import Topheader from "./../components/Topheader"
import axios from 'axios'

function Signup() {



  async function handleSubmit(e){
    e.preventDefault()

     
    let form = new FormData(e.currentTarget)

    await axios.post("http://localhost:8000/signup/", form)
    .then((res) => {
      alert("account created successfully")
      
    })
    .catch((err) => {
      for(let i in err?.response?.data){
        alert(i + "" + err?.response?.data[i])
      }
    })
    

  }




  
  return (
    <div className="signup container ">
      <Topheader/>

    <form className='' onSubmit={(e) => handleSubmit(e)}>
        <div className="row">

          <div className="col-md-6">
            <label htmlFor="fname" className="form-label">FirstName</label>
            <input name="first_name"  id="fname" type="text" className="form-control" />
          </div>

          <div className="col-md-6">
          <label htmlFor="" className="form-label">LastName</label>
            <input name="last_name" type="text" className="form-control" />
          </div>

          <div className="col-md-6">
          <label htmlFor="" className="form-label">Phone</label>
            <input name="phone" type="text" className="form-control" />
          </div>

          <div className="col-md-6">
          <label htmlFor="" className="form-label">Username</label>
            <input name="username" type="email" className="form-control" />
          </div>

          <div className="col-md-6">
          <label htmlFor="" className="form-label">Email</label>
            <input name="email" type="email" className="form-control" />
          </div>

          <div className="col-md-6">
          <label htmlFor="" className="form-label">Password</label>
            <input name='password' type="password" className="form-control" />
          </div>

          <div className="col-md-6">
          <label htmlFor="" className="form-label">Photo</label>
            <input name="photo" type="file" className="form-control" />
          </div>


          
            <button type='submit' className="btn-md btn btn-primary w-100 mt-4">Signup</button>
        
          
        </div>
      </form>
    </div>
  )
}

export default Signup


