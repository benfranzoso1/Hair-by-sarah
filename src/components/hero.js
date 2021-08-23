import * as React from "react"
import { Link } from "gatsby"

const Hero = (props) => (

    <div className="relative">
      <div className="mx-auto">
        <div className="relative sm:overflow-hidden">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src="https://i.pinimg.com/564x/f3/ff/d8/f3ffd866d396e72cda4f22ed146cea75.jpg"
              alt="People working on laptops"
            />
            <div className="absolute inset-0 bg-beige-dark opacity-60" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="text-center text-4xl font-extrabold sm:text-5xl lg:text-6xl text-white">
             Example Text
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
              amet fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <Link
                  href="#"
                  className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-bold rounded-md shadow-sm bg-white hover:bg-gray-100 sm:px-8"
                >
                  BOOK ME
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

)

export default Hero