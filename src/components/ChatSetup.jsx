import { useState } from 'react'

export default function ChatSetup({ handleRoom }) {
  const [roomName, setRoomName] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    handleRoom(roomName.trim())
  }
  return (
    <div className="w-screen h-screen p-10 bg-slate-800 flex justify-center items-center">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => setRoomName(e.target.value)}
          value={roomName}
          className="px-3 py-1 rounded-[4px] bg-gray-300 text-lg"
          type="text"
          placeholder="Enter a room name!"
        />
        <button
          type="submit"
          className="md:px-2 px-1 py-[6px] bg-slate-500 rounded-[4px] font-semibold hover:opacity-50 ease-in-out duration-700 font-[12px] md:font-[16px] ml-2"
        >
          Enter
        </button>
      </form>
    </div>
  )
}
