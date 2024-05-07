
# Chat-Room App

This application is a real-time chat room built using ReactJS for the frontend, Firebase for authentication with Google, and as the database, and Tailwind CSS for responsive styling. Users can sign in with their Google account, join chat rooms, and engage in real-time conversations with other users.

## Features

- Join existing chat rooms.
- Create new chat rooms.
- Send messages in real-time within chat rooms.
- Log out when done.


## Tech Stack

**Client:** React, TailwindCSS

**BaaS:** Firebase


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_REACT_APP_API_KEY`

`VITE_REACT_APP_AUTH_DOMAIN`

`VITE_REACT_APP_PROJECT_ID`

`VITE_REACT_APP_STORAGE_BUCKET`

`VITE_REACT_APP_MESSSAGING_SENDER_ID`

`VITE_REACT_APP_APP_ID`

`VITE_REACT_APP_MEASUREMENT_ID`


## Run Locally

Clone the project

```bash
  git clone https://github.com/shann592/chat-room
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```
Setup .env file

```bash
  touch .env
```

Start the dev server

```bash
  npm run dev
```

