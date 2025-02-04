# Feedback App

Feedback App is a simple React application that allows users to leave reviews and rate products or services on a scale of 1-10. The app includes an interactive UI for submitting, editing, and deleting feedback. It features client-side state management with React Context and uses a mock backend powered by json-server.

## Features

* Submit feedback with a rating (1-10)

* View and manage feedback entries

* Edit and update feedback

* Delete feedback with confirmation

* Displays average rating dynamically

* Navigation between home and about pages

## Technologies Used

* React (with Vite for fast development)

* React Router for routing

* React Context API for state management

* json-server for a mock backend

* Concurrently for running both frontend and backend simultaneously

* CSS for styling

## Installation

### Prerequisites

Ensure you have Node.js and npm installed on your machine.

### Steps to Run the App

1. Clone the repository:

git clone https://github.com/ReneMSdev/feedback-app.git 
cd feedback-app

2. Install dependencies:

npm install

3. Start the app (frontend & backend):

npm run server-dev

This command runs both the React app and the mock backend server concurrently.

## API Endpoints (json-server)

The mock backend serves data via json-server:

* GET /api/feedback - Fetch all feedback items

* POST /api/feedback - Add new feedback

* DELETE /api/feedback/:id - Remove feedback

* PUT /api/feedback/:id - Update feedback

## Context API & State Management

The app utilizes React Context for global state management, ensuring seamless updates to feedback data across components. useEffect is used to fetch initial feedback from json-server and handle state updates.

## Routing

The app uses react-router-dom for navigation between pages:

* / - Home page with feedback functionality

* /about - About page with app details

## Deployment

The app is deployed on Netlify and can be accessed here:
Feedback App

## Styling

The app is styled using CSS for a clean and responsive UI.

## License

This project is open-source and available under the MIT License.

