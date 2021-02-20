import React from 'react'
import { Button } from './Button'
import '../App.css'
import './HeroSection.css'
import vid1 from '../videos/video-1.mp4'

function HeroSection() {
    return (
        <div className="hero-container">
            <video src={vid1} autoPlay loop muted></video>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you watching</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle="btn--outline" buttonSize="btn--large">
                    GET STARTED
                </Button>
                <Button className='btns' buttonStyle="btn--primary" buttonSize="btn--medium">
                    WATCH NOW <i className="far fa-play-circle"/>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
