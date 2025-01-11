# Backend Assignment

This project is a backend application built using Node.js and Express.js. It is designed to fetch data from APIs (specifically the CoinGecko API), store it in a MongoDB database, and provide APIs to fetch this data based on specific requirements and logic.

## Deployed Project
You can access the deployed backend https://228e267d-68c7-4094-9fca-c84639453887.e1-us-east-azure.choreoapps.dev/.

Alternate Link if above gets down https://backend-assignment-li5e.onrender.com/

---

## Features

- Fetches cryptocurrency data from the CoinGecko API.
- Stores fetched data in a MongoDB database.
- Provides APIs to retrieve the stored data based on requirements and logic.
- Implements Axios for API requests and Mongoose for MongoDB interaction.

---

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database to store data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **Axios**: HTTP client for API requests.
- **CoinGecko API**: Cryptocurrency data source.

---

## Prerequisites

- **Node.js**: Make sure you have Node.js installed on your system.
- **MongoDB**: Set up a MongoDB instance (local or Atlas).

---

## Getting Started

Follow these steps to set up the project locally:

### 1. Clone the Repository

```bash
$ git clone https://github.com/StellarShivam/Backend-Assignment
$ cd Backend-Assignment
```

### 2. Install Dependencies

Install all required Node.js dependencies:

```bash
$ npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add the MongoDB connection URL. You can use MongoDB Atlas or a local MongoDB instance. Example:

```
MONGO_URI=your-mongodb-connection-url
```

### 4. Run the Application

Start the server:

```bash
$ npm start
```

The application will start running on `http://localhost:3002` by default.

---

## API Endpoints

Below are the key API endpoints provided by the application:

### Fetch Data
- https://228e267d-68c7-4094-9fca-c84639453887.e1-us-east-azure.choreoapps.dev/stats?coin=bitcoin : Fetch latest stored bitcoin data.
- https://228e267d-68c7-4094-9fca-c84639453887.e1-us-east-azure.choreoapps.dev/stats?coin=matic-network : Fetch latest stored matic-network data.
- https://228e267d-68c7-4094-9fca-c84639453887.e1-us-east-azure.choreoapps.dev/stats?coin=ethereum : Fetch latest stored ethereum data.
- https://228e267d-68c7-4094-9fca-c84639453887.e1-us-east-azure.choreoapps.dev/deviation?coin=bitcoin : Return the standard deviation of the price of the requested cryptocurrency

## Contact

For questions or support, feel free to reach out:

- **Email**: [shivam.anand.216@gmail.com]



