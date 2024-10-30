import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Header.css';

function Header() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="contaner-header">
            <div className="part-right" data-aos="fade-left">
                <h1>مرجع تخصصی آموزش برنامه نویسی!</h1><br />
                <p>به آی‌تی مبنا خوش آمدید؛ بستری برای یادگیری برنامه‌نویسی و ورود به دنیای فناوری. آی‌تی مبنا با هدف ایجاد یک منبع جامع و قابل اعتماد برای آموزش برنامه‌نویسی، توسعه وب، طراحی اپلیکیشن‌های موبایل، و دیگر مهارت‌های موردنیاز در دنیای فناوری تأسیس شده است.
در آی‌تی مبنا، باور ما این است که یادگیری برنامه‌نویسی نباید پیچیده و سخت باشد. ما با ارائه دوره‌های گام‌به‌گام، محتوای آموزشی کاربردی، و مثال‌های عملی، فرآیند یادگیری را ساده‌تر کرده و به شما کمک می‌کنیم تا مفاهیم پیچیده را به‌سادگی درک کنید.</p>
                <button class="btn-letsgo">بزن بریم!</button>
            </div>

            <div className="part-left" data-aos="fade-right">
                <img src="../src/images/header-2.webp" alt="" />
            </div>
        </div>
    );
}

export default Header;
