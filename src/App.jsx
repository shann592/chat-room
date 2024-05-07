import { ChatSetup, Chatbox, NavBar, Welcome } from './components'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase/config'
import { useState } from 'react'

export default function App() {
  const [user] = useAuthState(auth)
  const [room, setRoom] = useState('')
  const handleRoom = function (roomName) {
    setRoom(roomName)
  }
  return (
    <>
      <NavBar room={room} handleRoom={handleRoom} />
      {/* {user ? <Chatbox /> : <Welcome />} */}
      {user ? (
        room ? (
          <Chatbox room={room} />
        ) : (
          <ChatSetup handleRoom={handleRoom} />
        )
      ) : (
        <Welcome />
      )}
    </>
  )
}
