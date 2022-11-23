// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div className="course-container">
      <div className="title-time-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-icon-container">
          <AiFillClockCircle className="gi-icon" />
          <p className="duration-head">{duration}</p>
        </div>
      </div>
      <p className="course-desc">{description}</p>
      <ul className="unorder-list-container">
        {tagsList.map(eachItem => (
          <li className="list-tags-container">
            <p>{eachItem.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
