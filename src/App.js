
import Certifications from './Certifications';
import ContactInformation from './ContactInformation';
import Education from './Education';
import WorkExperience from './WorkExperience';
import Footer from './Footer';


import SkillList from './SkillList';
import Recommendations from './Recommendations';


function App() {
  return (
    <div className='w3-content'>
      <ContactInformation />
      <SkillList apiUrl="https://resume-service.aws.garbuz.com/api/resume/skills/1" />
      <Recommendations apiUrl="https://resume-service.aws.garbuz.com/api/resume/show/1" imageBaseUrl="https://resume-service.aws.garbuz.com/img/"/>
      <WorkExperience/>
      <Certifications/>
      <Education/>
      <Footer/>
      
    </div>
  );
}

export default App;
