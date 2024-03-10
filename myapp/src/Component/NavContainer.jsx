import React from 'react'

  export default function NavContainer() {
    return (
      <>
        {/* Hero Section: Image Side with Simple Header */}
        <div className="relative overflow-hidden bg-white dark:bg-gray-900 dark:text-gray-100">
          {/* Main Header */}
        
  
          {/* Hero Content */}
          <div className="container relative mx-auto flex flex-col space-y-16 px-4 py-16 text-center lg:flex-row lg:space-y-0 lg:px-8 lg:py-32 lg:text-left xl:max-w-7xl">
            <div className="lg:flex lg:w-1/2 lg:items-center">
              <div>
                <h1 className="mb-4 text-4xl font-black text-black dark:text-white">
                 Pregnancy Help
                  <span className="text-teal-600 flex dark:text-teal-500">
                    &
                  </span>
                  <span className="text-teal-600 flex dark:text-teal-500">
                    Vaccination Tracker
                  </span>
                </h1>
                <h2 className="text-xl font-medium leading-relaxed text-gray-700 dark:text-gray-300">
                Ensuring Healthy Beginnings: Navigating Pregnancy and Essential Vaccinations for Your Baby
                </h2>
                <div className="flex flex-col justify-center space-y-2 pb-16 pt-10 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0 lg:justify-start">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center space-x-2 rounded-lg border border-teal-700 bg-teal-700 px-7 py-3.5 font-semibold leading-6 text-white hover:border-teal-600 hover:bg-teal-600 hover:text-white focus:ring focus:ring-teal-400 focus:ring-opacity-50 active:border-teal-700 active:bg-teal-700 dark:focus:ring-teal-400 dark:focus:ring-opacity-90"
                  >
                    <svg
                      className="hi-mini hi-arrow-down-tray inline-block size-5 opacity-75"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke='currentColor'
                      fill="none"
                      aria-hidden="true"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    >
                       <path d="M18.525 17.177l-4.02-4.02a6.5 6.5 0 1 0-.708.708l4.02 4.02a.5.5 0 0 0 .707-.708zM10 16a6 6 0 1 1 6-6 6 6 0 0 1-6 6z"/>


                    </svg>
                    <span>Track Your Vaccinations Here</span>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-7 py-3.5 font-semibold leading-6 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
                  >
                    <span>Learn more</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:ml-16 lg:flex lg:w-1/2 lg:items-center lg:justify-center">
              <div className="relative mx-5 lg:w-96">
                <div className="bg-tranparent absolute left-0 top-0 -ml-20 -mt-16 size-40 rounded-full border border-teal-200 dark:border-teal-900 lg:size-72" />
                <div className="bg-tranparent absolute left-0 top-0 -ml-14 -mt-20 size-40 rounded-full border border-teal-100 dark:border-teal-950 lg:size-72" />
                <div className="bg-tranparent absolute bottom-0 right-0 -mb-16 -mr-20 size-40 rounded-full border border-teal-200 dark:border-teal-900 lg:size-72" />
                <div className="bg-tranparent absolute bottom-0 right-0 -mb-20 -mr-14 size-40 rounded-full border border-teal-100 dark:border-teal-950 lg:size-72" />
                <div className="absolute inset-0 -m-6 -rotate-2 rounded-xl bg-gray-200 dark:bg-gray-800" />
                <div className="absolute inset-0 -m-6 rotate-1 rounded-xl bg-teal-800 bg-opacity-75 shadow-inner dark:bg-teal-900 dark:bg-opacity-75" />
                <img
                  src="https://img.freepik.com/free-vector/cartoon-vaccination-campaign-illustration_52683-62384.jpg?w=740&t=st=1710017657~exp=1710018257~hmac=64972c5a8ce32c09ed6ec76489172e39b84dff5b8b77584d3b7c0c644cb7488f"
                  className="relative mx-auto rounded-lg shadow-lg"
                  alt="Hero Image"
                />
              </div>
            </div>
          </div>
          {/* END Hero Content */}
        </div>
        {/* END Hero Section: Image Side with Simple Header */}
      </>
    );
  }
  