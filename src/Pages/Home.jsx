import React from 'react'


function Home() {
  return (
    <div>
        <header id="header" className="header d-flex align-items-center fixed-top">
      <div
        className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between"
      >
        <a
          href="index.htmll"
          className="logo d-flex align-items-center me-auto me-xl-0"
        >
          {/**  Uncomment the line below if you also wish to use an image logo*/} 
          {/** <img src="assets/img/logo.png" alt=""> */} 
          <h1 className="sitename">CALVENT</h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="#hero" className="active">Home</a></li>
            <li><a href="/about">About</a></li>
            <li className="dropdown">
              <a href="#"
                ><span>Service</span>
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li><a href="/service">Shared CFO</a></li>
                <li><a href="/consulting">Consulting </a></li>
              </ul>
            </li>            
            <li><a href="/blog">Blog</a></li>  
            <li><a href="/contact">Contact</a></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a className="btn-getstarted" href="index.html">Get Started</a>
      </div>
    </header>
    </div>
  )
}

export default Home