import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeLogos from '../components/home-logos'
import Slider from '../components/Slider'

const IndexPage = () => (
  <Layout>
    <SEO title="Home"
      keywords={[
        `fasteners`,
        `construction`,
        `tools`,
      ]}
    />
    <Slider />
    <h1>Top Products</h1>
    <div className="page-content">
      <HomeLogos />
    </div>
  </Layout>
)

export default IndexPage
