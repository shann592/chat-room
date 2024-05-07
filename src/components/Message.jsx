import { auth } from '../firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth'
export default function Message({ message, user }) {
  const giveMsgClass = () => {
    if (user.email === message.email) {
      return 'bg-white rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl'
    }
    return 'bg-slate-500 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl'
  }
  return (
    <div
      className={`${giveMsgClass()} w-80 p-5 text-slate-800 flex items-center mt-4 mb-4`}
    >
      <img
        className="w-10 h-10 rounded-full object-cover"
        src={message.avatar}
        alt="user avatar"
      />
      <div className="px-3">
        <p className="font-bold">{message.name}</p>
        <p className="text-[14px]">{message.text}</p>
      </div>
    </div>
  )
}
