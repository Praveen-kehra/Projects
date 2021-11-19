import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
import netflix_logo from '../netflix_logo.png'
import netflix_avatar from '../netflix_avatar.png'
// import netflix_avatar from '../netflix_avatar.png.'

const Navbar = (props) => {
  const navigate = useNavigate();
  // console.log(props.history);
  const [show, setShow] = useState(false);
  const transitionNavbar = () => {
    if(window.scrollY > 100) {
      setShow(true)
    } else {
      setShow(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
  }, [])
  return (
    <div className={`navbar ${show && 'nav-black'}`}>
      <div className=".nav-conatiner">
        <img
          onClick={()=>{navigate('/')}}
          className="nav-logo"
          // src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
          src={netflix_logo}
          alt='netflix-logo'
        > </img>
        <img
          onClick={()=>{navigate('/profile')}}
          className="nav-avatar"
          // src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
          src={netflix_avatar}
          alt='nav-avatar'
        ></img>
      </div>
    </div>
  )
}

export default Navbar
