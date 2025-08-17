"use client";

import { useState } from "react";
import {
  ChevronLeft,
  Heart,
  ShoppingCart,
  Star,
  Zap,
  Award,
} from "lucide-react";

export default function AvailableParts() {
  const [favorites, setFavorites] = useState(new Set());
  const [cart, setCart] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);

  const partsData = [
    {
      id: 1,
      name: "TRU-COOL 40K",
      partNumber: "#2545",
      price: 147.31,
      originalPrice: 189.99,
      stock: "In Stock",
      rating: 4.8,
      image: "cooler",
      badge: "Popular",
      discount: 22,
    },
    {
      id: 2,
      name: "Superman Clutch Kit",
      partNumber: "#2545",
      price: 147.31,
      originalPrice: 162.5,
      stock: "In Stock",
      rating: 4.9,
      image: "clutch",
      badge: "Premium",
      discount: 10,
    },
    {
      id: 3,
      name: "Tilton Double Plate System",
      partNumber: "#2545",
      price: 147.31,
      originalPrice: 175.0,
      stock: "In Stock",
      rating: 4.7,
      image: "plate",
      badge: "New",
      discount: 16,
    },
    {
      id: 4,
      name: "PP Spool For Nissan Y61",
      partNumber: "#2545",
      price: 147.31,
      originalPrice: 159.99,
      stock: "In Stock",
      rating: 4.6,
      image: "spool",
      badge: "Bestseller",
      discount: 8,
    },
    {
      id: 5,
      name: "NX-Intake035 Airforce Pro",
      partNumber: "#2545",
      price: 147.31,
      originalPrice: 199.99,
      stock: "In Stock",
      rating: 4.8,
      image: "intake",
      badge: "High Performance",
      discount: 26,
    },
    {
      id: 6,
      name: "NGK BKR8AIX Spark Plugs",
      partNumber: "#2545",
      price: 147.31,
      originalPrice: 165.0,
      stock: "In Stock",
      rating: 4.9,
      image: "spark",
      badge: "OEM Quality",
      discount: 11,
    },
    {
      id: 7,
      name: "MSD Spark Plug LS Wire Kit",
      partNumber: "#2545",
      price: 147.31,
      originalPrice: 180.99,
      stock: "In Stock",
      rating: 4.7,
      image: "wire",
      badge: "Professional",
      discount: 19,
    },
    {
      id: 8,
      name: "LSI Black Intake Manifold",
      partNumber: "#2545",
      price: 147.31,
      originalPrice: 195.0,
      stock: "In Stock",
      rating: 4.8,
      image: "black-intake",
      badge: "Limited",
      discount: 24,
    },
  ];

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const addToCart = (id) => {
    const newCart = new Set(cart);
    newCart.add(id);
    setCart(newCart);
  };

  const getBadgeStyle = (badge) => {
    const styles = {
      Popular: "bg-gradient-to-r from-orange-400 to-orange-500 text-white",
      Premium: "bg-gradient-to-r from-purple-400 to-purple-500 text-white",
      New: "bg-gradient-to-r from-emerald-400 to-emerald-500 text-white",
      Bestseller: "bg-gradient-to-r from-red-400 to-red-500 text-white",
      "High Performance":
        "bg-gradient-to-r from-blue-400 to-blue-500 text-white",
      "OEM Quality": "bg-gradient-to-r from-gray-600 to-gray-700 text-white",
      Professional: "bg-gradient-to-r from-indigo-400 to-indigo-500 text-white",
      Limited: "bg-gradient-to-r from-pink-400 to-pink-500 text-white",
    };
    return styles[badge] || "bg-gray-500 text-white";
  };

  const getImageComponent = (imageType) => {
    const baseClasses =
      "w-full h-24 rounded-xl flex items-center justify-center relative overflow-hidden";

    switch (imageType) {
      case "cooler":
        return (
          <div
            className={`${baseClasses} bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50`}
          >
            <div className="w-18 h-14 bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500 rounded-lg relative shadow-lg">
              <div className="absolute inset-2 bg-gradient-to-r from-slate-200 to-slate-300 rounded grid grid-cols-10 gap-0.5 p-1.5">
                {Array.from({ length: 40 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-slate-400 rounded-sm opacity-80"
                  ></div>
                ))}
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        );
      case "clutch":
        return (
          <div
            className={`${baseClasses} bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50`}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 relative shadow-xl">
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 shadow-inner">
                <div className="absolute inset-3 rounded-full bg-gradient-to-br from-blue-300 to-blue-400 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full shadow-sm"></div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                <Star className="w-2 h-2 text-white fill-current" />
              </div>
            </div>
          </div>
        );
      case "plate":
        return (
          <div
            className={`${baseClasses} bg-gradient-to-br from-gray-50 via-slate-50 to-zinc-50`}
          >
            <div className="w-18 h-18 rounded-full bg-gradient-to-br from-zinc-300 via-slate-400 to-gray-500 relative shadow-xl">
              <div className="absolute inset-3 rounded-full bg-gradient-to-br from-slate-600 to-zinc-700 shadow-inner"></div>
              <div className="absolute inset-6 rounded-full bg-gradient-to-br from-zinc-300 to-slate-300"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-zinc-600 rounded-full"></div>
            </div>
          </div>
        );
      case "spool":
        return (
          <div
            className={`${baseClasses} bg-gradient-to-br from-gray-100 via-slate-100 to-zinc-100`}
          >
            <div className="w-14 h-14 bg-gradient-to-br from-gray-800 via-zinc-900 to-black rounded-xl relative shadow-xl">
              <div className="absolute inset-2 bg-gradient-to-br from-zinc-600 to-gray-700 rounded-lg shadow-inner"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-2 bg-gradient-to-r from-zinc-300 to-slate-300 rounded-full"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        );
      case "intake":
        return (
          <div
            className={`${baseClasses} bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50`}
          >
            <div className="w-18 h-12 bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-xl relative shadow-xl">
              <div className="absolute top-2 left-3 w-4 h-3 bg-gradient-to-r from-red-300 to-red-400 rounded-md shadow-sm"></div>
              <div className="absolute bottom-2 right-3 w-5 h-4 bg-gradient-to-r from-red-400 to-red-500 rounded-md shadow-sm"></div>
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        );
      case "spark":
        return (
          <div
            className={`${baseClasses} bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50`}
          >
            <div className="w-4 h-20 bg-gradient-to-b from-orange-300 via-orange-500 to-orange-600 rounded-full relative shadow-lg">
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-gradient-to-b from-orange-100 to-orange-200 rounded-full"></div>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-md"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        );
      case "wire":
        return (
          <div
            className={`${baseClasses} bg-gradient-to-br from-gray-100 via-slate-100 to-zinc-100`}
          >
            <div className="relative w-20 h-16">
              <div className="absolute top-3 left-3 w-14 h-2.5 bg-gradient-to-r from-black to-gray-800 rounded-full shadow-md"></div>
              <div className="absolute top-6 left-2 w-16 h-2.5 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full shadow-md"></div>
              <div className="absolute top-9 left-4 w-12 h-2.5 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full shadow-md"></div>
              <div className="absolute -top-1 right-0 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        );
      case "black-intake":
        return (
          <div
            className={`${baseClasses} bg-gradient-to-br from-gray-800 via-slate-800 to-zinc-900`}
          >
            <div className="w-16 h-12 bg-gradient-to-br from-zinc-600 via-gray-700 to-slate-800 rounded-xl relative shadow-xl">
              <div className="absolute inset-2 bg-gradient-to-br from-gray-800 to-zinc-900 rounded-lg shadow-inner"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-3 bg-gradient-to-r from-zinc-400 to-slate-400 rounded-md"></div>
              <div className="absolute -top-1 -left-1 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        );
      default:
        return (
          <div
            className={`${baseClasses} bg-gradient-to-br from-gray-100 to-gray-200`}
          >
            <div className="w-12 h-12 bg-gray-400 rounded-lg"></div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-zinc-50">
      <div className="mx-auto bg-white min-h-screen">
        {/* Enhanced Header */}
        <div className="relative bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600 text-white px-6 py-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <button className="mr-4 p-2.5 hover:bg-white/15 rounded-xl transition-all duration-200 backdrop-blur-sm">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex-1">
                <h1 className="text-2xl font-bold tracking-tight">
                  Available Parts
                </h1>
                <div className="flex items-center mt-1">
                  <Zap className="w-4 h-4 mr-2 text-yellow-300" />
                  <span className="text-emerald-100 text-sm font-medium">
                    Fast Delivery
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <p className="text-white font-semibold text-lg">
                Toyota / Corolla / 2018
              </p>
              <p className="text-emerald-100 text-sm mt-1">
                Premium automotive parts collection
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Parts Grid */}
        <div className="p-5 mt-4 relative z-10">
          <div className="grid grid-cols-2 gap-5">
            {partsData.map((part, index) => (
              <div
                key={part.id}
                className={`bg-white rounded-2xl p-4 border border-gray-100 relative overflow-hidden
                           transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]
                           ${
                             hoveredCard === part.id
                               ? "shadow-2xl scale-[1.02] -translate-y-2"
                               : "shadow-lg"
                           }
                           animate-[fadeInUp_0.6s_ease-out] hover:border-emerald-200`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(part.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/30 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

                {/* Badge */}
                <div className="absolute -top-1 -right-1 z-20">
                  <div
                    className={`${getBadgeStyle(
                      part.badge
                    )} px-3 py-1 rounded-full text-xs font-bold shadow-lg transform rotate-12`}
                  >
                    {part.badge}
                  </div>
                </div>

                {/* Discount Badge */}
                {part.discount > 15 && (
                  <div className="absolute top-2 left-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-1 rounded-lg text-xs font-bold z-20 shadow-md">
                    -{part.discount}%
                  </div>
                )}

                {/* Heart Icon */}
                <div className="flex justify-end mb-4 relative z-10">
                  <button
                    onClick={() => toggleFavorite(part.id)}
                    className="p-2 hover:bg-red-50 rounded-xl transition-all duration-200 group"
                  >
                    <Heart
                      className={`w-5 h-5 transition-all duration-300 ${
                        favorites.has(part.id)
                          ? "fill-red-500 text-red-500 scale-110"
                          : "text-gray-400 hover:text-red-400 hover:scale-110 group-hover:fill-red-100"
                      }`}
                    />
                  </button>
                </div>

                {/* Enhanced Product Image */}
                <div className="mb-5 relative">
                  {getImageComponent(part.image)}
                </div>

                {/* Enhanced Product Info */}
                <div className="space-y-3 relative z-10">
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm leading-tight mb-1">
                      {part.name}
                    </h3>

                    {/* Rating Stars */}
                    <div className="flex items-center mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(part.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-xs text-gray-500 ml-1 font-medium">
                        {part.rating}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500 font-medium">
                      Part {part.partNumber}
                    </span>
                    <div className="flex items-center bg-emerald-50 px-2.5 py-1 rounded-full">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-1.5 animate-pulse"></div>
                      <span className="text-xs text-emerald-700 font-bold">
                        {part.stock}
                      </span>
                    </div>
                  </div>

                  {/* Enhanced Pricing */}
                  <div className="pt-2">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-gray-900">
                            ${part.price.toFixed(2)}
                          </span>
                          {part.originalPrice > part.price && (
                            <span className="text-xs text-gray-500 line-through">
                              ${part.originalPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                        {part.originalPrice > part.price && (
                          <span className="text-xs text-green-600 font-bold">
                            Save ${(part.originalPrice - part.price).toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => addToCart(part.id)}
                      className={`w-full py-2.5 rounded-xl text-sm font-bold transition-all duration-300 relative overflow-hidden
                        ${
                          cart.has(part.id)
                            ? "bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 shadow-inner border-2 border-emerald-200"
                            : "bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 hover:from-red-600 hover:to-red-800"
                        }`}
                      disabled={cart.has(part.id)}
                    >
                      {cart.has(part.id) ? (
                        <span className="flex items-center justify-center">
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          <span>Added to Cart</span>
                          <Award className="w-4 h-4 ml-2" />
                        </span>
                      ) : (
                        <span className="relative z-10">Add to Cart</span>
                      )}

                      {!cart.has(part.id) && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-200%] hover:translate-x-[200%] transition-transform duration-700"></div>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Spacing */}
        <div className="h-8"></div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
