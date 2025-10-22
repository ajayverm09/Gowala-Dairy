import React from 'react'
import HeroSection from '../Components/HomeHero'
import CardComponent from '../Components/HomeCards'
import GowalaSection from '../Components/HomeGowalaSection'
import ProductList from '../Components/HomeProduct'
import Gallery from '../Components/HomeImage'
import FeaturedRecipe from '../Components/HomeFeature'
import TeamSection from '../Components/HomeTeam'
import PricingSection from '../Components/HomePricing'
import BlogCard from '../Components/HomeBlog'
import BadgeRow from '../Components/HomeBadge'
const Home = () => {
  return (
    <div className='mt-15'>
      <HeroSection/>
      <CardComponent/>
      <GowalaSection/>
      <ProductList/>
      <Gallery/>
      <FeaturedRecipe/>
      <TeamSection/>
      <PricingSection/>
      <BlogCard/>
      <BadgeRow/>
    </div>
  )
}

export default Home
