import React from "react";

const About = () => {
  return (
    <div className="flex flex-col bg-white py-10 px-4 md:px-10">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            className="w-full md:w-[40rem] rounded-lg object-cover"
            src="https://images.pexels.com/photos/8145352/pexels-photo-8145352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="About Us"
          />
        </div>

        {/* Text Content Section */}
        <div className="flex flex-col w-full md:w-1/2">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-blue-600 font-bold text-center md:text-left">
              About Us
            </h1>
            <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-700 text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              unde, eaque incidunt hic ullam nisi quos blanditiis libero
              perferendis ducimus! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Nemo unde, eaque incidunt hic ullam nisi quos
              blanditiis libero perferendis ducimus!
            </p>
          </div>

          {/* Highlights Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-10">
            {/* Card 1 */}
            <div className="flex flex-row items-center gap-4 w-full">
              <div className="flex justify-center items-center w-16 h-16 bg-blue-500 text-white rounded-full">
                LOGO
              </div>
              <div>
                <h2 className="text-lg font-semibold">Problem Solving</h2>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis ratione quaerat provident est excepturi deserunt
                  pariatur dignissimos recusandae voluptas.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-row items-center gap-4 w-full">
              <div className="flex justify-center items-center w-16 h-16 bg-blue-500 text-white rounded-full">
                LOGO
              </div>
              <div>
                <h2 className="text-lg font-semibold">Mission & Vision</h2>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis ratione quaerat provident est excepturi deserunt
                  pariatur dignissimos recusandae voluptas.
                </p>
              </div>
            </div>
          </div>

          {/* Button Section */}
          <div className="mt-8 flex justify-center md:justify-start">
            <button className="bg-blue-500 text-white px-6 py-2 text-sm sm:text-base rounded-md hover:bg-blue-600 transition-all">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
