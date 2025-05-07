import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="relative h-[400px] md:h-[580px] text-black p-8 bg-[url('https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center">
        <h2 className="text-3xl font-bold">Wave Shape Banner</h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit...
        </p>

        {/* Wave Shape Divider Inside Banner */}
        <div className="absolute bottom-0 left-0 w-full -mt-8 z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 250"
            className="w-full h-auto"
          >
            <path
              fill="#ff6600"
              fillOpacity="1"
              d="M0,96L48,122.7C96,149,192,203,288,197.3C384,192,480,128,576,117.3C672,107,768,149,864,176C960,203,1056,213,1152,208C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      {/* <div className="bg-amber-500 pb-[200px]">
        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit...
        </p>
      </div> */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
        >
          <path
            fill="#ff6600"
            fillOpacity="1"
            d="M0,96L48,122.7C96,149,192,203,288,197.3C384,192,480,128,576,117.3C672,107,768,149,864,176C960,203,1056,213,1152,208C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <section className="relative bg-orange-500">
        {/* Curved Background */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 250"
            className="w-full h-auto"
          >
            <path
              fill="#f2efe1"
              fillOpacity="1"
              d="M0,96L48,122.7C96,149,192,203,288,197.3C384,192,480,128,576,117.3C672,107,768,149,864,176C960,203,1056,213,1152,208C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center p-8">
          <p className="text-yellow-500 font-bold uppercase">
            Perfect Party Partner
          </p>
          <h1 className="text-4xl font-extrabold text-gray-800">
            Tastiest Fresh Fruit Juice
          </h1>
          <p className="mt-4 text-gray-600">
            Aenean et turpis ipsum. Quisque consequat orci augue, at aliquam
            urna tempus a. Nulla luctus consequat odio, eget pulvinar libero
            elementum nec.
          </p>
          <button className="mt-6 mb-[80px] px-6 py-3  bg-yellow-400 text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-500">
            Know More
          </button>
        </div>

        {/* Image */}
        <div className="relative z-0">
          <img
            src="/path-to-your-image.jpg"
            alt="Fresh Fruits"
            className="w-full object-cover"
          />
        </div>
      </section>
    </div>
    // <div className="relative bg-yellow-400 h-[300px] overflow-hidden">
    //   {/* Curve */}
    //   <img src="https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
    //   <div className="absolute top-0 w-full overflow-hidden">
    //     <svg
    //       viewBox="0 0 1440 320"
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="w-full h-[300px]"
    //     >
    //       <path
    //         fill="#FF69B4"
    //         d="M0,224L60,213.3C120,203,240,181,360,165.3C480,149,600,139,720,149.3C840,160,960,192,1080,197.3C1200,203,1320,181,1380,170.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
    //       ></path>
    //     </svg>
    //   </div>

    //   {/* Content */}
    //   <div className="relative z-10 text-center p-6">
    //     <h1 className="text-3xl font-bold text-white">Fresh Fruit Juice</h1>
    //     <p className="text-white">Enjoy the taste of fresh fruits!</p>
    //   </div>
    // </div>

    // <div class="overflow-x-hidden">
    //   <div class="absolute bottom-0 mt-[100px] ml-[-50%] h-[500px] w-[200%] rounded-t-[100%] bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600">
    //     <div class="mt-5 text-center text-2xl text-white">Footer</div>
    //   </div>
    // </div>
    // <div>
    //   <div className="relative w-full overflow-hidden leading-none rotate-180">
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 1200 120"
    //       preserveAspectRatio="none"
    //       className="relative block w-full h-[89px]"
    //     >
    //       <path
    //         d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
    //         fill="#1D4ED8"
    //       ></path>
    //     </svg>
    //   </div>
    //   <img src="https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
    // </div>
  );
};

export default Hero;
