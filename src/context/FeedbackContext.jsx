import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import FeedbackData from '../data/FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  // Add Feedback
  const addFeedback = (newFeedback) => {
    const feedbackWithId = { ...newFeedback, id: uuidv4() }
    setFeedback([feedbackWithId, ...feedback])
  }

  // Delete Feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // Update Feedback item
  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item)))
  }

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit, // state that holds the item and boolean
        addFeedback,
        deleteFeedback,
        editFeedback, // function to edit feedback
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
