import Link from 'next/link'
import React from 'react'


const Header = () => {
  return (
    <>
    <div className='Header'>
    <Link href={'/'}>Home</Link>
    <Link href={'About'}>About</Link>
    <Link href={'contact'}>Contact</Link>
    </div>
    </>
  )
}

export default Header