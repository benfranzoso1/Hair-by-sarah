import React from "react"
import { Link } from "gatsby"



export default function Banner(props) {
  return (

    <div className="relative bg-beige-light">
        {/* Create spacing container */}
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="text-center">
                <p className="font-medium text-white">
                    <span>{props.cta}<Link to={props.url} className="pl-3 font-bold underline">LEARN MORE</Link></span> 
                </p>
            </div>
        </div>
    </div>

  )
}