SafeRoom with Flask and React

This is a real-time chat application built using **Flask** for the backend and **React** for the frontend. It supports real-time messaging, user management, and media (image) sharing within rooms, with a unique security code system to ensure proper user authentication. Socket.IO is used to manage the real-time communication.

Features

- **User Authentication**: Users can register usernames with security codes and join rooms.
- **Real-Time Messaging**: Users can send and receive messages instantly.
- **Image Sharing**: Supports uploading and sharing images.
- **User Presence**: Tracks user status (online/offline) within rooms.
- **Automatic User Status Update**: If a user is inactive for more than a minute, their status is updated to offline.

Technologies Used

- **Backend**: Flask, Flask-SocketIO, Eventlet
- **Frontend**: React
- **Real-Time Communication**: Socket.IO
- **Database**: In-memory (temporary; can be replaced with a persistent database)

Prerequisites

Ensure you have the following installed:

- Python 3.x
- Node.js and npm (for the frontend)
- `pip` (for Python dependencies)

Installation

Backend Setup (Flask)

1. Clone the repository:

   git clone https://github.com/yourusername/chat-app.git
   cd chat-app

2. Create and activate a Python virtual environment:

   python -m venv venv
   source venv/bin/activate   # On Windows use `venv\Scripts\activate`

3. Install the required Python dependencies:

   pip install -r requirements.txt

4. Create a `.env` file and set the following environment variables (optional but recommended):

   SECRET_KEY=your_secret_key_here

   You can generate a random secret key or use a string of your choice.

5. Run the Flask application:

   python app.py

   The backend will be accessible at `http://localhost:5000`.

Frontend Setup (React)

1. Navigate to the `frontend` folder:

   cd frontend

2. Install the required Node.js dependencies:

   npm install

3. Build the React application for production:

   npm run build

   This will create a production-ready build of your React app in the `frontend/build` folder.

4. Now, your backend will serve the frontend. You can access the full application at `http://localhost:5000`.

File Structure

chat-app/
│
├── backend/
│   ├── app.py                # Flask application
│   ├── requirements.txt      # Python dependencies
│   └── .env                 # (Optional) Environment variables
│
├── frontend/
│   ├── public/               # Public assets (images, icons, etc.)
│   ├── src/                  # React source code
│   ├── package.json          # Node.js dependencies and scripts
│   ├── build/                # Production build (generated after `npm run build`)
│   └── .env                  # React environment variables
│
└── README.md                 # This file

Usage

Starting the Application

1. Backend (Flask): Run the Flask server:

   python app.py

   This will start the Flask server at `http://localhost:5000`.

2. Frontend (React): When you run the backend, it will automatically serve the React build.

3. Access the application in your browser at:

   http://localhost:5000

Important Routes and Endpoints

- /check_username (POST): Used for checking if a username is already reserved in the room.
- Socket Events:
  - `connect`: Emitted when a client connects.
  - `join_room`: Used to join a room with a username and security code.
  - `message`: Used to send messages in the room.
  - `image`: Used to send images to the room.
  - `user_status`: Used to change the user's status (online/offline).

Example Usage

1. Username Registration:
   - POST request to `/check_username` to ensure the username is available.
   - If successful, the username is reserved for the room.

2. Join a Room:
   - A user can join a room by emitting a `join_room` event via Socket.IO with their username and security code.

3. Messaging:
   - Users can send messages to the room, which will be broadcasted in real time.

4. Image Sharing:
   - Users can send images to the room, which will also be broadcasted in real-time.

User Status

- The server automatically marks users as "offline" if they have been inactive for over 60 seconds.

Contributing

We welcome contributions! If you have any improvements or bug fixes, feel free to open a pull request.

Steps for Contributing:

1. Fork this repository.
2. Clone your forked repository to your local machine.
3. Create a new branch for your changes.
4. Make changes and commit them.
5. Push your changes to your forked repository.
6. Open a pull request to the original repository.

License

This project is licensed under the MIT License - see the LICENSE file for details.
