import React, { useEffect, useState } from 'react'
import axios from 'axios';



const AxsiosStu = () =>{
    const [item, setItem] = useState([])
    const MYSERVER = "http://127.0.0.1:5000/Book/" ;
    useEffect(() => {(axios.get(MYSERVER).then((res) => (setItem(res.data))))},[])
  
     return(
    <div> {item.map((test,i) =>  <div key={i} >  {test.NameBook} {test.Author} {test.YearPublished}</div> )} </div>
    )

    }
export default AxsiosStu