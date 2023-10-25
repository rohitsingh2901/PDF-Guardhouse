import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1000px)');

    const handleResize = (mq) => {
      setIsMobile(mq.matches);
    };

    handleResize(mediaQuery);

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  const tagClasses = isMobile ? `nav-link text-light font-weight-bolder data-toggle="collapse" data-target="#navbarNav"` : `nav-link text-light font-weight-bolder`; 

  return (
    <>
      <nav class="navbar navbar-expand-lg anim" id="navbar">
      <Link class="navbar-brand" to="/">
        <div class="enlarge-image">
          <img src="https://cdn-icons-png.flaticon.com/512/9627/9627021.png?ga=GA1.1.877150888.1686539129" alt="logo" />
        </div>
      </Link>
      <button
        id='navToggleBtn'
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"      
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fa-solid fa-sliders"></i>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" >
            <Link
              class={tagClasses}
              onclick="myFunction(this)"
              to="/"
              >Home</Link
              
            >
          </li>
          <li class="nav-item" >
            <Link
              to="/dashboard"
              class={tagClasses}
              onclick="myFunction(this)"
              >Dashboard</Link
            >
          </li>
          <li class="nav-item" >
            <Link to="/pdflist"
              class={tagClasses}
              onclick="myFunction(this)"
              >PDF List</Link
            >
          </li>
        
          
          <li id='navBtnLi'>
            <Link to="/login"><button className='btn navbtn mx-2'>Login</button></Link>
            <Link to="/register"><button className='btn  navbtn'>Register</button></Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar