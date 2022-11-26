import React from 'react'
import axios from 'axios';



const AxsiosStu =  () =>{
    const MYSERVER = "http://127.0.0.1:5000";
    const information = axios.get(`${MYSERVER}/Book/`).then((res => console.table(res.data)))
    return(
        <h1>test</h1>
    )

    }
export default AxsiosStu