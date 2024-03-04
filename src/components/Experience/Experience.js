import './Experience.css';

function ExperienceItem({ date, company, description }) {
    return (
        <div className="experience-item">
            <h3>{date}</h3>
            <div className="experience-description">
                <h3>{company}</h3>
                {description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </div>
    );
}

export default ExperienceItem;