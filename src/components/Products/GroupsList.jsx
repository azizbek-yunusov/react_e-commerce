import React from 'react'
import { groupData } from '../../dataBase/productData'
import ProductsList from './ProductsList'

const GroupsList = () => {
  return (
    <div className=''>
      {
        groupData.map(groupel => (
          <ProductsList {...groupel} key={groupel.id}/>
        ))
      }
    </div>
  )
}

export default GroupsList