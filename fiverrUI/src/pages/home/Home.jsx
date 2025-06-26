import React from 'react'
import './Home.scss'
import Featured from '../../components/featured/Featured.jsx'
import TrustedBy from '../../components/trustedBy/TrustedBy.jsx'
import Slide from '../../components/slide/Slide.jsx'
import { cards, projects } from "../../data.js"
import CategoryCard from '../../components/categoryCard/CategoryCard.jsx';
import ProjectCard from '../../components/projectCard/ProjectCard.jsx'
const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowScroll={5}>
        {
          cards.map(card => (
            <CategoryCard key={card.id} item={card} />
          )
          )
        }
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance at your fingertips</h1>
            <div className="title">
              <img src="./images/check.png" alt="" />
              The best for every budget
            </div>
            <p>For high quality services at every price point. No hourly rates, just project-based pricing.</p>

            <div className="title">
              <img src="./images/check.png" alt="" />
              Quality work done quickly
            </div>
            <p>Find the right freelancer to begin working on your project within minutes.</p>

            <div className="title">
              <img src="./images/check.png" alt="" />
              Protected payments, every time
            </div>
            <p>Always know what you'll pay upfront. Your payment isn't released until you approve the work.</p>
          </div>

          <div className="item">
            <video src="./images/video.mp4" controls></video>
          </div>
        </div>
      </div>

      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>fiverr business</h1>
            <h1>A business solution designed for teams</h1>
            <p>Upgrade to a curated experience packed with tools and benefits, dedicated to businesses.</p>

            <div className="title">
              <img src="./images/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src="./images/check.png" alt="" />
              Get matched with the perfect talent for your needs
            </div>

            <div className="title">
              <img src="./images/check.png" alt="" />
              Manage teamwork and collaboration in one place
            </div>

            <button>Explore Fiverr Business</button>
          </div>

          <div className="item">
            <img src="./images/feauturesImg.jpg" alt="" />
          </div>
        </div>
      </div>

        <Slide slidesToShow={5} arrowScroll={5}>
        {
          projects.map(project => (
            <ProjectCard key={project.id} item={project} />
          )
          )
        }
      </Slide>
    </div>
  )
}

export default Home