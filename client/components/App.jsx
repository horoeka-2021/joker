import React from 'react'

import Header from './Header'
import BeerList from './BeerList'
import Cart from './Cart'
import { useSelector } from 'react-redux'

function App () {
  const activePage = useSelector((state) => state.activePage)

  return (
    <div className='app'>
      <Header />
      {
        activePage === 'home'
          ? <BeerList />
          : <Cart/>
      }
    </div>
  )
}

export default App
