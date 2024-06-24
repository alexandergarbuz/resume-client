import React, { useState, useEffect } from 'react';

function Job (props) {
  const[isVisible, setVisible] = useState(false);
  const job = props.job;
  const jobIndex = props.jobIndex;
    
  function toggleVisibility( ) {
    setVisible(!isVisible);
  }
  return (
    <div className="Job">
      <h3>{job.title} @ {job.name} ({job.startDate} - {job.endDate})
        &nbsp;{(job.responsibilities.length > 0) && 
        <a
          onClick={toggleVisibility}
          title={isVisible ? 'Collapse' : 'Expand'}
          >
          <i className="fa fa-plus expandCollapseIcon" style={{visibility: (isVisible) ? 'hidden' : 'visible', display: (isVisible) ? 'none' : 'inline'}}/>
          <i className="fa fa-minus expandCollapseIcon" style={{visibility: (isVisible) ? 'visible' : 'hidden'}}/>
          </a>}
      </h3>
          <div id={'#jobId' + jobIndex} style={{display: (isVisible) ? 'block' : 'none'}}>
            <div id={'#responsibilitiesId' + jobIndex}>
              <ul>
                {job.responsibilities.map((responsibility, responsibilityIndex) =>(
                    <li key={responsibilityIndex}>{responsibility}</li>
                ))}
              </ul>
            </div>
            <div id={'#achievementsId' + jobIndex}>
              <h4>Key Achievements</h4>
              <ul>
                {job.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex}>{achievement}</li>
                ))}
              </ul>
          </div>
        </div>
    </div>
  );
}
function JobList(props) {
  const jobList = props.jobList;
  return (
      <div>
      {jobList.map((job, jobIndex) => (
        <div key={jobIndex}>
          <Job job={job} jobIndex={jobIndex}/>
        <hr/>
      </div>
      ))}
    </div>

  );
}

function WorkExperience() {

        const [workExperience, setWorkExperience] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://garbuz.com/workHistoryService.php');
            console.log('Response:' + response.json)
            if (!response.ok) {
              throw new Error(response.json);
            }
            const jsonData = await response.json();
            const sortedWorkExperience = jsonData.workExperience.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
            
            setWorkExperience(sortedWorkExperience);
            setLoading(false);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);

      if (loading) {
        return <div className='w3-content'>
          
          Loading Data...
            <div>
              <img src='./img/react-logo.png' />
            </div>
          </div>;
      }
    
      if (error) {
        return 
          <div className='w3-margin w3-panel w3-red'>
            <h1>Failed to fetch data from remote service</h1>
            <p>Error: {error.message}</p>
          </div>;
      }

return (

    <div id="workExperience" className="w3-content">
      <h2>Work Experience</h2>
      <JobList jobList={workExperience}/>
    </div>

);


}

export default WorkExperience;