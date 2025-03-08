# 🏰 ThySpace 🏰 

## Overview

ThySpace is a medieval-themed social networking web application inspired by Facebook. We developed it during our time at [Makers](https://makers.tech/) as part of a collaborative bootcamp project. This was the **first time we tackled JavaScript and React** after just two weeks of learning the basics of both. 

Our primary goal was to explore core web development concepts (routing, data models, user authentication, etc.) and sharpen our React skills by building a fun, fully functional web application.

## Context and Motivation
 - **Focus on Learning:** Coming from limited JavaScript and React experience, we dove right in to learn how to build a front end using React components, state management, and basic integration with a backend API.
 - **Team Collaboration:** Working in small groups strengthened our communication, version control, and agile practices.
 - **Medieval Twist:** We gave our social network a medieval flair—featuring “alliances” (friends) and thematic design elements—to keep the project engaging while we refined our new skills.

## Features
- **User Registration and Authentication:** Users can sign up and log in securely.
- **Alliances (Friendships):** Forge alliances with other users or break them if conflicts arise.
- **Posts (Wall Messages):** Share posts on your page with your kingdom and allies.
- **Comments:** Add witty or helpful comments on others’ posts.
- **Real-time Updates:** Experience a seamless user interface that updates without page reloads.

## Tech Stack
- **MongoDB:** Database for users, alliances, posts, and comments.
- **Express.js:** Handles server-side logic and routing.
- **React:** Front-end library for building an interactive user interface.
- **Node.js:** JavaScript runtime that powers the server and overall app logic.

## Installation & Setup

### 1️⃣ Install MongoDB (macOS with Homebrew)

1. **Tap the MongoDB Homebrew Repo**  
   ```bash
   brew tap mongodb/brew
   ```
2. **Install MongoDB**  
   ```bash
   brew install mongodb-community@6.0
   ```
   > **Note**: If you see a message such as  
   > *"If you need to have mongodb-community@6.0 first in your PATH, run:"*  
   > follow that instruction, then restart your terminal.

3. **Start MongoDB**  
   ```bash
   brew services start mongodb-community@6.0
   ```

Alternatively, if you’re on a different operating system or prefer another method, follow the [MongoDB official installation guide](https://www.mongodb.com/docs/manual/installation/) for your environment.

### 2️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/thyspace.git
cd thyspace
```

### 3️⃣ Install Dependencies
```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

### 4️⃣ Set Up Environment Variables
Create a `.env` file in the **server** directory with the following variables:
- `MONGO_URI` – Your MongoDB connection string (e.g., `mongodb://localhost:27017/thyspace`)
- `PORT` (optional, defaults to 5000)
- `JWT_SECRET` (for authentication, choose a secure value)

### 5️⃣ Run the Application
```bash
# In one terminal, start the backend
cd server
npm run dev

# In another terminal, start the frontend
cd ../client
npm start
```
Then open [http://localhost:3000](http://localhost:3000) to explore ThySpace.

## Contributors
- [Doug Fairfield](https://github.com/DougF-5749)  
- [Shola Forbes](https://github.com/SholaF1)  
- [Khalid Ham](https://github.com/khal2023)  
- [Cezary Karwoski-Budd]()  
- [Safaa Imran](https://github.com/coff-ee)
- [Max Joseph](https://github.com/maxjoseph22)  

We appreciate your interest in **ThySpace** and may your alliances be ever strong!!
