import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <nav data-aos="fade-down">
        <div className="logo">
            <img src="../src/images/logo-1.jpeg" alt="" />
        </div>
        <ul>
          <li><a href="#">خانه</a></li>
            <li><a href="#">درباره ما</a></li>
            <li><a href="#">ارتباط با ما</a></li>
            <li><a href="#">تبلیغات</a></li>
            <li><a href="#">وبلاگ</a></li>
            <li><a href="#">خدمات</a></li>
        </ul>
        <div className="box-login">
            <button className='btn-login'>ورود</button>
            <button className='btn-signin'>ثبت نام</button>
        </div>
    </nav>
  )
}

export default Navbar;