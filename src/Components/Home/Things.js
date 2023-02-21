import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Things = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch(`https://portfolio-backend-qwot.onrender.com/skills`)
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  return (
    <section className="things">
      <h1
        style={{
          textAlign: "center",
          background:
            "linear-gradient(60deg, rgb(48, 102, 202),rgb(141, 190, 255))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        className="text-5xl font-bold mb-10"
      >
        Tools and Languages
      </h1>
      <div data-aos="fade-up"
      data-aos-duration="3000" className="lg:grid grid-cols-2 gap-3 md:grid grid-cols-2 gap-3  m-5">
        {skills?.map((s) => (
          <div className="mt-5 flex ... bg-blue-100 max-w-sm p-2 rounded ...">
            <img className="w-16 mr-5" src={s?.img} alt="" />
            <h1 className="font-mono inline-block align-middle ... text-3xl">
              {s?.name}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Things;
