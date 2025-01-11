import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className="flex flex-col w-full min-h-screen bg-yellow-500 md:flex-row">
      <div className="w-full md:w-1/2 bg-[#bb0707cf] p-8 flex flex-col justify-center items-center text-white">
        <div className="mb-8 text-center">
          <p className="mb-4 text-sm tracking-wider uppercase">
            Welcome to KFC.com
          </p>
          <h1 className="mb-4 text-6xl font-bold">UNLOCK</h1>
          <h1 className="mb-4 text-6xl font-bold">FASTER</h1>
          <h1 className="text-6xl font-bold">CHECKOUT</h1>
        </div>
        <img
          src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="Crispy Chicken"
          className="object-cover w-64 h-64 rounded-lg"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full min-h-screen p-4 bg-gray-50">
                  <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                      <div className="flex flex-col items-center space-y-2">
                          <img
                              src="https://i.postimg.cc/J7QkQTc5/brand-kfc-product.jpg"
                              alt="KFC Logo"
                              className="w-auto h-16 mb-2"
                          />
                          <h1 className="text-2xl font-bold text-gray-900">Sign in to KFC</h1>
                          <p className="text-sm text-gray-500">
                              Enter your details to continue
                          </p>
                      </div>
                      <form className="space-y-4">
                          <div>
                              <label
                                  htmlFor="email"
                                  className="block mb-1 text-sm font-medium text-gray-700"
                              >
                                  Email or Phone Number
                              </label>
                              <input
                                  type="text"
                                  id="email"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E4002B] focus:border-transparent"
                                  placeholder="Enter your email or phone number"
                              />
                          </div>
                          <div>
                              <label
                                  htmlFor="password"
                                  className="block mb-1 text-sm font-medium text-gray-700"
                              >
                                  Password
                              </label>
                              <div className="relative">
                                  <input
                                      type={showPassword ? "text" : "password"}
                                      id="password"
                                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E4002B] focus:border-transparent"
                                      placeholder="Enter your password"
                                  />
                                  <button
                                      type="button"
                                      onClick={() => setShowPassword(!showPassword)}
                                      className="absolute text-gray-500 -translate-y-1/2 right-3 top-1/2 hover:text-gray-700"
                                  >
                                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                  </button>
                              </div>
                          </div>
                          <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                  <input
                                      type="checkbox"
                                      id="remember"
                                      className="h-4 w-4 text-[#E4002B] focus:ring-[#E4002B] border-gray-300 rounded"
                                  />
                                  <label
                                      htmlFor="remember"
                                      className="block ml-2 text-sm text-gray-700"
                                  >
                                      Remember me
                                  </label>
                              </div>
                              <a href="#" className="text-sm text-[#E4002B] hover:text-[#b30022]">
                                  Forgot password?
                              </a>
                          </div>
                          <button
                              type="submit"
                              className="w-full bg-[#E4002B] text-white py-2 px-4 rounded-md hover:bg-[#b30022] transition-colors duration-200 font-medium"
                          >
                              Sign In
                          </button>
                      </form>
                      <div className="text-sm text-center">
                          <span className="text-gray-600">Don't have an account?</span>{" "}
                          <a
                              href="/signup"
                              className="text-[#E4002B] hover:text-[#b30022] font-medium"
                          >
                              Sign up
                          </a>
                      </div>
                  </div>
              </div>
    </div>
  );
}

export default Login;
