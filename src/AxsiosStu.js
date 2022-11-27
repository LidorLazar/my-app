import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './test.css'



const AxsiosStu = () =>{
    const [item, setItem] = useState([])
    const MYSERVER = "http://127.0.0.1:5000/Book/" ;
    useEffect(() => {(axios.get(MYSERVER).then((res) => (setItem(res.data))))},[])
  
     return(
        <div>
        {item.map((test,i) =>  <div key={i}   class="card">
        <div class="container">
        <img src={`https://picsum.photos/id/100/200/300`} alt="Logo" />
        <h2><b>{test.NameBook}</b></h2>
      <p>{test.Author}</p>
      <p>{test.YearPublished}</p>
        </div>
        </div>)}
      </div>
    )

    }
export default AxsiosStu