import React from 'react'
import axios from "axios"
import Topheader from '../components/Topheader'
import { useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate()

  async function handleLogin(e){
    e.preventDefault()

     
    let form = new FormData(e.currentTarget)

    await axios.post("https://aderonkeadedunye.pythonanywhere.com/login/", form)
    .then((res) => {
     localStorage.setItem("user", JSON.stringify(res.data));
     alert("login successful")
     navigate("/")
      
    })
    .catch((err) => {
      
      if(err?.response?.data === "Invalid Credentials" ){
        alert("Invalid Credentials")

      }else{
      for(let i in err?.response?.data){
        alert(i + "" + err?.response?.data[i])
      }

    }
    })
    

  }

  
  return (
<>
<Topheader/>

<div className='login w-50 m-auto'>

<form onSubmit={handleLogin}>

<div className='mb-4'>
   <label htmlFor="">Email</label>
   <input name="email" type="text" className="form-control" />
 </div>

 <div className='mb-4'>
   <label htmlFor="">Password</label>
   <input name="password" type="password" className="form-control" />
 </div>

 <button type="submit" className="btn btn-primary w-100">Login</button>

</form>

</div>
</>
  )
}

export default Login