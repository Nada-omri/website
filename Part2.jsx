import React from 'react'
import'./part2.css'
import im1 from './p1.png' 
import im2 from './p2.png'
export function Part2() {
  return (
    <div className='part2'>
        <div className='div1'>
            <div className='im1'> <img src={im2}/></div>
            <div className='p1'> 
            <div> <h1>How can Product Owners quickly adapt to new domain expertise? </h1>
Spoiler: At Pixelmatters, the Product Owners aren't machines that know everything about all the topics - and should any Product Owner be?</div></div>
        </div>
        <div className='div2'>
          
            <div className='im2'> <img src ={im1}/></div>
            <div className='p2'> <div> <h1>Pixelmatters is recognized as a top Portuguese tech company by TechBehemoths </h1>
TechBehemoths, the most advanced platform that matches projects with IT Companies, has announced their top tech companies in Portugal for 2022 — and we're proud to see that Pixelmatters has been distinguished as a leading</div></div>
        </div>
    </div>
  )
}