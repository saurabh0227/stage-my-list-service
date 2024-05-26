# My List Feature

## Overview

This project implements the "My List" feature for an OTT platform, allowing users to save their favorite movies and TV shows to a personalized list. The backend service includes APIs for adding, removing, and listing saved items, designed to be scalable and performant.

## Features

- **Add to My List**: Add a movie or TV show to the user's list.
- **Remove from My List**: Remove an item from the user's list.
- **List My Items**: Retrieve all items in the user's list with pagination support.

## Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **MongoDB**: A NoSQL database for storing user, movie, TV show, and list data.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Supertest**: A library for testing HTTP servers.

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/saurabh0227/stage-my-list-service.git
   cd my-list-service
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```
   DB_URI=mongodb://localhost/nest
   ```

4. Start the MongoDB server:

   ```bash
   mongod
   ```

5. Start the NestJS application:

   ```bash
   npm run start:dev
   ```

6. The application will be running at `http://localhost:3000`.

## API Endpoints

### Add to My List

- **URL**: `/my-list/add`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "userId": "user1",
    "itemId": "movie1",
    "itemType": "Movie"
  }
  ```

### Remove from My List

- **URL**: `/my-list/remove`
- **Method**: `DELETE`
- **Body**:
  ```json
  {
    "userId": "user1",
    "itemId": "movie1"
  }
  ```

### List My Items

- **URL**: `/my-list/items`
- **Method**: `GET`
- **Query Parameters**:
  - `userId` (required): The ID of the user.
  - `page` (optional): Page number for pagination (default: 1).
  - `limit` (optional): Number of items per page (default: 10).

## Testing

To run the integration tests:

```bash
npm run test:e2e


src/
│
├── app.module.ts         # Main application module
├── main.ts               # Application entry point
├── enums/
│   └── genre.enum.ts     # Genre enum definition
├── schemas/
│   ├── user.schema.ts    # User schema definition
│   ├── movie.schema.ts   # Movie schema definition
│   ├── tvshow.schema.ts  # TV show schema definition
│   └── mylist.schema.ts  # My List schema definition
├── my-list/
│   ├── my-list.module.ts # My List module definition
│   ├── my-list.service.ts # My List service implementation
│   └── my-list.controller.ts # My List controller implementation
└── cors-options.ts       # CORS configuration
```
