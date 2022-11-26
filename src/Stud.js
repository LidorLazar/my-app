import React from 'react'
import './test.css'



const studant = [{
  "Name":"lidor",
  "Age": 25,
  "City": "Yavne"
},{"Name":"omer",
"Age": 25,
"City": "Yavne"
}]



const Stud = () => {
  const msg = () =>{
    alert('Empy Massage')
  }
  return (
    <div>
      {studant.map((item,i)=><div class="card">
      <div class="container">
      <img src={`https://picsum.photos/id/100/200/300`} alt="Logo" />
      <h2><b>{item.Name}</b></h2>
    <p>Architect & Engineer</p>
    <button class='button' onClick={()=>msg()}>Info</button>
      </div>
      </div>)}
    </div>
  )

}

export default Stud;