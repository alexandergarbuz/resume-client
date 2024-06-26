
import Certifications from './Certifications';
import ContactInformation from './ContactInformation';
import Education from './Education';
import WorkExperience from './WorkExperience';
import Footer from './Footer';

import {CarouselComponent, Slide} from './Carousel';
import SkillList from './SkillList';


const slides = [
  new Slide("Erick Hallick", "Executive VP of Operations", "CPM Healthgrades", "https://www.linkedin.com/in/erick-hallick-498a8a5/", "6/24/2021", "Managed Alexander directly", "./img/Erick-Hallick-Avatar.jpg", "One of the most desirable characteristics in an employee is someone who takes complete ownership of the problem they are working on. It is very rare to find, but Alex had this in spades. I don't think a week went by without Alex knocking on my door with a new idea on how to improve the work we were doing and our company. Alex was asked to implement most of his ideas immediately and he made significant improvements to the processes and project management around our CRM database build projects. Communication and transparency with clients improved dramatically and I received several compliments regarding the improvements. When I declined to implement one of Alex's ideas he accepted my decision without issue. He was a joy to work with. I would hire Alex again without reservation."),
  new Slide("Aditya Prakash", "Project Manager", "American Family Insurance", "https://www.linkedin.com/in/aditya-prakash-csm/", "6/26/2021", "Worked with Alexander on the same team", "./img/Aditya-Prakash-Avatar.jpg", "Alex is focused and has a strategic approach to project management, which resulted in success deliverables assigned as part of the App migration program. Alex had shown responsiveness for the projects that he is responsible from end to end. During the App migration, program implementation I had pleasure to collaborate around agile principles, scrum framework including best project practices to ensure success of each other deliverables. He had shown great technical acumen that the project team members ran brainstorming ideas with him around challenges and blockers. Alex showed great people skills on how to motivate people or dial back when great necessary to make sure that project is completed on time. Alex would be great asset to any team."),
  new Slide("Jeff Fletcher", "Sr. Database Developer", "CPM Healthgrades","https://www.linkedin.com/in/jeff-fletcher-01b5b44/", "10/4/2012", "Reported directly to Alexander", "./img/Jeff-Fletcher-Avatar.jpg", "Alex is one of the best managers I have had the pleasure to work for. He truly believes it is his responsibility to look out for his team and to remove obstacles so that they may succeed, as well as ensure that objectives are accomplished. When I started with CPM there was an environmental issue that was affecting my performance, and while Alex could not eliminate the issue he did come up with ways to mitigate it and he followed up to see if there was an improvement. Alex lead the expansion of the development team, doubling its size; and he also created a project management team. Through all of this, Alex kept a sense of humor and helped everyone on the teams manage heavy workloads and tight deadlines. I've enjoyed working for Alex and look forward to more opportunities to do so.")
];

function App() {
  return (
    <div className='w3-content'>
      <ContactInformation />
      <SkillList apiUrl="https://resume-service.aws.garbuz.com/api/resume/skills/1" />
      <CarouselComponent title="Recommendations" slides={slides} />
      <WorkExperience/>
      <Certifications/>
      <Education/>
      <Footer/>
      
    </div>
  );
}

export default App;
