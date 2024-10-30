import React from 'react';
import './ProgrammingLanguage.css';

function ProgrammingLanguage() {
    return (
        <div className="programming-container">
            <h2>زبان‌های مختلف برنامه‌نویسی</h2>
            <div className="card-container" data-aos="fade-down">
                <div className="card" style={{ backgroundColor: '#ff6a00' }}>
                    <div className="icon">c++</div>
                    <h3>سی پلاس پلاس</h3>
                    <p>آموزش برنامه نویسی سی پلاس پلاس</p>
                    <button style={{ backgroundColor: '#ff6a00' }}>C++</button>
                </div>
                <div className="card" style={{ backgroundColor: '#a644f4' }}>
                    <div className="icon">css</div>
                    <h3>سی اس اس</h3>
                    <p>آموزش برنامه نویسی  سی اس اس</p>
                    <button style={{ backgroundColor: '#a644f4' }}>CSS3</button>
                </div>
                <div className="card" style={{ backgroundColor: '#5d73c9' }}>
                    <div className="icon">html</div>
                    <h3>اچ تی ام ال</h3>
                    <p>آموزش برنامه‌نویسی  اچ تی ام ال</p>
                    <button style={{ backgroundColor: '#5d73c9' }}>HTML5</button>
                </div>
                <div className="card" style={{ backgroundColor: '#00b894' }}>
                    <div className="icon">JS</div>
                    <h3>جاوا اسکریپت</h3>
                    <p>آموزش برنامه نویسی جاوا اسکریپت</p>
                    <button style={{ backgroundColor: '#00b894' }}>JS</button>
                </div>
                <div className="card" style={{ backgroundColor: '#ff4d4d' }}>
                    <div className="icon">Python</div>
                    <h3>پایتون</h3>
                    <p>آموزش برنامه نویسی پایتون</p>
                    <button style={{ backgroundColor: '#ff4d4d' }}>Python</button>
                </div>
                <div className="card" style={{ backgroundColor: '#009688' }}>
                    <div className="icon">PHP</div>
                    <h3>پی اچ پی</h3>
                    <p>آموزش برنامه نویسی پی اچ پی</p>
                    <button style={{ backgroundColor: '#009688' }}>PHP</button>
                </div>
                <div className="card" style={{ backgroundColor: '#3f51b5' }}>
                    <div className="icon">Java</div>
                    <h3>جاوا</h3>
                    <p>آموزش برنامه نویسی جاوا</p>
                    <button style={{ backgroundColor: '#3f51b5' }}>Java</button>
                </div>
            </div><br /><br />
            <button className='more-btn'>زبان های بیشتر</button>
        </div>
    );
}

export default ProgrammingLanguage;
