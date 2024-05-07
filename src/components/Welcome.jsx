import reactIcon from '../assets/react.svg'
import GoogleBtn from './GoogleBtn'
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import { auth } from '../firebase/config'
export default function Welcome() {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
  }
  return (
    <main className="w-screen h-screen p-10 flex justify-center items-center bg-slate-800">
      <section className="text-slate-500 flex flex-col justify-evenly items-center min-h-52">
        <h1 className="text-3xl font-semibold">Welcome to React Chat Room</h1>
        <img src={reactIcon} alt="react icon" />
        <p>Sign in with Google to chat with roomates.</p>
        <GoogleBtn googleSignIn={googleSignIn} />
      </section>
    </main>
  )
}
