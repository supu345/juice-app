import React from "react";
import Apple from "../assets/apple.jpg";
import { MdEco } from "react-icons/md";
import { GiJigsawBox, GiSpotedFlower, GiVineFlower } from "react-icons/gi";

const Features = () => {
  return (
    <div className="py-9 mt-6">
      {/* Header */}
      <div className="text-center mb-6">
        <p className="text-5xl font-bold font-poppins">Features of Fruits</p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 px-[80px] md:px-[160px] gap-4">
        {[
          {
            img: Apple,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            img: Apple,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            img: Apple,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-amber-100 flex items-center gap-3 py-3 rounded-xl w-[290px]"
          >
            <img
              src={feature.img}
              alt="feature"
              className="w-[50px] h-[50px] bg-white p-2 m-2 rounded-full"
            />
            <p>{feature.text}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 px-[80px] md:px-[20px] mt-6 gap-8">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="bg-amber-100 flex items-center gap-3 py-3 rounded-xl w-[290px]"
          >
            <img
              src={Orange}
              alt="feature"
              className="w-[50px] h-[50px] bg-white p-2 m-2 rounded-full"
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        ))}
      </div>

      {/* Fresh Juice Section */}
      <div className="flex flex-col md:flex-row mt-[100px] pl-2">
        <div className="w-[480px] px-4 relative">
          <img
            src="https://images.pexels.com/photos/5668211/pexels-photo-5668211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Fresh Juice"
            className="rounded-2xl"
          />
          <div className="absolute top-0 ml-15 mt-10">
            <p className="text-6xl font-bold text-white font-poppins">
              Fresh Juice
            </p>
            <p className="text-sm text-white font-poppins">
              Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full ml-7 pr-4">
          {[...Array(2)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-1 md:grid-cols-4 gap-5 ml-7"
            >
              {[
                "https://images.pexels.com/photos/17612827/pexels-photo-17612827/free-photo-of-a-green-drink-with-mint-leaves-and-a-straw.jpeg",
                "https://images.pexels.com/photos/7377093/pexels-photo-7377093.jpeg",
                "https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg",
                "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg",
              ].map((imgSrc, colIndex) => (
                <div key={colIndex}>
                  <img
                    src={imgSrc}
                    alt="Juice"
                    className="rounded-2xl h-[300px] w-[300px] md:h-[200px] md:w-full object-cover"
                  />
                  <p className="text-2xl font-bold px-3 py-4 ml-4">
                    Fresh Juice
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Additional Section */}
      <div className="px-5 mt-6">
        <div className="flex flex-row gap-5 px-8 bg-yellow-200 rounded-xl">
          <div className="mt-[100px] w-1/2">
            <p className="text-4xl font-bold">
              Incredibly Delicious Organic Fruits
            </p>
            <p className="text-sm mt-4">
              Experience the freshness and natural sweetness of organic fruits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
