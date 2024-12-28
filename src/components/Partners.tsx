const data = [
    {
      img: "",
      number: "6,561 +",
      para: "Satisfied Clients",
    },
    {
      img: "",
      number: "600 +",
      para: "Finished Projects",
    },
    {
      img: "",
      number: "250 +",
      para: "Skilled Experts",
    },
    {
      img: "",
      number: "1,001 +",
      para: "Media Posts",
    },
  ];
  
  const serviceData = [
    {
      img: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      header: "Security",
      info: "Network Security",
    },
    {
      img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      header: "Solution",
      info: "Web Development",
    },
    {
      img: "https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      header: "Management",
      info: "IT Management",
    },
    {
      img: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      header: "Technology",
      info: "Platform Integration",
    },
  ];
  
  const Card = ({ img, number, para }: { img: string; number: string; para: string }) => {
    return (
      <div className="flex flex-col items-center gap-3 ">
        <img src={img} alt="partner" />
        <h2 className="text-white text-2xl">{number}</h2>
        <p className="text-white">{para}</p>
      </div>
    );
  };
  
  function ServiceCard({ img, header, info }: { img: string; header: string; info: string }) {
    return (
      <div className="flex-1">
        <div className="relative w-full">
          <img className="w-full h-64 sm:h-80 lg:h-96 object-cover" src={img} alt="serviceimage" />
          <div className="absolute bg-white flex flex-col bottom-6 left-6 p-5 md:px-10 lg:px-16">
            <span className="text-blue-600 text-lg lg:text-xl">{header}</span>
            <span className="text-black text-sm lg:text-base">{info}</span>
          </div>
        </div>
      </div>
    );
  }
  
  const Partners = () => {
    return (
      <div className="bg-[#2857ce]">
        <div className="p-6 md:p-10">
          <span className="text-white text-lg">ACHIEVEMENT</span>
          <h1 className="lg:text-5xl text-2xl  font-bold text-white mt-5">
            We Are Increasing <br /> Business Success
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 py-10">
            {data.map((ele, index) => (
              <Card key={index} img={ele.img} number={ele.number} para={ele.para} />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 bg-white p-6 md:p-10">
          {serviceData.map((ele, index) => (
            <ServiceCard key={index} img={ele.img} header={ele.header} info={ele.info} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Partners;
  