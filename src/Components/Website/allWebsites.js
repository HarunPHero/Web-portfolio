import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllWebsites = () => {
  const [websites, setWebsites] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/websites/`)
      .then((res) => res.json())
      .then((data) => {
        setWebsites(data);
      });
  }, []);
  return (
    <section className="lg:m-10 mb-5 mt-14 mb-10 lg:grid grid-cols-2 gap-4 md:grid grid-cols-2 gap-4">
      {websites?.map((w) => (
        <div className="">
        
        <div className="mt-5 flex ... bg-base-200 max-w-sm p-2 rounded ...">
                  <img className="w-28 mr-5" src={w?.img} alt="" />
                  <div>
                    <h1 className="font-mono">{w?.name}</h1>
                    <Link className="btn btn-secondary text-3xl font-bold" to={w._id}>→</Link> 
                  </div>
                </div>
          
        </div>
      ))}
    </section>
  );
};

export default AllWebsites;
