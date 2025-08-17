"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  Heart,
  Star,
  ShoppingCart,
  Minus,
  Plus,
} from "lucide-react";

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState("3.5 inch");
  const [quantity, setQuantity] = useState(2);
  const [isFavorited, setIsFavorited] = useState(true);
  const [hoveredLabel, setHoveredLabel] = useState(null);

  const pipeSizes = [
    { size: "3 inch", available: true },
    { size: "3.5 inch", available: true },
    { size: "3 inch", available: true },
    { size: "4 inch", available: true },
    { size: "2 inch", available: true },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <div className="bg-white">
        <div className="relative flex items-center justify-center px-4 py-3">
          <button className="absolute left-4">
            <ArrowLeft size={20} className="text-gray-900" strokeWidth={2} />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">Details</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 pb-24">
        {/* Product Image Card */}
        <div className="bg-orange-100 rounded-3xl mb-6 relative h-80 overflow-hidden">
          {/* Heart Icon */}
          <button
            className="absolute top-5 right-5 w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg z-10"
            onClick={() => setIsFavorited(!isFavorited)}
          >
            <Heart
              size={19}
              className={`${
                isFavorited ? "text-red-500 fill-red-500" : "text-gray-600"
              }`}
              strokeWidth={2}
            />
          </button>

          {/* Centered Clamp Illustration */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Main Clamp SVG */}
              <svg
                width="200"
                height="120"
                viewBox="0 0 200 120"
                className="drop-shadow-lg"
              >
                <defs>
                  <linearGradient
                    id="metalGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" style={{ stopColor: "#F1F5F9" }} />
                    <stop offset="50%" style={{ stopColor: "#CBD5E1" }} />
                    <stop offset="100%" style={{ stopColor: "#94A3B8" }} />
                  </linearGradient>
                  <linearGradient
                    id="clampGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" style={{ stopColor: "#64748B" }} />
                    <stop offset="100%" style={{ stopColor: "#334155" }} />
                  </linearGradient>
                </defs>

                {/* Main body */}
                <ellipse
                  cx="100"
                  cy="60"
                  rx="65"
                  ry="25"
                  fill="url(#metalGrad)"
                  stroke="#64748B"
                  strokeWidth="1"
                />
                <ellipse
                  cx="100"
                  cy="55"
                  rx="58"
                  ry="20"
                  fill="#F8FAFC"
                  opacity="0.8"
                />

                {/* Left clamp */}
                <rect
                  x="25"
                  y="35"
                  width="18"
                  height="50"
                  fill="url(#clampGrad)"
                  rx="4"
                />
                <rect
                  x="27"
                  y="37"
                  width="14"
                  height="46"
                  fill="#64748B"
                  rx="3"
                />

                {/* Right clamp */}
                <rect
                  x="157"
                  y="35"
                  width="18"
                  height="50"
                  fill="url(#clampGrad)"
                  rx="4"
                />
                <rect
                  x="159"
                  y="37"
                  width="14"
                  height="46"
                  fill="#64748B"
                  rx="3"
                />

                {/* Bolts */}
                <circle cx="47" cy="50" r="3" fill="#1F2937" />
                <circle cx="47" cy="70" r="3" fill="#1F2937" />
                <circle cx="153" cy="50" r="3" fill="#1F2937" />
                <circle cx="153" cy="70" r="3" fill="#1F2937" />

                {/* Band */}
                <path
                  d="M35 60 Q100 45 165 60 Q100 75 35 60"
                  fill="#9CA3AF"
                  opacity="0.6"
                />
              </svg>

              {/* Tooltip Points */}
              <div
                className="absolute top-4 left-12 w-2 h-2 bg-red-500 rounded-full cursor-pointer"
                onMouseEnter={() => setHoveredLabel("bolt")}
                onMouseLeave={() => setHoveredLabel(null)}
              >
                {hoveredLabel === "bolt" && (
                  <div className="absolute -top-12 -left-16 bg-white p-2 rounded shadow-lg text-xs border z-20">
                    Zinc-plated M10
                    <br />
                    bolt and nut
                  </div>
                )}
              </div>

              <div
                className="absolute top-2 right-16 w-2 h-2 bg-red-500 rounded-full cursor-pointer"
                onMouseEnter={() => setHoveredLabel("band")}
                onMouseLeave={() => setHoveredLabel(null)}
              >
                {hoveredLabel === "band" && (
                  <div className="absolute -top-10 -right-20 bg-white p-2 rounded shadow-lg text-xs border z-20">
                    304 stainless steel band
                  </div>
                )}
              </div>

              <div
                className="absolute bottom-6 left-8 w-2 h-2 bg-red-500 rounded-full cursor-pointer"
                onMouseEnter={() => setHoveredLabel("aluminum")}
                onMouseLeave={() => setHoveredLabel(null)}
              >
                {hoveredLabel === "aluminum" && (
                  <div className="absolute -bottom-12 -left-12 bg-white p-2 rounded shadow-lg text-xs border z-20">
                    Aluminum
                    <br />
                    alloy T-block
                  </div>
                )}
              </div>

              <div
                className="absolute bottom-4 right-12 w-2 h-2 bg-red-500 rounded-full cursor-pointer"
                onMouseEnter={() => setHoveredLabel("gasket")}
                onMouseLeave={() => setHoveredLabel(null)}
              >
                {hoveredLabel === "gasket" && (
                  <div className="absolute -bottom-10 -right-16 bg-white p-2 rounded shadow-lg text-xs border z-20">
                    Steel gasket
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Exhaust Clamp
          </h2>

          {/* Rating and Quantity Row */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900 mr-3">4.8</span>
              <Star
                size={18}
                className="text-yellow-400 fill-yellow-400 mr-3"
              />
              <span className="text-sm font-medium text-gray-500">
                5k+ Rating
              </span>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center">
              <button
                className="w-10 h-10 border-2 border-green-500 rounded-full flex items-center justify-center"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus size={16} className="text-green-500" />
              </button>
              <div className="mx-3 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">{quantity}</span>
              </div>
              <button
                className="w-10 h-10 border-2 border-green-500 rounded-full flex items-center justify-center"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus size={16} className="text-green-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-gray-800 text-base mb-4 font-medium">
            Joins OD-ID slip fit pipe. width of strap: 1.22inch /31mm..
          </p>
          <p className="text-gray-600 text-sm">
            <span className="font-semibold text-gray-800">Application:</span>{" "}
            Narrow Band clamp is a simple, effective way to connect exhaust
            system components such as pipes, mufflers, catalytic converters
            etc..
          </p>
        </div>

        {/* Pipe Size */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Pipe size</h3>
          <div className="grid grid-cols-5 gap-2">
            {pipeSizes.map((pipe, index) => (
              <button
                key={index}
                className={`h-12 px-2 rounded-full border-2 text-xs font-semibold flex items-center justify-center ${
                  selectedSize === pipe.size
                    ? "bg-green-500 border-green-500 text-white"
                    : "border-green-500 text-green-600 bg-white"
                }`}
                onClick={() => setSelectedSize(pipe.size)}
              >
                <div className="flex items-center">
                  <div
                    className={`w-2 h-2 rounded-full mr-1.5 ${
                      selectedSize === pipe.size ? "bg-white" : "bg-green-500"
                    }`}
                  ></div>
                  <span>{pipe.size}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Terms */}
        <div className="mb-8">
          <button className="text-green-600 text-base font-semibold">
            Terms and Conditions
          </button>
        </div>
      </div>

      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-5">
        <div className="flex items-center justify-between">
          <span className="text-4xl font-bold text-gray-900">$ 32.57</span>
          <button className="bg-red-500 text-white px-10 py-4 rounded-2xl font-bold flex items-center">
            <span className="mr-3">Check out</span>
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
