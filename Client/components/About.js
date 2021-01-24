import React from 'react'

const About = () => {
  return (
    <div>
      <h1>👩‍💻 About 👩‍💻</h1>
      <br />

      {/* Moving image banner  */}
      <div className="example1">
        <h3>
          <img src="images/iconPic.png" alt="tech together image" width="200" />{' '}
          <img src="images/iconPic.png" alt="tech together image" width="200" />
        </h3>
      </div>
      <br />
      <div>
        {/* <!-- body of text--> */}
        <p>
          This project is part of TechTogether Seattle’s first all-female,
          femme, and non-binary <span className="pinkText">hackathon!</span>
          <br />
          <br />
          The theme for TechTogether Seattle 2021 is{' '}
          <span className="blueText">Always Together, Never Apart.</span>
          <br />
          <span className="pinkText">
            Just by the nature of creating this app
          </span>{' '}
          we have demonstrated that we are all closer than we thought we were to
          a friend 👩‍👩‍👧‍👧
          <br />
          <br />
          <small>
            “TechTogether Seattle is committed to{' '}
            <span className="blueText">
              empowering gender-marginalized youth
            </span>{' '}
            in the STEM field, and provide them with safe spaces to learn,
            build, and hack.”
          </small>
          <br />
          <br />
          The developers behind this page are all women commited to{' '}
          <span className="pinkText">
            redefining the hacker stereotypes
          </span>{' '}
          reproduced across interdisciplinary technology fields 🖥✨
          <br />
          {/* <!-- icons of "us" :) --> */}
          <div>
            💞{' '}
            <a href="https://www.linkedin.com/in/leslie-meng/" target="_blank">
              <img src="images/blue.png" width="100" alt="avatar" />
            </a>
            <a
              href="https://www.linkedin.com/in/hannah-wilson-63a4661b5/"
              target="_blank"
            >
              <img src="images/pink.png" width="100" alt="avatar" />
            </a>
            <a
              href="https://www.linkedin.com/in/kelsey-m-schroeder/"
              target="_blank"
            >
              <img src="images/green.png" width="100" alt="avatar" />
            </a>
            <img src="images/orange.png" width="110" alt="avatar" /> 💞
          </div>
          <br />
          <p>
            🔎 To learn more about TechTogether, visit{' '}
            <a href="https://techtogether.io/" target="_blank">
              this website.
            </a>
          </p>
        </p>
      </div>

      {/* <!-- pic of Seattle skyline --> */}
      <span>
        <img src="images/seattlePic.png" alt="seattle image" />
      </span>
    </div>
  )
}

export default About
