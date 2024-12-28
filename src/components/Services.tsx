import React from "react";

const data = [
  {
    img: "",
    header: "Cyber Security",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, porro?",
    link: "http://example.com/1234",
  },
  {
    img: "",
    header: "App Development",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, porro?",
    link: "http://example.com/1234",
  },
  {
    img: "",
    header: "Database Security",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, porro?",
    link: "http://example.com/1234",
  },
  {
    img: "",
    header: "IT Consultancy",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, porro?",
    link: "http://example.com/1234",
  },
];

const Card = ({
  img,
  header,
  para,
  link,
}: {
  img: string;
  header: string;
  para: string;
  link: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-start bg-slate-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 md:p-10">
      {img && <img src={img} alt="service-icon" className="h-16 w-16 mb-4" />}
      <h2 className="text-xl font-semibold text-center text-gray-800 md:text-2xl">{header}</h2>
      <p className="text-sm text-center text-gray-600 md:text-base mt-2">{para}</p>
      <a
        href={link}
        className="text-blue-600 underline mt-4 text-sm md:text-base hover:text-blue-800"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read More
      </a>
    </div>
  );
};

const Services = () => {
  return (
    <div className="bg-white px-6 py-16 md:px-16 lg:px-24 lg:py-36">
      <h1 className="text-3xl text-blue-600 font-bold mb-10 text-center md:text-4xl lg:text-5xl">
        What Sets Us Apart
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((ele, index) => (
          <Card
            key={index}
            img={ele.img}
            header={ele.header}
            para={ele.para}
            link={ele.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
