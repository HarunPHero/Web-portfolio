import React from 'react';
import "./Banner.css";

const Banner = () => {
    return (
        <div>
           <div className="background hero ">
           <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
    {/* <img src={require("../../Images/my.png")} className="max-w-sm rounded-lg shadow-2xl" /> */}
    <div className='text-center space-y-10'>
      <h1 className="text-3xl font-bold text-white hithere">Hi there👋</h1>
      <h1 className="text-6xl font-bold text-white">I'm <span className='name'> Md. Zubaer Al Mamun</span></h1>
      <h1 className='text-2xl font-text text-white welcome'>I'm a student and baby front-end web-developer</h1>
    </div>
  </div>
</div>
</div>
        </div>
    );
};

export default Banner;