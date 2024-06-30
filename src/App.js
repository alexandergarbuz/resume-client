import Certifications from './Certifications';
import ContactInformation from './ContactInformation';
import Education from './Education';


import SkillList from './SkillList';
import WorkHistory from './component/WorkHistory';
import Edorsements from './component/Endorsements';
import Footer from './Footer';


function App() {
  return (
    <div className="container">
      <ContactInformation apiUrl="https://resume-service.aws.garbuz.com/api/resume/show/1"/>
      <SkillList apiUrl="https://resume-service.aws.garbuz.com/api/resume/skills/1" />
      <Edorsements apiUrl="https://resume-service.aws.garbuz.com/api/resume/show/1" imageBaseUrl="https://resume-service.aws.garbuz.com/img/"/>
      <WorkHistory apiUrl="https://resume-service.aws.garbuz.com/api/resume/show/1"/>
      <Education apiUrl="https://resume-service.aws.garbuz.com/api/resume/show/1"/>
      <Certifications apiUrl="https://resume-service.aws.garbuz.com/api/resume/show/1"/>
      <Footer apiUrl="https://resume-service.aws.garbuz.com/api/resume/show/1"/>
    </div>
  );
}

export default App;
