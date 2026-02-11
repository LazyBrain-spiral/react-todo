import React from 'react';

function Threecomponents(props) {
  return (
    <div
      className="card"
      style={{ backgroundColor: props.color }}
    >
      <h3 style={{ display: "flex", alignItems: "center" }}>
        <img src={props.img} alt="" width={20} height={20} style={{marginRight:7}} />
        {props.name}
      </h3>
      <h3 className='propscount'>{props.count}</h3>
    </div>
  );
}

export default Threecomponents;
