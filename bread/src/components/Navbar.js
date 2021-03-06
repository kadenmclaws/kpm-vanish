import React, { useState, useCallback, useEffect } from "react";
import { Link } from "gatsby";

const Navbar = () => {
  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback((e) => {
    const window = e.currentTarget;
    setY(window.scrollY);
  }, []);

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <nav
      className={`${
        y < 20
          ? "bg-transparent p-14"
          : "bg-white py-4 px-14 border-b-2 border-opacity-75 border-indigo"
      } transition-all duration-150`}
    >
      <div className="mx-auto">
        <div className="flex justify-between">
          <div className="flex items-center space-x-5 nav-left">
            <Link
              className="flex items-center space-x-2 no-custom-underline"
              to="#"
            >
              <svg
                width="35"
                height="40"
                viewBox="0 0 35 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.1981 20.8391C11.5189 20.6576 6.92392 19.381 6.92392 14.8496C6.92392 14.8496 22.1701 19.0285 22.6989 19.1669C23.2278 19.3052 27.9489 20.6505 27.9489 25.1496C27.9489 25.1496 12.877 21.021 12.1981 20.8391ZM17.4426 -1.39246e-09C12.1745 -1.39246e-09 8.41469 1.60972 8.41469 3.2378L8.41433 3.23706C8.41433 3.87858 8.83204 4.20452 9.51406 4.39068C10.991 4.79376 21.9523 7.7642 22.6753 7.99262C23.5458 8.2674 27.9406 9.43251 27.9497 13.9693L27.9371 13.9574C27.9371 13.9574 6.73204 8.08088 5.24055 7.74603C4.21524 7.51575 3.42665 7.72267 2.89185 8.2687C1.59261 9.59585 0 15.7049 0 20.054C0 31.633 6.92392 40 17.4308 40C22.6989 40 26.4587 38.3903 26.4587 36.7624C26.4587 36.1209 26.0414 35.7947 25.3592 35.6086C23.8822 35.2059 12.9315 32.1983 12.1981 32.007C11.4647 31.8153 6.92283 30.5651 6.92283 26.0172L29.6329 32.254C30.6583 32.4843 31.4468 32.2775 31.9814 31.7313C33.2808 30.4041 34.8734 24.2951 34.8734 19.946C34.8734 8.36715 27.9495 -1.39246e-09 17.4426 -1.39246e-09Z"
                  fill="#5156EA"
                />
              </svg>
              <span className="text-2xl font-bold uppercase site-title">
                Bread
              </span>
            </Link>
            <div className="items-center hidden pl-16 space-x-12 lg:flex">
              <Link to="#">For Businesses</Link>
              <Link to="#">For Consumers</Link>
            </div>
          </div>
          <div className="items-center hidden space-x-8 lg:flex">
            <Link to="#">Login</Link>
            <Link
              className="px-5 py-3 text-white transition-all duration-100 border-2 bg-indigo border-indigo hover:bg-white hover:text-indigo no-custom-underline"
              to="#"
            >
              Contact Us
            </Link>
          </div>
          <div className="lg:hidden">
            {/* could implement mobile menu icon and menu here */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
