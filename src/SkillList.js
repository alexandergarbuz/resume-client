import React, { useEffect, useState } from 'react';

function SkillList (props) {
    const [skillsData, setSkillsData] = useState([]);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const response = await fetch(props.apiUrl);
                if (!response.ok) {
                    throw new Error('Failed to fetch skills');
                }
                const skills = await response.json();
                setSkillsData(skills);
            } catch (error) {
                console.error('Error fetching skills:', error);
            }
        };

        fetchSkills();
    }, []);

    // Function to render skills grouped by skill group name
    function renderSkills() {
        return skillsData.map(skillGroup => (
            <div key={skillGroup.id}>
                <dt>{skillGroup.name}</dt>
                <dd>
                    {skillGroup.skills.map((skill, index) => (
                        <span key={skill.id}>
                            {skill.name}{index !== skillGroup.skills.length - 1 ? ',' : ';'}
                        </span>
                    ))}
                </dd>
            </div>
        ));
    };

    return (
        <div id="skillList">
            <h2>Technical Skills</h2>
            <dl>
            {renderSkills()}
            </dl>
        </div>
    );
};

export default SkillList;