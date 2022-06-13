import React from 'react'
import { groupData } from '../../dataBase/productData'
import ProductsList from './ProductsList'

const GroupsList = () => {
  return (
    <div className='py-2 lg:my-5 my-0'>
      {
        groupData.map(groupel => (
          <ProductsList {...groupel} key={groupel.id}/>
        ))
      }
    </div>
  )
}

export default GroupsList