import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            {/* Main Page */}
            <Route
              exact
              path="/"
              element={
                <>
                  <AboutIconLink />
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />
            {/* About Page */}
            <Route
              path="/about"
              element={<AboutPage />}
            />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
