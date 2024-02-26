import { useEffect } from 'react';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import './Main.css';

function Main({ setActiveMenuSection }) {

    function selectActiveSection(numero, numCuartos) {
        
        var longitudCuarto = 1 / numCuartos;
        var iterator = longitudCuarto;
        var counter = 1;
        while (iterator <= 1 ) {
            if(numero <= iterator) {
                return counter
            }
            counter = counter+1;
            iterator = iterator+longitudCuarto;
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
