import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <img
        src="images/hackathonLogo.png"
        alt="hackathon logo"
        width="100"
        className="hackathonIcon"
      />
      <a
        href="https://github.com/HKLT-Together-Hackaton/Notes-For-Friends"
        className="githubIcon"
        style={{textDecoration: 'none'}}
        target="_blank"
      >
        <i className="fab fa-github"></i>
      </a>
    </div>
  )
}

export default Footer
