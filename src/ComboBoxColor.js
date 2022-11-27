import React, { useState } from 'react'

export const ComboBoxColor = () => {
const [color, setColor] = useState('red')
  return (
    <div style={{backgroundColor: color,position: 'absolute', top: '0', right: '0', bottom: '0', left: '0'}} >
    <input type={'color'} onChange={(event) => setColor(event.target.value) }/></div>
  )
}
