import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext)

  // Calculate ratings avgerage
  const average = feedback.reduce((sum, item) => sum + item.rating, 0) / feedback.length
  const formattedAverage = Number.isInteger(average) ? average : average.toFixed(1)

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>{`Average Rating: ${isNaN(formattedAverage) ? 0 : formattedAverage}`}</h4>
    </div>
  )
}

export default FeedbackStats
