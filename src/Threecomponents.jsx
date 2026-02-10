import React from 'react'

function Threecomponents(props) {
  return (
    <div className='card'>
       <h3><img src={props.img} alt="" width={20} height={20} /> {props.name}</h3>     
    </div>
  )
}

export default Threecomponents
