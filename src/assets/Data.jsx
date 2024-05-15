import React from 'react';
import Card from './Card';

function Data() {
let obj1={
image:"https://i0.wp.com/picjumbo.com/wp-content/uploads/magical-spring-forest-scenery-during-morning-breeze-free-photo.jpg?w=600&quality=80",
title:"Nature Image",
description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
btn:"Submit"
}
let obj2={
image:"https://wallpapers.com/images/featured/flower-pictures-unpxbv1q9kxyqr1d.jpg",
title:"Flower Image",
description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
btn:"Click"
}

let obj3={
 image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpt48-KIcGtYm_hulmgmpA_hCoCVU9J0ZmsNsQgHmhdQ&s",
 title:"Car Image",
 description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
 btn:"ReadMore"
 }
  return (
    <div className='contain'>
      <Card data={obj1}/>
      <Card data={obj2}/>
      <Card data={obj3}/>
    </div>
  );
}

export default Data;
