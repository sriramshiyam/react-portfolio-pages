import './index.scss'
import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div>
              <FontAwesomeIcon
                className="face1"
                icon={faAngular}
                color="#DD0031"
              />
            </div>
            <div>
              <FontAwesomeIcon
                className="face2"
                icon={faHtml5}
                color="#F06529"
              />
            </div>
            <div>
              <FontAwesomeIcon
                className="face3"
                icon={faCss3}
                color="#28a4d9"
              />
            </div>
            <div>
              <FontAwesomeIcon
                className="face4"
                icon={faReact}
                color="#5ed4f4"
              />
            </div>
            <div>
              <FontAwesomeIcon
                className="face5"
                icon={faJsSquare}
                color="#efd81d"
              />
            </div>
            <div>
              <FontAwesomeIcon
                className="face6"
                icon={faGithub}
                color="#ec4328"
              />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
