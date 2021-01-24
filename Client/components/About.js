import React from 'react'

const About = () => {
  return (
    <div>
      <h1>👩‍💻 About 👩‍💻</h1>
      <br />
      <img src="images/iconPic.png" alt="tech together image" width="200" />
      <br /> <br />
      <div>
        <p>
          This project is part of TechTogether Seattle’s first all-female,
          femme, and non-binary <span className="pinkText">hackathon!</span>
          <br />
          <br />
          The theme for TechTogether Seattle 2021 is{' '}
          <span className="blueText">Always Together, Never Apart.</span>
          <br />
          Just by the nature of creating this app we have demonstrated that we
          are all closer than we thought we were to a friend 👩‍👩‍👧‍👧
          <br />
          <br />
          <small>
            “TechTogether Seattle is committed to empowering gender-marginalized
            youth in the STEM field, and provide them with safe spaces to learn,
            build, and hack.”
          </small>
          <br />
          <br />
          The developers behind this page are all women commited to redefining
          the hacker stereotypes reproduced across interdisciplinary technology
          fields 🖥✨
          <br />
          <div>
            💞 <img src="images/blue.png" width="100" alt="avatar" />
            <img src="images/pink.png" width="100" alt="avatar" />
            <img src="images/green.png" width="100" alt="avatar" />
            <img src="images/orange.png" width="110" alt="avatar" /> 💞
          </div>
          <br />
          <p>
            🔎 To learn more about TechTogether, visit{' '}
            <a href="https://techtogether.io/" target="_blank">
              this website
            </a>
            .
          </p>
        </p>
      </div>
      <span>
        <img src="images/seattlePic.png" alt="seattle image" />
      </span>
    </div>
  )
}

export default About
