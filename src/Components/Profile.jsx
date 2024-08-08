import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Profile() {
  const count =useSelector(state =>state.count)
  return (
    <div className='text-white'>Count is :{count}</div>
  )
}

export default Profile