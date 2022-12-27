import React from "react";
import logoImage from '../asserts/Netflix-Logo.wine.png'

const Navbar = () => {
  return (
    <React.Fragment>
      <section>
        <div className="h-20 flex justify-between items-center px-10 navWrapper md:w-4/5 md:mx-auto">
          {/* logo section */}
          <div>
          <img 
            className="w-32 h-32 md:w-52"
            src={logoImage} alt='logo-image'/>
          </div>

          {/* large screen */}
          <div></div>

          {/* small screen */}
          <div className="flex space-x-4">
            <div>
            <select className="h-11 bg-transparent text-white">
                    <option>English</option>
                    <option>French</option>
                </select>
            </div>
            <div>
            <button className="px-4 py-3 bgRed capitalize text-sm text-white font-semibold">
                sign in
              </button>
            </div>
          </div>

        </div>
      </section>
    </React.Fragment>
  );
};

export default Navbar;
