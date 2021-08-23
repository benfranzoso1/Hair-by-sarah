import React from "react"




  
  export default function AboutSection() {
    return (
        <div className="relative bg-beige-dark">
        <div className="h-96 md:absolute md:left-0 md:h-full md:w-1/2">
          <img
            className="h-full w-full object-cover"
            src="https://i.pinimg.com/564x/36/99/cb/3699cbfd4fad5a811866eb936c81d17a.jpg"
            alt=""
          />
           <div className="absolute inset-0 bg-beige-dark opacity-60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-32">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">ABOUT ME</h2>
            <p className="mt-2 text-white text-3xl font-extrabold  sm:text-4xl">SARAH JANE WHITE</p>
            <p className="mt-3 text-lg text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
              scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum
              tincidunt duis.
            </p>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                >
                  View Gallery 
                  
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }