import React from "react";

const HeroPage = () => {
  return (
    <React.Fragment>
      <section>
        <div className="h-screen -mt-20 text-white px-10 space-y-5 centered flex-col md:w-2/3 md:mx-auto">
          <p className="text-4xl font-bold md:text-6xl">
            Unlimited films, TV <br /> programmes and more
          </p>
          <p className="text-xl md:text-3xl">
            Watch anywhere. Cancel at anytime
          </p>
          <div className="text-xl md:text-2xl md:flex">
            <p>Ready to watch? Enter your email to </p>
            <p> or restart your membership</p>
          </div>

          <div className="centered flex flex-col space-y-5 md:space-y-0 md:flex-row  ">
          <input className="px-20 py-3.5 md:px-48 border-2 md:py-6" />
          <button
              type="button"
              className="px-5 py-3.5 text-white bgRed hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm text-center inline-flex items-center md:px-10 md:py-5 md:text-3xl"
            >
              Get Started
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              
            </button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HeroPage;
