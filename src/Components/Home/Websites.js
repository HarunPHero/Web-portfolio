import React from "react";
import "./Websites.css";

const Websites = () => {
  return (
    <section className="websites m-10 ">
      <h1 className="websiteText text-5xl font-bold mb-10">My websites</h1>
      <figure
       data-aos="fade-down"
            data-aos-duration="3000" class="shadow-xl lg:w-2/3 md:flex bg-red-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 mb-10">
        <img
          class="w-42 md:w-48 md:h-auto"
          src={require("../../Images/Website images/Screenshot 2023-01-15 at 22-38-27 Panda Commerce.png")}
          alt=""
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <h1 className="text-3xl font-bold text-red-400">Panda commerce</h1>
            <p class="font-bold">
              It is a website for electronic gadgets. It is made with HTML5,
              CSS3, and Bootstrap(CSS framework). It was effortless to make. I
              learned bootstrap first and quickly built it. But its design is
              very lovely.
              <a
                className="text-blue-400"
                href="./website/63f1043a489d0289a7c3719a"
              >
                {" "}
                See more details
              </a>
            </p>
          </blockquote>
        </div>
      </figure>
      <figure
      data-aos="fade-down"
           data-aos-duration="3000" class="shadow-xl lg:w-2/3 md:flex bg-yellow-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 lg:float-right mb-10">
        <img
          class="w-42 md:w-48 md:h-auto"
          src={require("../../Images/Website images/Screenshot 2023-01-15 at 22-46-28 Red onion Restaurant.png")}
          alt=""
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <h1 className="text-3xl font-bold text-orange-400">
              Red Onion Restaurant
            </h1>
            <p class="font-bold">
              It is a website of a restaurant. It is made with React router and
              It has also a back-end which is NoSQL (MongoDB). I tried my best
              to make this website and its cart, login, order page, etc. made
              with my own design.
              <a
                className="text-blue-400"
                href="./website/63f1043a489d0289a7c371a6"
              >
                {" "}
                See more details
              </a>
            </p>
          </blockquote>
        </div>
      </figure>
      <figure
      data-aos="fade-down"
           data-aos-duration="3000" class="shadow-xl lg:w-2/3 md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          class="w-42 md:w-48 md:h-auto"
          src={require("../../Images/Website images/Screenshot 2023-01-15 at 22-45-44 Doctors-portal.png")}
          alt=""
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <h1 className="text-3xl font-bold text-gray-400">Doctors Portal</h1>
            <p class="font-bold">
              It is a website of a restaurant. It is made with React router and
              It has also a back-end which is NoSQL (MongoDB). I tried my best
              to make this website and its cart, login, order page, etc. made
              with my own design.
              <a
                className="text-blue-400"
                href="./website/63f1043a489d0289a7c371a5"
              >
                {" "}
                See more details
              </a>
            </p>
          </blockquote>
        </div>
      </figure>
      <div className="mt-5">
        <a
          style={{
            textAlign: "center",
            display: "block",
            margin: "0 auto",
          }}
          className="btn btn-secondary text-2xl font-bold text-white"
          href="/website"
        >
          See More websites
        </a>
      </div>
    </section>
  );
};

export default Websites;
