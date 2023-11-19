import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'

function Landing() {
  return (
    <div className='landing-body'>
    <div className="body-wrap">
    <header className="site-header">
      <div className="container">
        <div className="site-header-inner">
          <div className="brand header-brand">
          </div>
        </div>
      </div>
    </header>
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-copy">
              <h1 className="hero-title mt-0">Online Quiz Application</h1>
              <p className="hero-paragraph">Online Quiz Application For MERN STACK Final Project </p><hr/>
              <br/><br/><h3 className='underline'>Team Members</h3>
              <p className="hero-names mt-2">Sai Surya Teja Reddy Pappu - 21BCE0890</p>
              <p className="hero-names">Pranay Vas CH - 21BCE3353</p>
              <p className="hero-names">Niteesh Varma CH - 21BCB0046</p>
              <p className="hero-names">Jaiveer Vasamsetti - 21BDS0308</p>
              <p className="hero-names">Prudhvi Abhi P - 21BCB0176</p><br />
              <div className="hero-cta"><Link className="button button-primary" to="/Login">Sign In</Link><Link className="button" to="/Register">Sign Up</Link></div>
            </div>
            <div className="hero-figure anime-element">
              <svg className="placeholder" width={528} height={396} viewBox="0 0 528 396">
                <rect width={528} height={396} style={{fill: 'transparent'}} />
              </svg>
              <div className="hero-figure-box hero-figure-box-01" data-rotation="45deg" />
              <div className="hero-figure-box hero-figure-box-02" data-rotation="-45deg" />
              <div className="hero-figure-box hero-figure-box-03" data-rotation="0deg" />
              <div className="hero-figure-box hero-figure-box-04" data-rotation="-135deg" />
              <div className="hero-figure-box hero-figure-box-05" />
              <div className="hero-figure-box hero-figure-box-06" />
              <div className="hero-figure-box hero-figure-box-07" />
              <div className="hero-figure-box hero-figure-box-08" data-rotation="-22deg" />
              <div className="hero-figure-box hero-figure-box-09" data-rotation="-52deg" />
              <div className="hero-figure-box hero-figure-box-10" data-rotation="-50deg" />
            </div>
          </div>
        </div>
      </section>
    </main></div>
    </div>
  )
}

export default Landing
