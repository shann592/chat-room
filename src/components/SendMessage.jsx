import React, { useState } from 'react'
import { auth, db } from '../firebase/config'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import BasicBtn from './BasicBtn'
export default function SendMessage({ scroll, room }) {
  const [message, setMessage] = useState('')
  const sendMessage = function (e) {
    if (message.trim() === '') {
      alert('Enter valid message!')
      return
    }
    const { uid, displayName, photoURL, email } = auth.currentUser
    const tempMessage = {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
      email,
      room,
    }
    addDoc(collection(db, 'messages'), tempMessage)
      .then(() => setMessage(''))
      .catch((err) => console.log(err))

    // scroll.current.scrollIntoView({ behavior: 'smooth' })
    scroll.current.scrollIntoView()
  }

  const handleSubmit = function (e) {
    e.preventDefault()
    sendMessage(e)
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="w-full flex justify-center items-center fixed bottom-8 ml-10p-3 rounded-[4px] left-[7%]"
    >
      <div className="w-[60%] text-center p-3">
        <input
          className="w-[70%] px-2 py-1 rounded-[4px] bg-gray-300 text-lg mr-1"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          type="text"
          placeholder="Enter a message.."
        />
        <button
          type="submit"
          className="md:px-2 px-1 py-[6px] bg-slate-500 rounded-[4px] font-semibold hover:opacity-50 ease-in-out duration-700 font-[12px] md:font-[16px]"
        >
          SEND
        </button>
      </div>
    </form>
  )
}
