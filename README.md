# Tech Quiz Application

A full-stack quiz application built with the MERN stack (MongoDB, Express.js, React, and Node.js) that allows users to test their technical knowledge through a series of questions.

## Features

- Interactive quiz interface
- Random question selection
- Score tracking
- Ability to restart the quiz
- Comprehensive test coverage with Cypress

## Tech Stack

- **Frontend**: React with TypeScript
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Testing**: Cypress for both component and end-to-end testing

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd tech-quiz
```

2. Install dependencies:

```bash
npm install
```

This will install dependencies for both the client and server.

## Running the Application

### Development Mode

To run the application in development mode:

```bash
npm run start:dev
```

This will:

- Start the server on port 3001
- Start the client on port 5173
- Enable hot reloading for both client and server

### Production Mode

To run the application in production mode:

```bash
npm run build
npm start
```

## Testing

The application includes comprehensive tests using Cypress for both component and end-to-end testing.

### Running Tests

To run all tests:

```bash
npm run test
```

To open the Cypress test runner:

```bash
npm run test:open
```

### Test Structure

- **Component Tests**: Located in `cypress/component/`

  - Tests individual React components in isolation
  - Verifies component behavior and state management

- **End-to-End Tests**: Located in `cypress/e2e/`
  - Tests the complete user flow
  - Verifies application functionality from start to finish

### Test Coverage

The tests cover:

- Initial quiz loading
- Starting the quiz
- Answering questions
- Score calculation
- Quiz completion
- Starting a new quiz

## Project Structure

```
.
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── services/      # API services
│   │   └── models/        # TypeScript interfaces
│   └── vite.config.ts     # Vite configuration
├── server/                 # Express backend
│   ├── src/
│   │   ├── routes/        # API routes
│   │   └── models/        # Database models
│   └── package.json
├── cypress/                # Test files
│   ├── component/         # Component tests
│   ├── e2e/              # End-to-end tests
│   └── fixtures/         # Test data
└── package.json           # Root package.json
```

## API Endpoints

- `GET /api/questions/random` - Get random questions for the quiz

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Video WalkThrough

https://app.screencastify.com/v3/watch/0G4yunhZg6FmvFBLTXiv
