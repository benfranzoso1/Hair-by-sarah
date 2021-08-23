import React from "react"
import { Link } from "gatsby"
import Banner from "./banner"
import Header from "./header"



export default function Layout({ children }) {
  return (

  <div className="max-w-screen-2xl mx-auto">
      <Banner
        cta="25% OF ALL NEW CUSTOMERS"
        url="/">
      </Banner>
      <Header></Header>
      <main>{children}</main>
      <div>footer</div>
  </div>

  )
}