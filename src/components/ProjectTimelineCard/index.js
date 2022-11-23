// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    duration,
    description,
    projectUrl,
  } = projectDetails

  return (
    <div className="project-container">
      <img src={imageUrl} alt="project" className="project-img" />
      <div className="title-time-container">
        <h1>{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar className="icon-img" />
          <p className="proj-duration">{duration}</p>
        </div>
      </div>
      <p className="project-desc">{description}</p>
      <a href={projectUrl} className="projectLink">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
