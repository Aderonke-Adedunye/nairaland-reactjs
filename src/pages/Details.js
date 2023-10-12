import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import contents from '../fakedb'
import axios from 'axios'
import { useState } from 'react'
function Details() {

    const { id } = useParams()

    const [data, setData] = useState(null)


   
  useEffect(() =>{

    axios.get(`https://aderonkeadedunye.pythonanywhere.com/getarticle/${id}`)
    .then((res) => setData(res.data))
    .catch((err) => console.log(err))

  }, [id])

   


  return (
    <div >
        <h1 className="text-center">{data?.title}</h1>
        <p  className="text-primary fs-italic" dangerouslySetInnerHTML={{
         __html: data?.description
        }} ></p>
        <img src={`https://aderonkeadedunye.pythonanywhere.com/${data?.image}`} alt={data?.title} />
        <img src={`https://aderonkeadedunye.pythonanywhere.com/${data?.other}`} alt={data?.title} />
       
    </div>
  )
}
export default Details