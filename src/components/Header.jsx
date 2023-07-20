import React from 'react'

export default function Header() {
  return (
    <div className='mx-auto max-w-[1240px] text-black flex justify-between items-center p-10 text-[20px]'>
        <div className=''>
            <h1>Abrar Fahim</h1>
        </div>
        <div className=''>
            <ul className='flex gap-10'>
                <li className=''>Home</li>
                <li className=''>About</li>
                <li className=''>Skills</li>
                <li className=''>Services</li>
                <li className=''>Projects</li>
                <li className=''>Contact</li>
            </ul>
        </div>
    </div>
  )
}
