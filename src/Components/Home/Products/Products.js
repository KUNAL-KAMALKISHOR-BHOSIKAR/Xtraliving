import React from 'react'
import Pro from './Pro'
import Protwo from './Protwo'
import line from "./line.png"
function Products() {
  return (
    <div  style={{backgroundImage: `url(${line})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    }}>
    <Pro/>
    <Protwo/>
    </div>
  )
}

export default Products
