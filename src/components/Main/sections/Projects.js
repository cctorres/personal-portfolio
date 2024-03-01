import { useEffect, useState } from 'react';
import './Projects.css';
import weatherImage from '../../../assets/images/projects-weather-api.png';
import { ReactComponent as ArrowLeft } from '../../../assets/icons/icon-arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../../assets/icons/icon-arrow-right.svg';

function Projects() {

    const [currentIndex, setCurrentIndex] = useState(0);

    function nextSlide() {
        const slideQty = document.querySelectorAll(".carousel .projects-item").length;
        setCurrentIndex(prevIndex => (prevIndex + 1) % slideQty);
    }

    function prevSlide() {
        const slideQty = document.querySelectorAll(".carousel .projects-item").length;
        setCurrentIndex(prevIndex => (prevIndex - 1 + slideQty) % slideQty);
    }

    useEffect(() => {
        const projectsItems = document.querySelectorAll('.carousel .projects-item');
        function showSlide(index) {
            projectsItems.forEach(item => {
                item.classList.remove('active');
            });
            projectsItems[index].classList.add('active');
        }

        showSlide(currentIndex);
    }, [currentIndex]);

    return (
        <div className="projects-content section" id="projects">
            <div className="carousel">
                <button id="prevButton" onClick={prevSlide}><ArrowLeft/></button>
                <div className="projects-item">
                    <h2>Weather API</h2>
                    <img src={weatherImage} alt='Weather API Project' />
                    <p>Web application using weatherapi.com to display weather forecast details.</p>
                    <div className='projects-item-buttons'>
                        <a href='https:google.com' target='_blank' rel='noreferrer noopener'>1</a>
                        <a href='https:google.com' target='_blank' rel='noreferrer noopener'>1</a>
                    </div>
                </div>
                <div className="projects-item">
                    <h2>Weather API</h2>
                    <img src={weatherImage} alt='Weather API Project' />
                    <p>Web application using weatherapi.com to display weather forecast details.</p>
                    <div className='projects-item-buttons'>
                        <a href='https:google.com' target='_blank' rel='noreferrer noopener'>2</a>
                        <a href='https:google.com' target='_blank' rel='noreferrer noopener'>2</a>
                    </div>
                </div>
                <div className="projects-item">
                    <h2>Weather API</h2>
                    <img src={weatherImage} alt='Weather API Project' />
                    <p>Web application using weatherapi.com to display weather forecast details.</p>
                    <div className='projects-item-buttons'>
                        <a href='https:google.com' target='_blank' rel='noreferrer noopener'>3</a>
                        <a href='https:google.com' target='_blank' rel='noreferrer noopener'>3</a>
                    </div>
                </div>
                <button id="nextButton" onClick={nextSlide}><ArrowRight/></button>
            </div>
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
