# House Arena

Hi! I am [Saksham Jain](https://sailingsam.vercel.app), I made this project as part of my buildspace N&Ws5 program.

House Arena is your one-stop platform for tracking house points, viewing past events, and fostering a vibrant spirit of competition and camaraderie among your individual houses. Each house in the student community can view their progress, participate in events, and aim for the top of the leaderboard.

## Features

- Track the current leaderboard of house points
- View detailed scores of past events
- User authentication with login and registration pages
- Admin dashboard for managing events (add/update/delete)

## Project Structure

The project is organized into two main directories:

- `/frontend` - React-based frontend built with Vite
- `/backend` - Express and Node.js backend with MongoDB

## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

- Node.js
- npm

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/sailingsam/house-arena.git
   cd house-arena
   ```

2. Install Frontend Dependencies:

   ```sh
   cd frontend
   npm install
   ```

3. Install Backend Dependencies:

   ```sh
   cd ../backend
   npm install
   ```

4. Setup MongoDB Database:
   - Create a free account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a new project and cluster
   - Create `.env` file in the backend folder
   - Add MONGO_URI with your connection string (replace `<db_password>` with your password)

### Setting Up Admin Access & Sample Data

Before running the application, you'll need to set up admin access and seed the database:

1. Open `backend/seeders/seeder.js` and add your email to the adminEmails array:

   ```javascript
   const adminEmails = [
     {
       email: "your.email@example.com", // Add your email here
     },
   ];
   ```

2. **Run the seeder script**: In terminal, move to the backend directory `/house-arena/backend` and run the seeder script:

   ```sh
   npm run seed
   ```

3. **Important Security Step**: After registering, remove your email from `seeder.js`:
   ```javascript
   const adminEmails = [
     {
       email: "", // Remove your email before committing
     },
   ];
   ```

**Note**: Only emails listed in the admin emails collection can register accounts.

### Running the Application

1. Start the Backend:

   ```sh
   cd backend
   npm run dev
   ```

   The server will run on http://localhost:4000

2. Start the Frontend:
   ```sh
   cd frontend
   npm run dev
   ```
   Access the application at http://localhost:3000

## Contributing

All code contributions must go through a pull request and be approved by a core developer before being merged. This is to ensure a proper review of all the code.

We truly ❤️ pull requests! If you wish to help, you can learn more about how you can contribute to this project in the [**contribution guide**](CONTRIBUTING.md).

## Contact

If you have any questions or suggestions, feel free to contact me at [jainsaksham1004@gmail.com](mailto:jainsaksham1004@gmail.com).
