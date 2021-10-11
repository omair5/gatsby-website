import React from "react"
import Hero from "../components/Home/Hero"
import Layout from '../components/Layout'
import Trips from "../components/Trips"

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Trips />
      </Layout>
    </>
  )
}
