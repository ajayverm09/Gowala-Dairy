import React from 'react'
import BadgeRow from '../Components/HomeBadge'
import AchievementSection from '../Components/AboutAchievement'
import AboutCard from '../Components/AboutCards'
import WelcomeSection from '../Components/AboutWelcome'
import AboutHeroSection from '../Components/AboutHero'

const About = () => {
  return (
    <div className='mt-15'>
      <AboutHeroSection/>
      <WelcomeSection/>
      <AboutCard/>
      <AchievementSection/>
      <BadgeRow/>
    </div>
  )
}

export default About
