"use client";

import { useState } from "react";

const FaqData = [
  {
    header: "How Long Should A Business Plan Be?",
    body: "Show data",
  },
  {
    header: "What is Included In Your Service?",
    body: "Show data",
  },
  {
    header: "What Type of Company Is Measured?",
    body: "Show data",
  },
];

function Faq() {
  const [showIndex, setShowIndex] = useState<number | null>(null);

  const toggleShow = (index: number) => {
    setShowIndex(showIndex === index ? null : index);
  };

  function Card({
    header,
    body,
    isVisible,
    toggleShow,
  }: {
    header: string;
    body: string;
    isVisible: boolean;
    toggleShow: () => void;
  }) {
    return (
      <div className="border-b border-gray-300 py-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">{header}</h3>
          <button
            onClick={toggleShow}
            className="text-blue-500 hover:underline"
          >
            {isVisible ? "Hide" : "Show"}
          </button>
        </div>
        {isVisible && <p className="mt-2 text-gray-600">{body}</p>}
      </div>
    );
  }

  return (
    <div className="h-full bg-white ">
      <div className="relative flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="bg-blue-600 lg:w-1/2 flex p-6 lg:p-10 flex-col items-center justify-center clip-slant">
          <img
            className="w-full lg:w-[20rem] rounded-md"
            src="https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Business"
          />
        </div>

        {/* Right Section with Slant */}
        <div className="bg-white lg:w-1/2 p-6 lg:p-10 ">
          <span className="text-blue-400 text-lg">OUR FAQ&apos;s</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-6">
            Keep Your Business Safe & <br className="hidden sm:block" /> Ensure
            High Availability
          </h1>
          <div className="flex flex-col">
            {FaqData.map((ele, index) => (
              <Card
                key={index}
                header={ele.header}
                body={ele.body}
                isVisible={showIndex === index}
                toggleShow={() => toggleShow(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
