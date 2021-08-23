import * as React from "react"
import { Link } from "gatsby"

const Header = (props) => (
  <div className="py-6 flex flex-col justify-center">
    <div className="self-center pb-6">
      <Link className="text-2xl 2xl:text-4xl font-bold">HAIR BY SARAH</Link>
    </div>
    <div className="flex flex-row self-center gap-x-4  text-md lg:text-lg lg:gap-x-16  2xl:text-2xl font-medium">
      <Link>HOME</Link>
      <Link>GALLERY</Link>
      <Link>BOOK</Link>
      <Link>CONTACT</Link>
    </div>
  </div>
)

export default Header
