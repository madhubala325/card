import React from 'react';
import './Card.css'
function Card({data}) {
console.log(data);
  return (
    <div>
       <div className="card">
<img src={data.image} alt="" />
<div className="title">{data.title}</div>
<div className="desc">{data.description} </div>
<input type="button" value={data.btn}  className='btn'/>
      </div>
    </div>
  );
}

export default Card;
