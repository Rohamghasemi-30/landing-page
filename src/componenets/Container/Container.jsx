import React from 'react'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header';
import BuyCourse from '../BuyCourse/BuyCourse';
import ProgrammingLanguage from '../Programming-language/ProgrammingLanguage';
import Footer from '../footer/footer';


function Container() {
  return (
    <div>
        <Navbar />
        <Header /><br /><br /><br /><br />
        <ProgrammingLanguage />
        <BuyCourse />
        <Footer />
    </div>
  )
}

export default Container;