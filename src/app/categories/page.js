import React from "react";
import { ArrowLeft } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Accessories",
      bgColor: "bg-blue-100",
      icon: (
        <div className="flex space-x-1">
          <div className="w-6 h-6 bg-yellow-600 rounded-sm"></div>
          <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
          <div className="w-6 h-6 bg-green-700 rounded-sm"></div>
        </div>
      ),
    },
    {
      id: 2,
      name: "Air Intake Systems",
      bgColor: "bg-teal-100",
      icon: (
        <div className="flex space-x-1">
          <div className="w-4 h-8 bg-gray-800 rounded-sm transform -rotate-12"></div>
          <div className="w-4 h-8 bg-gray-700 rounded-sm"></div>
          <div className="w-4 h-8 bg-gray-600 rounded-sm transform rotate-12"></div>
        </div>
      ),
    },
    {
      id: 3,
      name: "Apparel & Merchandise",
      bgColor: "bg-green-200",
      icon: (
        <div className="flex space-x-2">
          <div className="w-8 h-10 bg-gray-800 rounded-sm relative">
            <div className="w-3 h-3 bg-green-500 rounded-full absolute top-1 left-1"></div>
          </div>
          <div className="w-8 h-10 bg-gray-700 rounded-sm relative">
            <div className="w-3 h-3 bg-blue-500 rounded-full absolute top-1 left-1"></div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      name: "Automotive Fluids",
      bgColor: "bg-orange-100",
      icon: (
        <div className="flex space-x-1">
          <div className="w-5 h-8 bg-blue-600 rounded-sm relative">
            <div className="w-3 h-2 bg-blue-800 rounded-t absolute -top-1 left-1"></div>
          </div>
          <div className="w-5 h-8 bg-red-600 rounded-sm relative">
            <div className="w-3 h-2 bg-red-800 rounded-t absolute -top-1 left-1"></div>
          </div>
          <div className="w-5 h-8 bg-green-600 rounded-sm relative">
            <div className="w-3 h-2 bg-green-800 rounded-t absolute -top-1 left-1"></div>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      name: "Electronic Accessories",
      bgColor: "bg-pink-100",
      icon: (
        <div className="w-12 h-8 bg-gray-900 rounded-lg relative">
          <div className="w-8 h-5 bg-gray-700 rounded absolute top-1.5 left-2"></div>
          <div className="flex space-x-1 absolute bottom-1 left-2">
            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
            <div className="w-1 h-1 bg-red-400 rounded-full"></div>
            <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      name: "Engine",
      bgColor: "bg-gray-200",
      icon: (
        <div className="w-12 h-10 bg-gray-800 rounded-lg relative">
          <div className="w-8 h-3 bg-gray-600 rounded absolute top-1 left-2"></div>
          <div className="w-10 h-4 bg-gray-700 rounded absolute top-4 left-1"></div>
          <div className="flex space-x-1 absolute bottom-1 left-2">
            <div className="w-1.5 h-2 bg-gray-500 rounded"></div>
            <div className="w-1.5 h-2 bg-gray-500 rounded"></div>
            <div className="w-1.5 h-2 bg-gray-500 rounded"></div>
          </div>
        </div>
      ),
    },
    {
      id: 7,
      name: "Exhaust Systems",
      bgColor: "bg-yellow-100",
      icon: (
        <div className="flex items-center space-x-1">
          <div className="w-8 h-2 bg-gray-600 rounded-full"></div>
          <div className="w-3 h-4 bg-gray-700 rounded-sm"></div>
          <div className="w-8 h-2 bg-gray-600 rounded-full"></div>
        </div>
      ),
    },
    {
      id: 8,
      name: "Nitrous Systems",
      bgColor: "bg-blue-200",
      icon: (
        <div className="flex space-x-2">
          <div className="w-4 h-10 bg-blue-600 rounded-full relative">
            <div className="w-2 h-3 bg-blue-800 rounded-t absolute -top-1 left-1"></div>
          </div>
          <div className="w-4 h-10 bg-blue-500 rounded-full relative">
            <div className="w-2 h-3 bg-blue-700 rounded-t absolute -top-1 left-1"></div>
          </div>
        </div>
      ),
    },
    {
      id: 9,
      name: "Safety Equipment",
      bgColor: "bg-gray-100",
      icon: (
        <div className="w-10 h-8 bg-gray-800 rounded-lg relative">
          <div className="w-6 h-2 bg-yellow-400 rounded absolute top-2 left-2"></div>
          <div className="w-8 h-1 bg-gray-600 rounded absolute bottom-2 left-1"></div>
        </div>
      ),
    },
    {
      id: 10,
      name: "Scale Toys",
      bgColor: "bg-purple-100",
      icon: (
        <div className="w-12 h-6 bg-green-600 rounded-lg relative">
          <div className="w-8 h-3 bg-green-500 rounded absolute top-0.5 left-2"></div>
          <div className="flex space-x-2 absolute bottom-0 left-1">
            <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
          </div>
          <div className="flex space-x-2 absolute bottom-0 right-1">
            <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
          </div>
        </div>
      ),
    },
    {
      id: 11,
      name: "Suspension & Handling",
      bgColor: "bg-pink-200",
      icon: (
        <div className="flex flex-col space-y-1">
          <div className="w-8 h-1.5 bg-gray-700 rounded-full"></div>
          <div className="w-8 h-1.5 bg-gray-600 rounded-full"></div>
          <div className="w-8 h-1.5 bg-gray-500 rounded-full"></div>
          <div className="w-8 h-1.5 bg-gray-400 rounded-full"></div>
        </div>
      ),
    },
    {
      id: 12,
      name: "Wheels & Tires",
      bgColor: "bg-gray-300",
      icon: (
        <div className="flex space-x-1">
          <div className="w-8 h-8 bg-gray-800 rounded-full relative">
            <div className="w-4 h-4 bg-gray-600 rounded-full absolute top-2 left-2"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full absolute top-3 left-3"></div>
          </div>
          <div className="w-8 h-8 bg-gray-700 rounded-full relative">
            <div className="w-4 h-4 bg-gray-500 rounded-full absolute top-2 left-2"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full absolute top-3 left-3"></div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm">
        <div className="relative flex items-center justify-center px-5 py-4">
          <button className="absolute left-4 p-2 hover:bg-gray-100 active:bg-gray-200 rounded-full transition-all duration-200 hover:scale-110 active:scale-95">
            <ArrowLeft size={20} className="text-gray-800" strokeWidth={2} />
          </button>
          <h1 className="text-lg font-semibold text-gray-900 animate-in fade-in duration-300">
            Categories
          </h1>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="px-4 py-6">
        <div className="grid grid-cols-3 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative p-5 flex flex-col items-center justify-center min-h-[140px] shadow-sm hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer border border-white/50"
              style={{
                borderTopLeftRadius: "11.26px",
                borderTopRightRadius: "48.59px",
                borderBottomRightRadius: "11.26px",
                borderBottomLeftRadius: "11.26px",
              }}
            >
              {/* Background with opacity */}
              <div
                className={`absolute inset-0 ${category.bgColor}`}
                style={{
                  borderTopLeftRadius: "11.26px",
                  borderTopRightRadius: "48.59px",
                  borderBottomRightRadius: "11.26px",
                  borderBottomLeftRadius: "11.26px",
                  opacity: 0.7,
                }}
              ></div>
              {/* Icon Container */}
              <div className="mb-4 flex items-center justify-center h-12 relative z-10">
                {category.icon}
              </div>

              {/* Text */}
              <div className="text-center relative z-10">
                <h3 className="text-xs font-semibold text-gray-900 leading-tight tracking-wide">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
