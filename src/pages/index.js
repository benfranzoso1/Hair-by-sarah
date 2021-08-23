import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Hero from "../components/hero"
import LogoCloud from "../components/logocloud"
import AboutSection from "../components/about"
import Faq from "../components/faq"



const IndexPage = () => (
  <Layout>
    <Hero></Hero>
    <LogoCloud></LogoCloud>
    <AboutSection></AboutSection>
    <Faq></Faq>
  </Layout>

)

export default IndexPage
