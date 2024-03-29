/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/gabriel-pi%C3%B1ero-a151321a9/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/GabrielPy28" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials