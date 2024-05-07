import GoogleBtn from './GoogleBtn'
import BasicBtn from './BasicBtn'

// firebase imports
import { auth } from '../firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth'
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'

export default function NavBar({ room, handleRoom }) {
  const [user] = useAuthState(auth)
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
  }
  const signOut = () => {
    auth.signOut()
    handleRoom('')
  }

  return (
    <nav className="bg-slate-500 min-h-16 flex  w-screen justify-between items-center px-8 py-3 fixed">
      <div className="text-2xl font-semibold text-slate-800 ">
        {room ? `${room.toUpperCase()} ROOM` : 'CHAT ROOM'}
      </div>
      {user ? (
        <BasicBtn
          text="Logout"
          bgcolor="bg-slate-800"
          textcolor="text-slate-500"
          signOut={signOut}
        />
      ) : (
        <GoogleBtn googleSignIn={googleSignIn} />
      )}
    </nav>
  )
}
