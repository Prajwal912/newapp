import React, {  } from 'react'
import spinner from './Hourglass.gif'


const Spinner = () => {

    return (
      <div className='d-flex my-3 align-items-center justify-content-center'>
        <img src={spinner} alt="loading" />
      </div>
    )
  
}

export default Spinner
