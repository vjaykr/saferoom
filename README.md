# Saferoom - Real-Time Chat Application

[![Saferoom Logo](https://via.placeholder.com/150)](https://github.com/vjaykr/saferoom)

**Saferoom** is a modern real-time chat application built with **Flask** for the backend and **React** for the frontend. It allows users to join secure chat rooms with unique usernames, send real-time messages, share images, and track user status (online/offline).

## Features

- **User Authentication**: Register a unique username with a security code for each chat room.
- **Real-Time Messaging**: Send and receive messages instantly with other users in the room.
- **Image Sharing**: Upload and share images with other users in the chat room.
- **User Presence**: Track whether users are online or offline based on activity.
- **Auto Status Update**: Automatically marks users as offline after being inactive for 60 seconds.

## Technologies Used

- **Backend**: Flask, Flask-SocketIO, Eventlet
- **Frontend**: React, JSX, and modern JavaScript
- **Real-Time Communication**: Socket.IO
- **Database**: In-memory storage (Can be swapped with a persistent database)

## Prerequisites

To run the project locally, you need to have the following software installed:

- **Python 3.x** (For the backend)
- **Node.js** and **npm** (For the frontend)
- **pip** (For Python dependencies)

---

## Installation Guide

### Step 1: Clone the repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/vjaykr/saferoom.git
cd saferoom
```

### Step 2: Backend Setup (Flask)

Set up a virtual environment (for Python dependencies):

```bash
python -m venv venv
```

Activate the virtual environment:

On Windows:
```bash
venv\Scripts\activate
```

On Mac/Linux:
```bash
source venv/bin/activate
```

Install required Python dependencies:

```bash
pip install -r backend/requirements.txt
```

Configure environment variables:

Create a `.env` file in the `backend/` directory and add the following:

```
SECRET_KEY=your_secret_key_here
```

(You can generate a random secret key or use a custom one.)

Run the Flask application:

```bash
python backend/app.py
```

The backend server will run on [http://localhost:5000](http://localhost:5000).

### Step 3: Frontend Setup (React)

Navigate to the frontend/ directory:

```bash
cd frontend
```

Install Node.js dependencies:

```bash
npm install
```

Build the React app for production:

```bash
npm run build
```

This will create a production-ready build in the `frontend/build` directory.

Your Flask backend will automatically serve the React frontend. Open your browser and go to:

```
http://localhost:5000
```

## File Structure

The project directory structure is as follows:

```
saferoom/
│
├── backend/
│   ├── app.py                # Flask backend application
│   ├── requirements.txt      # Python dependencies
│   └── .env                  # Environment variables (optional)
│
├── frontend/
│   ├── public/               # Public assets (images, icons, etc.)
│   ├── src/                  # React source code
│   ├── package.json          # Node.js dependencies and scripts
│   ├── build/                # Production build (generated after `npm run build`)
│   └── .env                  # React environment variables
│
└── README.md                 # This file
```

## Usage

Once the app is up and running, you can:

- **Register a Username**: Use the `/check_username` API to ensure the username is available in the room.
- **Join a Room**: Users can join a chat room with a username and security code.
- **Send Messages**: Send and receive text messages in real-time with others in the same room.
- **Share Images**: Upload images and they will be broadcasted to all members of the room.
- **Track User Status**: Monitor whether users are online or offline based on their activity.

## Socket.IO Events

The app uses Socket.IO for real-time communication. Here are the main events:

- `connect`: Triggered when a user connects to the server.
- `join_room`: Allows users to join a specific room with a username and security code.
- `message`: Sends a text message to the room.
- `image`: Shares an image with all members of the room.
- `user_status`: Updates the user's status (online/offline).

## Contributing

We welcome contributions to improve Saferoom! If you'd like to contribute, follow these steps:

1. Fork the repository.
2. Clone your forked repository to your local machine.
3. Create a new branch for your changes.
4. Implement your changes and commit them.
5. Push your changes to your forked repository.
6. Create a Pull Request to the main repository.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- **Flask**: A lightweight web framework for Python.
- **React**: A powerful JavaScript library for building user interfaces.
- **Socket.IO**: Real-time, bi-directional communication library.
- **Eventlet**: A networking library for concurrent applications in Python.
- **Flask-SocketIO**: Adds Socket.IO support to Flask applications.

## Contact

Feel free to open issues or pull requests for suggestions, improvements, or questions.

**Author**: Vijay Kr  
**GitHub**: [github.com/vjaykr](https://github.com/vjaykr)  
**Email**: vjaykr@example.com
