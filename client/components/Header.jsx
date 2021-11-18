import React from 'react'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <>
      <nav className='nav'>
        <Link to='/'>Shop</Link>
        <Link to='/cart'>Cart</Link>
        <Link to='/orders'>My Orders</Link>
        {/* <Link to='/admin'>Admin</Link> */}
      </nav>
      <h1 className='header-h1'>
        <span className='far fa-surprise' aria-hidden='true' />
        {' '}Count-UP{' '}
        <span className='far fa-surprise' aria-hidden='true' />
      </h1>
    </>
  )
}

export default Header
