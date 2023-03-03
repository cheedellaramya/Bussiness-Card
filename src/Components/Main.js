import React from 'react'

const Main = () => {
  return (
    <div className='main-container'>
      <h3 className='main-heading-content'>Ramya Krishna</h3>
      <h4 className='main-one-content'>Frontend Developer</h4>
      <span className='main-two-content'> Website Link Channel</span>
      <div className='buttons'>
        <button className='main-btn-email'>
            <i className="fa-regular fa-envelope"></i>
                Email
        </button>
        <button className='main-btn-linkedin'>
            <i className="fa-brands fa-linkedin linkedin"></i>
                Linkedin
        </button>
      </div>
      <div className='main-about-interest'>
        <h3>About</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi non 
            quis exercitationem culpa nesciunt nihilaut nostrum 
             explicabo reprehenderit </p>
        <h3>Interest</h3>
        <p>Consequatur rerum amet fuga expedita sunt et tempora saepe? 
            Iusto nihil explicabo perferendis quos provident delectus ducimus
             necessitatibus reiciendis optio tempora 
        </p>
      </div>
      
    </div>
  )
}

export default Main
