import { useContext, useState } from 'react'
import { ThemeContext } from '../../context/theme'
import { projects, skills, contact } from '../../staticData'

import './Navbar.css'

const Navbar = (props) => {
  const resume = './resume.pdf'
  console.log(resume, 'resume=ddddddddddddd')
  const { themeName, toggleTheme } = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)
  const [showPopup, setShowPopup] = useState(false);


  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        {projects.length ? (
          <li className='nav__list-item'>
            <a
              href='#projects'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <a
              href='#skills'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Skills
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Contact
            </a>
          </li>
        ) : null}

      </ul>
    </nav>
  )
}

export default Navbar
