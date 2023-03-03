import React from 'react'
import profile from '../images/profile.webp';


const Header = () => {
  return (
    <div className='header-profile'>
      <img src={profile} alt='profile-logo' width='317px' height='200px'/>
    </div>
  )
}

export default Header
