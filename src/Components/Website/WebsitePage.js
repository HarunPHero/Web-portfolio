import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const WebsitePage = () => {
    const [website, setWebsite] = useState([])
    const id = useParams().id;
    useEffect(()=>{
        fetch(`http://localhost:5000/websites/${id}`)
        .then(res => res.json())
        .then(data => setWebsite(data))
    },[])
    return (
        <section className="lg:m-25 ml-5 mt-14 mb-10">
      <div>

        <h1 className="lg:text-5xl text-3xl font-bold text-blue-200">{website?.name}</h1>
        <img className="my-5 w-10/12" src={website?.img} alt="" />
      </div>
      <div className="Details space-y-5">
        <h1 className="text-4xl mt-1.5 font-bold">Details</h1>

        <h1 className="text-1xl">Website Link: <a className='text-blue-400' href={website?.Details?.Link}>{website?.Details?.Link}</a> </h1>
        <h1 className="text-1xl">Languages: {(website?.Details?.language)?.join(' ') }</h1>
        <h1 className="text-1xl">Library: {website?.Details?.library} </h1>
        <h1 className="text-1xl">Back-end: {website?.Details && website.Details.hasOwnProperty('Back-end') ? website.Details['Back-end'] : 'none'}</h1>

        <h1 className="text-1xl">Mobile resposive: {website?.Details?.responsive} </h1>
        <h1 className="text-1xl">Css Framework: {website?.Details?.framework}</h1>
        <h1 className="text-1xl">Created date: {website?.Details?.date}</h1>
    

      </div>
    </section>
    );
};

export default WebsitePage;