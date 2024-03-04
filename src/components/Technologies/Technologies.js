function TechnologyList({ title, technologies }) {
    return (
        <div className='technologies'>
            <h2>{title}</h2>
            <div>
                {technologies.map((tech, index) => (
                    <p key={index}>{tech}</p>
                ))}
            </div>
        </div>
    );
}

export default TechnologyList;