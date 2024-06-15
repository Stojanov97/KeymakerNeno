import React from 'react'
import './styles.css'

const DeleteNews = () => {
  return (
    <div className='pop-up'>
      <div>
        <h1>Are you sure you want to delete this news?</h1>
        <button className='delete-btn'>Delete</button>
        <button className='cancel-btn'>Cancel</button>
      </div>
    </div>
  )
}

export default DeleteNews