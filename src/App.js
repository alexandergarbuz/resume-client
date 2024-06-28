import Certifications from './Certifications';
import ContactInformation from './ContactInformation';
import Education from './Education';
import Footer from './Footer';


import SkillList from './SkillList';
import Recommendations from './Recommendations';
import WorkHistory from './component/WorkHistory';
import Edorsements from './component/Endorsements';


function App() {
  return (
    <div className="container">
      <ContactInformation />
      <SkillList apiUrl="https://resume-service.aws.garbuz.com/api/resume/skills/1" />
      <Edorsements  apiUrl="https://resume-service.aws.garbuz.com/api/resume/show/1" imageBaseUrl="https://resume-service.aws.garbuz.com/img/"/>
      <WorkHistory  apiUrl="https://resume-service.aws.garbuz.com/api/resume/show/1"/>
      <Certifications/>
      <Education  apiUrl="https://resume-service.aws.garbuz.com/api/resume/show/1"/>
      <Footer/>
      
    </div>
  );
}

export default App;
