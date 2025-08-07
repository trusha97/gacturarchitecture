import React from 'react'
import './FourZeroFour.css'
import { errorimg } from '../../utils/images'


const FourZeroFour = () => {
  return (
    <div className='error-main-div'>
      <div className='error-inner-div'>
        <div className='error'>
          <img src={errorimg} alt="error img" className="error-img" />
        </div>
        <div className='error-text-main'>
          <div className='error-oops'>
            <h2 className='error-follw'>Oops it seems you follow backlink</h2>
            <p className='error-desc'>
              The page you are looking for was moved, removed, renamed or never existed.
            </p>
          </div>
          <div className='error-btn'>
            <a href='/' className='error-backpage'>Back To Home Page</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FourZeroFour
