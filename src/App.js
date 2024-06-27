
import Certifications from './Certifications';
import ContactInformation from './ContactInformation';
import Education from './Education';
import WorkExperience from './WorkExperience';
import Footer from './Footer';


import SkillList from './SkillList';
import Recommendations from './Recommendations';
import WorkHistory from './component/WorkHistory';


function App() {
  return (
    <div className="container">
      <ContactInformation />
      <SkillList apiUrl="https://resume-service.aws.garbuz.com/api/resume/skills/1" />
      <WorkHistory  apiUrl="https://resume-service.aws.garbuz.com/api/resume/show/1"/>
      <Recommendations apiUrl="https://resume-service.aws.garbuz.com/api/resume/show/1" imageBaseUrl="https://resume-service.aws.garbuz.com/img/"/>
      <Certifications/>
      <Education/>
      <Footer/>
      
    </div>
  );
}

export default App;
