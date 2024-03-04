import { useEffect, useState } from 'react';
import { ReactComponent as ArrowLeft } from '../../assets/icons/icon-arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/icon-arrow-right.svg';
import './Carousel.css';

function Carousel({ children }) {
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
        <div className="carousel">
            <button id="prevButton" onClick={prevSlide}><ArrowLeft/></button>
            {children.map((child, index) => (
                <div key={index} className={`projects-item ${index === currentIndex ? 'active' : ''}`}>
                    {child}
                </div>
            ))}
            <button id="nextButton" onClick={nextSlide}><ArrowRight/></button>
        </div>
    );
}

export default Carousel;
