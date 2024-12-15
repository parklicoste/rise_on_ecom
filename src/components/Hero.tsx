const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#2857ce] text-white text-center py-16 flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-8">
        {/* Text Content */}
        <div className="px-6 lg:px-12 w-full lg:w-1/2">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4 text-left">
            Simplifying
          </h2>
          <p className="text-3xl lg:text-6xl font-light mb-6 text-left">
            commerce & Scaling <br /> beyond limits
          </p>
          <div className="flex items-start gap-4 mb-6">
            <span className="w-2 h-10 border-l border-white"></span>
            <p className="text-base lg:text-lg text-left">
              To enable every seller to seamlessly transition and excel in the
              online marketplace, with scalable solutions that cater to their
              personalized e-commerce needs.
            </p>
          </div>
          <button className="bg-white text-blue-800 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition duration-200">
            Explore Now
          </button>
        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            className="w-full max-w-lg rounded-lg shadow-lg"
            src="https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Hero"
          />
        </div>
      </section>

      {/* Footer Links Section */}
      <div className="bg-blue-950 py-4 px-6 lg:px-12">
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-4 text-lg text-white">
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
