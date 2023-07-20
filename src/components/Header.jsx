import React from 'react'

export default function Header() {
  return (
    <div className='mx-auto max-w-[1240px] text-black flex justify-between items-center p-10 text-[20px]'>
        <div className=''>
            <h1>Abrar Fahim</h1>
        </div>
        <div className=''>
            <ul className='flex gap-10'>
                <li className=''><i class="uil uil-estate"></i> Home</li>
                <li className=''><i class="uil uil-user"></i> About</li>
                <li className=''><i class="uil uil-suitcase"></i> Skills</li>
                <li className=''><i class="uil uil-file-alt"></i> Services</li>
                <li className=''><i class="uil uil-scenery"></i> Projects</li>
                <li className=''><i class="uil uil-envelope-check"></i> Contact</li>
            </ul>
        </div>
    </div>
  )
}
