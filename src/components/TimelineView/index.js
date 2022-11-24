// Write your code here
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineViewHome = item => {
    if (item.categoryId === 'COURSE') {
      return <CourseTimelineCard key={item.id} courseDetails={item} />
    }
    return <ProjectTimelineCard key={item.id} projectDetails={item} />
  }

  return (
    <div className="timeline-bg-container">
      <h1 className="main-heading">
        MY JOURNEY OF <br /> <span>CCBP 4.0</span>
      </h1>
      <div className="chrone-container">
        <Chrono
          slideShow
          items={timelineItemsList} // here we pass the data what we want 
          mode="VERTICAL_ALTERNATING" // mode is change the components in alternative direction 
          theme={{secondary: 'white'}} // default theme is applied 
        >
          {timelineItemsList.map(eachItem => renderTimelineViewHome(eachItem))} // display the all the timelineItems 
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
