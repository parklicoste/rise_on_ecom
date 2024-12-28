export const Contact = () => {
  return (
    <>
      <div className="">
        <div className="bg-white pt-20 w"></div>
        <div className="bg-blue-600 flex flex-col-reverse lg:flex-row items-center justify-around gap-8 p-6">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              className="w-full max-w-lg lg:w-[40rem] rounded-lg"
              src="https://images.pexels.com/photos/8111879/pexels-photo-8111879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Stay Connected"
            />
          </div>
          {/* Text and Button Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 w-full lg:w-1/2">
            <h1 className="text-2xl md:text-3xl font-semibold text-white">
              Stay Connected With <br /> Cutting Edge IT
            </h1>
            <button className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition duration-200">
              Get A Quote →
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
