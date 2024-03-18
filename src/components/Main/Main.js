import { useEffect } from 'react';
import About from 'sections/About/About';
import Experience from 'sections/Experience/Experience';
import Projects from 'sections/Projects/Projects';
import './Main.css';

function Main({ setActiveMenuSection }) {

    function selectActiveSection(progress, childrenNumber) {
        
        var sectionRange = 1 / childrenNumber;
        var iterator = sectionRange;
        var counter = 1;
        if (progress > sectionRange*childrenNumber) {
            return childrenNumber;
        }
        while (iterator <= 1 ) {
            if(progress <= iterator) {
                return counter
            }
            counter = counter+1;
            iterator = iterator+sectionRange;
        }
    }

    useEffect(() => {
    const handleScroll = (event) => {
        const { scrollTop, scrollHeight, clientHeight } = event.target;
        const progress = scrollTop / (scrollHeight - clientHeight);
        const element = event.target;
        const childrenNumber = element.querySelectorAll(".section").length;
        let activeSection = selectActiveSection(progress,childrenNumber)
        localStorage.setItem("activeSection", activeSection);
        setActiveMenuSection(activeSection);
    };

    const element = document.querySelector(".main-component");
    if (element) {
        element.addEventListener("scroll", handleScroll);
    }

    return () => {
        if (element) {
            element.removeEventListener("scroll", handleScroll);
        }
    };
}, [setActiveMenuSection]);


    return (
        <div className='main-component'>
            <About/>
            <Experience/>
            <Projects/>
        </div>
    );
}

export default Main;
