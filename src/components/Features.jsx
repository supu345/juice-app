import React from "react";
import Orange from "../assets/Orange.png";
import Apple from "../assets/apple.jpg";
import Refresh from "../assets/refreshing.png";
import { MdEco } from "react-icons/md";
import { GiJigsawBox } from "react-icons/gi";
import { GiSpotedFlower } from "react-icons/gi";
import { GiVineFlower } from "react-icons/gi";
const Features = () => {
  return (
    <div className="py-9 mt-6 ">
      <div className="text-center">
        <p className="text-5xl font-bold mb-6 font-poppins">
          Features of Fruits
        </p>
      </div>
      {/* Features of Fruits */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:px-[160px] px-[80px] gap-4">
          <div className="bg-amber-100 flex flex-row gap-3 items-center py-3 rounded-xl w-[290px]">
            <img
              src={Orange}
              alt="image"
              className="w-[50px] h-[50px] bg-white p-2 m-2 rounded-full"
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="bg-amber-100 flex flex-row gap-3 items-center py-3 rounded-xl w-[290px]">
            <img
              src={Apple}
              alt="image"
              className="w-[50px] h-[50px] bg-white p-2 m-2 rounded-full"
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="bg-amber-100 flex flex-row gap-3 items-center py-3 rounded-xl w-[290px]">
            <img
              src={Orange}
              alt="image"
              className="w-[50px] h-[50px] bg-white p-2 m-2 rounded-full"
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 md:px-[20px] mt-6 px-[80px] gap-8">
          <div className="bg-amber-100 flex flex-row gap-3 items-center py-3 rounded-xl w-[290px]">
            <img
              src={Orange}
              alt="image"
              className="w-[50px] h-[50px] bg-white p-2 m-2 rounded-full"
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="bg-amber-100 flex flex-row gap-3 items-center py-3 rounded-xl w-[290px]">
            <img
              src={Orange}
              alt="image"
              className="w-[50px] h-[50px] bg-white p-2 m-2 rounded-full"
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="bg-amber-100 flex flex-row gap-3 items-center py-3 rounded-xl w-[290px]">
            <img
              src={Orange}
              alt="image"
              className="w-[50px] h-[50px] bg-white p-2 m-2 rounded-full"
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="bg-amber-100 flex flex-row gap-3 items-center py-3 rounded-xl w-[290px]">
            <img
              src={Orange}
              alt="image"
              className="w-[50px] h-[50px] bg-white p-2 m-2 rounded-full"
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      {/* Features of Fruits 2*/}
      <div className="flex flex-col  md:flex-row mt-[100px] pl-2 ">
        <div className="w-[480px] px-4 relative">
          <img
            src="https://images.pexels.com/photos/5668211/pexels-photo-5668211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="alt"
            className="rounded-2xl "
          />
          <div className="absolute top-0 ml-15 mt-10">
            <p className="text-6xl font-bold text-white font-poppins">
              Fresh Juice
            </p>
            <p className="text-sm  text-white font-poppins">
              Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
        </div>
        <div className="w-[1000px]  ml-7 gap-2 pr-4">
          <div className=" grid grid-cols-1 md:grid-cols-4 ml-7 gap-5">
            <div>
              <img
                src="https://images.pexels.com/photos/17612827/pexels-photo-17612827/free-photo-of-a-green-drink-with-mint-leaves-and-a-straw.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="alt"
                className="rounded-2xl h-[300px] w-[300px] md:h-[200px] md:w-full  object-cover"
              />
              <p className="px-3 text-2xl font-bold py-4 ml-4">Fresh Juice</p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/7377093/pexels-photo-7377093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="alt"
                className="rounded-2xl h-[300px] w-[300px] md:h-[200px] md:w-full  object-cover"
              />
              <p className="px-3 text-2xl font-bold py-4 ml-4">Fresh Juice</p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="alt"
                className="rounded-2xl h-[300px] w-[300px] md:h-[200px] md:w-full  object-cover"
              />
              <p className="px-3 text-2xl font-bold py-4 ml-4">Fresh Juice</p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="alt"
                className="rounded-2xl h-[300px] w-[300px] md:h-[200px] md:w-full  object-cover"
              />
              <p className="px-3 text-2xl font-bold py-4 ml-4">Fresh Juice</p>
            </div>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-4 ml-7 mt-4 gap-5">
            <div>
              <img
                src="https://images.pexels.com/photos/11879053/pexels-photo-11879053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="alt"
                className="rounded-2xl h-[300px] w-[300px] md:h-[200px] md:w-full  object-cover"
              />
              <p className="px-3 text-2xl font-bold py-4 ml-4">Fresh Juice</p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/11009206/pexels-photo-11009206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="alt"
                className="rounded-2xl h-[300px] w-[300px] md:h-[200px] md:w-full  object-cover"
              />
              <p className="px-3 text-2xl font-bold py-4 ml-4">Fresh Juice</p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/14994708/pexels-photo-14994708/free-photo-of-close-up-of-a-berry-drink.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="alt"
                className="rounded-2xl h-[300px] w-[300px] md:h-[200px] md:w-full  object-cover"
              />
              <p className="px-3 text-2xl font-bold py-4 ml-4">Fresh Juice</p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/11009199/pexels-photo-11009199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="alt"
                className="rounded-2xl h-[300px] w-[300px] md:h-[200px] md:w-full  object-cover"
              />
              <p className="px-3 text-2xl font-bold py-4 ml-4">Fresh Juice</p>
            </div>
          </div>
        </div>
      </div>
      <div>marque</div>
      {/* incredibly delicious organic  */}
      <div className="px-5">
        <div className="flex flex-row gap-5 px-8 bg-yellow-200 rounded-xl">
          <div className="mt-[100px] w-1/2">
            <p className="text-5xl font-bold text-amber-700 capitalize font-poppins">
              Exquisitely Refreshing Organic Fruit Drinks
            </p>
            <p className="py-7 mr-6 text-amber-900 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut
              velit voluptates rerum sint aperiam voluptatum doloremque quos
              itaque atque.rerum sint aperiam voluptatum doloremque quos itaque.
            </p>

            <div className="flex flex-row gap-2">
              <div className="rounded-full border-2 font-medium flex items-center justify-center flex-col text-center py-1 px-2">
                <MdEco className="text-sm mb-0.5 font-bold" />
                <p className="text-xs font-bold">GLUTON</p>
                <p className="text-xs font-bold">FREE</p>
              </div>
              <div className="rounded-full border-2 font-medium flex items-center justify-center flex-col text-center p-1 px-2">
                <GiSpotedFlower className="text-sm mb-0.5 font-bold" />
                <p className="text-xs font-bold">GLUTON</p>
                <p className="text-xs font-bold">FREE</p>
              </div>
              <div className="rounded-full border-2 font-medium flex items-center justify-center flex-col text-center p-1 px-2">
                <GiJigsawBox className="text-sm mb-0.5 font-bold" />
                <p className="text-xs font-bold">GLUTON</p>
                <p className="text-xs font-bold">FREE</p>
              </div>
              <div className="rounded-full border-2 font-medium flex items-center justify-center flex-col text-center p-1 py-2 px-2">
                <GiVineFlower className="text-sm mb-0.5 font-bold" />
                <p className="text-xs font-bold">GLUTON</p>
                <p className="text-xs font-bold">FREE</p>
              </div>
            </div>
            <button className="bg-amber-500 text-white font-bold py-2 px-5 my-9 rounded-full">
              Shop Juice
            </button>
          </div>

          <div>
            <img src={Refresh} alt="photo" />
          </div>
        </div>
      </div>
      {/* delightful juice Collections  */}
      <div className="mt-[80px] px-9">
        <p className="text-5xl font-bold text-amber-900 capitalize font-poppins">
          delightful juice Collections
        </p>
        <div className="flex flex-row gap-8 py-7 px-4">
          <div className="w-1/4 ">
            <div className="group relative h-[300px] w-[300px] overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="image"
                className="h-full w-full object-cover"
              />
              <img
                src="https://images.pexels.com/photos/1194028/pexels-photo-1194028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="hovered image"
                className="absolute inset-0 h-full w-full object-cover transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0"
              />
            </div>
            <div className="text-center py-5">
              <p className="text-2xl font-bold">Orange Juice</p>
              <p className="py-3">$12.00</p>
            </div>
            <button className="border w-[300px] py-1 rounded-md hover:bg-amber-500 hover:text-white">
              Add to Cart
            </button>
          </div>
          <div className="w-1/4 ">
            <div className="group relative h-[300px] w-[300px] overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="image"
                className="h-full w-full object-cover"
              />
              <img
                src="https://images.pexels.com/photos/1194028/pexels-photo-1194028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="hovered image"
                className="absolute inset-0 h-full w-full object-cover transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0"
              />
            </div>
            <div className="text-center py-5">
              <p className="text-2xl font-bold">Orange Juice</p>
              <p className="py-3">$12.00</p>
            </div>
            <button className="border w-[300px] py-1 rounded-md hover:bg-amber-500 hover:text-white">
              Add to Cart
            </button>
          </div>
          <div className="w-1/4 ">
            <div className="group relative h-[300px] w-[300px] overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="image"
                className="h-full w-full object-cover"
              />
              <img
                src="https://images.pexels.com/photos/1194028/pexels-photo-1194028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="hovered image"
                className="absolute inset-0 h-full w-full object-cover transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0"
              />
            </div>
            <div className="text-center py-5">
              <p className="text-2xl font-bold">Orange Juice</p>
              <p className="py-3">$12.00</p>
            </div>
            <button className="border w-[300px] py-1 rounded-md hover:bg-amber-500 hover:text-white">
              Add to Cart
            </button>
          </div>
          <div className="w-1/4 ">
            <div className="group relative h-[300px] w-[300px] overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="image"
                className="h-full w-full object-cover"
              />
              <img
                src="https://images.pexels.com/photos/1194028/pexels-photo-1194028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="hovered image"
                className="absolute inset-0 h-full w-full object-cover transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0"
              />
            </div>
            <div className="text-center py-5">
              <p className="text-2xl font-bold">Orange Juice</p>
              <p className="py-3">$12.00</p>
            </div>
            <button className="border w-[300px] py-1 rounded-md hover:bg-amber-500 hover:text-white">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="flex flex-row gap-8 py-7 px-4">
          <div className="w-1/4 ">
            <div className="group relative h-[300px] w-[300px] overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="image"
                className="h-full w-full object-cover"
              />
              <img
                src="https://images.pexels.com/photos/1194028/pexels-photo-1194028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="hovered image"
                className="absolute inset-0 h-full w-full object-cover transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0"
              />
            </div>
            <div className="text-center py-5">
              <p className="text-2xl font-bold">Orange Juice</p>
              <p className="py-3">$12.00</p>
            </div>
            <button className="border w-[300px] py-1 rounded-md hover:bg-amber-500 hover:text-white">
              Add to Cart
            </button>
          </div>
          <div className="w-1/4 ">
            <div className="group relative h-[300px] w-[300px] overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="image"
                className="h-full w-full object-cover"
              />
              <img
                src="https://images.pexels.com/photos/1194028/pexels-photo-1194028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="hovered image"
                className="absolute inset-0 h-full w-full object-cover transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0"
              />
            </div>
            <div className="text-center py-5">
              <p className="text-2xl font-bold">Orange Juice</p>
              <p className="py-3">$12.00</p>
            </div>
            <button className="border w-[300px] py-1 rounded-md hover:bg-amber-500 hover:text-white">
              Add to Cart
            </button>
          </div>
          <div className="w-1/4 ">
            <div className="group relative h-[300px] w-[300px] overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="image"
                className="h-full w-full object-cover"
              />
              <img
                src="https://images.pexels.com/photos/1194028/pexels-photo-1194028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="hovered image"
                className="absolute inset-0 h-full w-full object-cover transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0"
              />
            </div>
            <div className="text-center py-5">
              <p className="text-2xl font-bold">Orange Juice</p>
              <p className="py-3">$12.00</p>
            </div>
            <button className="border w-[300px] py-1 rounded-md hover:bg-amber-500 hover:text-white">
              Add to Cart
            </button>
          </div>
          <div className="w-1/4 ">
            <div className="group relative h-[300px] w-[300px] overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="image"
                className="h-full w-full object-cover"
              />
              <img
                src="https://images.pexels.com/photos/1194028/pexels-photo-1194028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="hovered image"
                className="absolute inset-0 h-full w-full object-cover transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0"
              />
            </div>
            <div className="text-center py-5">
              <p className="text-2xl font-bold">Orange Juice</p>
              <p className="py-3">$12.00</p>
            </div>
            <button className="border w-[300px] py-1 rounded-md hover:bg-amber-500 hover:text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
