import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="mx-4 md:mx-8 lg:mx-32">
        <header className="border-b-[1px] border-b-black">
          <nav className="bg-white border-gray-200 px-4 lg:px-8 py-4 lg:mx-32 ">
            <div className=" items-center">
              <Link to="/home">
                <div className="flex justify-center my-4 lg:my-14">
                  <div className="bg-black text-white text-4xl p-1 m-2 font-bold -rotate-90">
                    The
                  </div>
                  <div className="text-black text-6xl font-semibold">Siren</div>
                </div>
              </Link>
              <div className="lg:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="text-black p-2 focus:outline-none"
                >
                  {isMobileMenuOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  )}
                </button>
              </div>
              <div
                className={`${isMobileMenuOpen ? "block" : "hidden"} lg:flex `}
                id="desktop-menu"
              >
                <div className="md:items-center justify-between mx-auto sm:space-y-2 flex flex-col mt-4 font-medium lg:flex-row lg:space-x-12 ">
                  <Link
                    to="/home"
                    className="hover:underline mt-3 transition-all duration-500 px-2 hover:tracking-[4px]  text-black hover:text-white hover:bg-black"
                  >
                    Home
                  </Link>

                  <Link
                    to="/tourism"
                    className="hover:underline group-hover:transition-all duration-500 px-2 hover:tracking-[4px] text-black hover:text-white hover:bg-black"
                  >
                    Tourism
                  </Link>

                  <Link
                    to="/fitness"
                    className="hover:underline group-hover:transition-all duration-500 px-2 hover:tracking-[4px] text-black hover:text-white hover:bg-black"
                  >
                    Fitness
                  </Link>

                  <Link
                    to="/technology"
                    className="hover:underline group-hover:transition-all duration-500 px-2 hover:tracking-[4px] text-black hover:text-white hover:bg-black"
                  >
                    Technology
                  </Link>

                  <Link
                    to="/hollywood"
                    className="hover:underline group-hover:transition-all duration-500 px-2 hover:tracking-[4px] text-black hover:text-white hover:bg-black"
                  >
                    Hollywood
                  </Link>

                  <Link
                    to="/food"
                    className="hover:underline group-hover:transition-all duration-500 px-2 hover:tracking-[4px] text-black hover:text-white hover:bg-black"
                  >
                    Food
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
      <Outlet />
    </>
  );
};
