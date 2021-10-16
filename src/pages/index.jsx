import React from "react"
import Hero from "../components/Home/Hero"
import Layout from '../components/Layout'
import PeopleSayAboutUs from "../components/PeopleSayAboutUs"
import SignUp from "../components/SignUp"
import Trips from "../components/Trips"
import WhyChooseUs from "../components/WhyChooseUs"

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Trips />
        <PeopleSayAboutUs />
        <WhyChooseUs />
        <SignUp />
      </Layout>
    </>
  )
}
