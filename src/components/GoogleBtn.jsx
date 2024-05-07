import googleIcon from '../assets/google.png'
export default function GoogleBtn({ googleSignIn }) {
  return (
    <div
      onClick={() => googleSignIn()}
      className="overflow-hidden cursor-pointer flex justify-between items-center md:w-48 w-56 bg-blue-600 text-white rounded-[4px]"
    >
      <span className="w-10 h-full bg-white py-1">
        <img
          className="ml-1 w-[30px] h-[30px]"
          src={googleIcon}
          alt="google icon"
        />
      </span>
      <span className="mr-1 md:flex md:justify-center md:items-center">
        Sign in with Google
      </span>
    </div>
  )
}
