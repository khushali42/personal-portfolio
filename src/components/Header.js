import React from 'react'
import Logo from '../assets/logo.jpg'

export const Header = () => {
  return (
    <header className='py-8 leading-tight'>
      <div className='container mx-auto'> 
        <div className='flex justify-between items-center'>
          <div>
            <img src={Logo} alt='' className='w-[100px] h-[50px]'/>
          </div>
          <div className="h1 text-gradient">My Portfolio</div>
          <div className='div'>Frontend Architect</div>
        </div>
      </div>
    </header>
  )
}
