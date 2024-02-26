

import './Projects.css';
import weatherImage from '../../../assets/images/projects-weather-api.png';

function Projects() {

    return (
        <div className="projects-content section" id="projects">
            <h1>Projects</h1>
            <div className="projects-items">
                    
                    <div className="projects-item">
                        <h2>Weather API</h2>
                        <img src={weatherImage} alt='Weather API Project' />
                        <p>Web application using weatherapi.com to display weather forecast details.</p>
                        <div className='projects-item-buttons'>
                            <a href='https:google.com' target='_blank' rel='noreferrer noopener'>
                                DEMO
                            </a>
                            <a href='https:google.com' target='_blank' rel='noreferrer noopener'>
                                REPO
                            </a>
                        </div>
                    </div>
                    
                    
                    <div className="projects-item">
                        <h2>Weather API</h2>
                        <img src={weatherImage} alt='Weather API Project' />
                        <p>Web application using weatherapi.com to display weather forecast details.</p>
                        <div className='projects-item-buttons'>
                            <a href='https:google.com' target='_blank' rel='noreferrer noopener'>
                                DEMO
                            </a>
                            <a href='https:google.com' target='_blank' rel='noreferrer noopener'>
                                REPO
                            </a>
                        </div>
                    </div>    

            </div>
            <div className='contact-content'><h2>Don't forget. We're just a message away.</h2>
                <div className='contact-buttons'>
                    <a href='mailto:c.torresalzate@gmail.com.com' rel='noreferrer noopener'>
                        Say Hello!
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;
