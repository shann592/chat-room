import Message from './Message'
import SendMessage from './SendMessage'
import { useEffect, useRef, useState } from 'react'
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from 'firebase/firestore'
import { auth, db } from '../firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth'
export default function Chatbox({ room }) {
  const [user] = useAuthState(auth)
  const [yoursMessages, setYoursMessages] = useState([])
  const [othersMessages, setOthersMessages] = useState([])
  useEffect(() => {
    const q = query(
      collection(db, 'messages'),
      orderBy('createdAt', 'desc'),
      limit(50)
    )
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = []
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id })
      })
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      )
      setYoursMessages(
        sortedMessages.filter((m) => m.email === user.email && m.room === room)
      )
      setOthersMessages(
        sortedMessages.filter((m) => m.email !== user.email && m.room === room)
      )
    })
    return () => unsubscribe
  }, [])
  const scroll = useRef()
  return (
    <div className="w-screen min-h-screen p-10 bg-slate-800">
      <div className="w-full min-h-[80%] pt-14 md:flex md:items-center md:flex-row flex flex-col items-center">
        {yoursMessages || othersMessages ? (
          <>
            <div className="flex flex-col items-center md:items-start w-2/4 min-h-28">
              {othersMessages.map((message) => (
                <Message message={message} key={message.id} user={user} />
              ))}
            </div>
            <div className="flex flex-col  items-center md:items-end w-2/4 min-h-28">
              {yoursMessages.map((message) => (
                <Message message={message} key={message.id} user={user} />
              ))}
            </div>
          </>
        ) : (
          <h1>Not chat available</h1>
        )}
      </div>
      <span ref={scroll}></span>
      <SendMessage scroll={scroll} room={room} />
    </div>
  )
}
