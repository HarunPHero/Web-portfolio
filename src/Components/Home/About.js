import React from 'react';
import './About.css'

const About = () => {
    return (
       <section className='about' id='about'>
        <div className="hero min-h-screen bg-base-100">
  <div className="hero-content flex-col lg:flex-row">
    <img data-aos="fade-up"
     data-aos-duration="1000" src={require("../../Images/about.png")} className=" sm:w-42 lg:max-w-sm" />
    <div className='about-banner px-6 text-white'>
      <h1 data-aos="fade-up"
     data-aos-duration="2000" className="text-5xl font-bold font-mono">About me</h1>
      <p data-aos="fade-up"
     data-aos-duration="3000" className="py-6 font-text first-letter:text-4xl first-letter:text-slate-900
  first-letter:mr-1 ">My name Md. Zubaer Al Mamun. I am a student of class 8. I live in Dinajpur and read in Dinajpur Zilla School. My father's name is Md. Harunur Rashid and my mother's name is Most. Jahanara Khatun. I started my coding career from November 2020 and I have already learned how to make a beautiful website. I haven't worked in any marketplace or any company yet. I just make website templates and it is my favourite hobby.</p>
      
    </div>
  </div>
</div>

       </section>
    );
};

export default About;