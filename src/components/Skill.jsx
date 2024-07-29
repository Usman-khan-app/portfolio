import React from 'react'

export default function Skill() {
    let skil = ["node.js","html","css","bootstrap","react","gsap" ]
  return (
    <div className='skill' id='skill1'>
        <h1>Skill</h1>
        <div className="skillBox">
            {
                skil.map(x=>
<>
<div className="box">
                <h1>{x}</h1>
            </div>
</>
                )
            }
           
            


        </div>
    </div>
  )
}
