import React, { useState } from 'react'

const PocketCalculator = () => {
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [operator, setOperator] = useState('-')
  const [res, setRes] = useState(number1 + number2)
  const Total = () =>{
    if (operator === '+'){
      setRes (Number(number1)+Number(number2))
    }if (operator === '-'){
      setRes (Number(number1)-Number(number2))
    }if (operator === '*'){
      setRes (Number(number1)*Number(number2))
    }if (operator === '/'){
      setRes (Number(number1)/Number(number2))
    }
  }

  return (
    <div>
      <h1>Welcome </h1>
      <input placeholder='0' value={number1} onChange={e=>setNumber1(e.target.value)}></input>
      <input value={operator} onChange={e=>setOperator(e.target.value)}></input>
      <input placeholder='0' value={number2} onChange={e=>setNumber2(e.target.value)}></input><br/>
      <button onClick={()=>Total()}>Res</button>
      <h2>{res}</h2>
    </div>

  )
}
  
export default PocketCalculator