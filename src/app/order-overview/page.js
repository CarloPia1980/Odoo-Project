"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";

export default function OrderOverview() {
  const [discountCode, setDiscountCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleApplyDiscount = async () => {
    if (!discountCode.trim()) return;
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    // Handle discount application logic here
  };

  const handleCheckout = () => {
    // Handle checkout logic
    console.log("Proceeding to checkout...");
  };

  const handleContinueShopping = () => {
    // Handle navigation back to shopping
    console.log("Continue shopping...");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Container */}
      <div className="mx-auto bg-white min-h-screen shadow-xl">

        {/* Header */}
        <div className="flex items-center px-6 py-4 bg-white border-b border-gray-100">
          <button
            onClick={handleContinueShopping}
            className="mr-4 p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-xl font-semibold text-gray-900">
            Order overview
          </h1>
        </div>

        {/* Product Card */}
        <div className="px-6 py-6">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="flex space-x-4 mb-4">
              {/* Product Image Placeholder */}
              <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                <div className="w-14 h-10 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg flex items-center justify-center relative shadow-inner">
                  <div className="w-6 h-6 bg-gray-500 rounded-full shadow-sm"></div>
                  <div className="absolute -right-0.5 -top-0.5 w-3 h-5 bg-gray-600 rounded-sm shadow-sm"></div>
                  <div className="absolute -left-0.5 bottom-0 w-2.5 h-2.5 bg-gray-500 rounded shadow-sm"></div>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex-1">
                <h3 className="text-emerald-600 font-semibold text-lg mb-1 leading-tight">
                  Exhaust Clamp (3.5 inch)
                </h3>
                <p className="text-2xl font-bold text-gray-900">$ 32.57</p>
              </div>
            </div>

            {/* Product Description */}
            <div className="text-sm text-gray-600 leading-relaxed space-y-2.5">
              <p>Joins OD-ID slip fit pipe, width of strap: 1.22inch /31mm.</p>
              <p>
                <span className="font-medium text-gray-700">Application:</span>{" "}
                Narrow Band clamp is a simple, effective way to connect exhaust
                system components such as pipes, mufflers, catalytic converters
                etc..
              </p>
              <p>
                <span className="font-medium text-gray-700">Advantage:</span> No
                welding design, easy to install or remove. It is recommended
                that you put exhaust sealant on the pipes before installation..
              </p>
              <p>
                <span className="font-medium text-gray-700">Materials:</span>{" "}
                304 stainless steel clamp, zinc-plated M10 bolt and nut, steel
                gasket, aluminum alloy I-block..
              </p>
              <p>
                <span className="font-medium text-gray-700">Feature:</span> The
                band clamps make the force of 360 evenly distributed to provide
                a seal. Torque: 63 N.m..
              </p>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="px-6 space-y-4 mb-6">
          {/* Subtotal */}
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600 font-medium">Subtotal</span>
            <span className="text-gray-900 font-semibold">$ 32.57</span>
          </div>

          {/* Taxes */}
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600 font-medium">Taxes</span>
            <span className="text-gray-900 font-semibold">$ 0.00</span>
          </div>

          {/* Divider */}
          <hr className="border-gray-200 my-4" />

          {/* Total */}
          <div className="flex justify-between items-center py-2">
            <span className="text-lg font-bold text-gray-900">Total</span>
            <span className="text-2xl font-bold text-gray-900">$ 32.57</span>
          </div>
        </div>

        {/* Discount Code Section */}
        <div className="px-6 pb-6">
          <div className="flex space-x-3">
            <input
              type="text"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              placeholder="Gift card or discount code ..."
              className="flex-1 px-4 py-3.5 border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 
                         focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent
                         transition-all duration-200"
            />
            <button
              onClick={handleApplyDiscount}
              disabled={!discountCode.trim() || isLoading}
              className="px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold 
                         rounded-xl transition-all duration-200 hover:from-emerald-600 hover:to-emerald-700
                         disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md
                         active:scale-95"
            >
              {isLoading ? "Applying..." : "Apply"}
            </button>
          </div>
        </div>

        {/* Checkout Button */}
        <div className="px-6 pb-4">
          <button
            onClick={handleCheckout}
            className="w-full py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold 
                       rounded-xl transition-all duration-200 hover:from-red-600 hover:to-red-700
                       shadow-lg hover:shadow-xl active:scale-98 flex items-center justify-center group"
          >
            <span className="mr-2">Checkout</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>

        {/* Continue Shopping */}
        <div className="px-6 pb-8 text-center">
          <button
            onClick={handleContinueShopping}
            className="text-emerald-600 font-medium flex items-center justify-center w-full py-2
                       hover:text-emerald-700 transition-colors duration-200 group"
          >
            Continue shopping
            <ArrowRight className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </div>
  );
}
