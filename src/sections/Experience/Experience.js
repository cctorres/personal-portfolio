import './Experience.css';
import ExperienceItem from 'components/Experience/Experience';
import TechnologyList from 'components/Technologies/Technologies';

function Experience() {
    
    const experienceData = [
        {
            date: "2022 - Present",
            company: "Perficient",
            description: [
                "I worked for a language learning company and manufacturing educational books. Worked in a team of 10+ people doing development, implementation and improvements in the SEO of the site, accessibility and bug fixes on the site utilizing Adobe Commerce, PHP, HTML, CSS and Javascript.",
                "I generated impact by improving and documenting the understanding of on-site processes and the work group. I also developed tools to filter and visualize system data clearly and effectively, saving time and eliminating dependency on others among other things."
            ]
        },
        {
            date: "2013 - 2014",
            company: "Auros Colombia",
            description: [
                "I worked as a digitizer and printer of advertising pieces, in addition to advising clients.",
                "Through my tasks I was able to help the company have better service and work flow in one of its branches, maintaining good inventory management, managing money and helping clients to carry out their advertising projects."
            ]
        }
    ];

    const technologiesData = {
        expertise: [
            "Adobe Commerce",
            "Magento",
            "PHP",
            "Javascript",
            "React",
            "Docker",
            "Git"
        ],
        exploration: [
            "Typescript",
            "Laravel",
            "Marketo"
        ]
    };

    return (
        <div className="experience-content section" id="experience">
            <div className='exprience-items'>
                {experienceData.map((experience, index) => (
                    <ExperienceItem
                        key={index}
                        date={experience.date}
                        company={experience.company}
                        description={experience.description}
                    />
                ))}
            </div>

            <TechnologyList title="Technologies expertise" technologies={technologiesData.expertise} />

            <TechnologyList title="Technologies exploration" technologies={technologiesData.exploration} />
        </div>
    );
}

export default Experience;
