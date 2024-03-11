import React from 'react';
import './Projects.css';
import Carousel from 'components/Carousel/Carousel';
import weatherImage from 'assets/images/projects-weather-api.png';

function Projects() {

    return (
        <div className="projects-content section" id="projects">
            <h1 className='mobile-title'>Projects</h1>
            <Carousel>
                <div>
                    <h2>Weather API</h2>
                    <img src={weatherImage} alt='Weather API Project' />
                    <p>Web application using weatherapi.com to display weather forecast details.</p>
                    <div className='projects-item-buttons'>
                        <a href='https:google.com' target='_blank' rel='noreferrer noopener'>1</a>
                        <a href='https:google.com' target='_blank' rel='noreferrer noopener'>1</a>
                    </div>
                </div>
                <div>
                    <h2>Weather API</h2>
                    <img src={weatherImage} alt='Weather API Project' />
                    <p>Web application using weatherapi.com to display weather forecast details.</p>
                    <div className='projects-item-buttons'>
                        <a href='https:google.com' target='_blank' rel='noreferrer noopener'>2</a>
                        <a href='https:google.com' target='_blank' rel='noreferrer noopener'>2</a>
                    </div>
                </div>
                <div>
                    <h2>Weather API</h2>
                    <img src={weatherImage} alt='Weather API Project' />
                    <p>Web application using weatherapi.com to display weather forecast details.</p>
                    <div className='projects-item-buttons'>
                        <a href='https:google.com' target='_blank' rel='noreferrer noopener'>3</a>
                        <a href='https:google.com' target='_blank' rel='noreferrer noopener'>3</a>
                    </div>
                </div>
            </Carousel>
            <div className='contact-content'>
                <h4>Don't forget. We're just a message away.</h4>
                <div className='contact-buttons'>
                    <a href="https://drive.google.com/file/d/16c2mjFgXio7HwBBhp4MqYX8ujbej2Qlg/view" target="_blank" rel="noreferrer noopener">See full CV</a>
                    <a href='mailto:c.torresalzate@gmail.com.com' rel='noreferrer noopener'>Say Hello!</a>
                </div>
            </div>
        </div>
    );
}

export default Projects;
