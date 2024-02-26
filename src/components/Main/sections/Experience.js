import './Experience.css';

function Experience() {

    return (
        <div className="experience-content section" id="experience">
            <h1>Experience</h1>
            <div className='exprience-items'>
                <div className="experience-item">
                    <h3>2022 - Present</h3>
                    <div className="experience-description">
                        <h3>Perficient</h3>
                        <p>I worked for a language learning company and manufacturing educational books. Worked in a team of 10+ people doing development, implementation and improvements in the SEO of the site, accessibility and bug fixes on the site utilizing Adobe Commerce, PHP, HTML, CSS and Javascript.</p>
                        <p>I generated impact by improving and documenting the understanding of on-site processes and the work group. I also developed tools to filter and visualize system data clearly and effectively, saving time and eliminating dependency on others among other things.</p>
                    </div>
                </div>
                <div className="experience-item">
                    <h3>2013 - 2014</h3>
                    <div className="experience-description">
                        <h3>Auros Colombia</h3>
                        <p>I worked as a digitizer and printer of advertising pieces, in addition to advising clients.</p>
                        <p>Through my tasks I was able to help the company have better service and work flow in one of its branches, maintaining good inventory management, managing money and helping clients to carry out their advertising projects.</p>
                    </div>
                </div>
            </div>
            <div className='technologies'>
                <h2>Technologies</h2>
                <div>
                    <p>Adobe Commerce</p>
                    <p>Magento</p>
                    <p>PHP</p>
                    <p>Javascript</p>
                    <p>React</p>
                    <p>Docker</p>
                    <p>Git</p>
                </div>
            </div>
            <a href="https://drive.google.com/file/d/16c2mjFgXio7HwBBhp4MqYX8ujbej2Qlg/view" target="_blank" rel="noreferrer noopener">See full CV</a>
        </div>
    );
}

export default Experience;
