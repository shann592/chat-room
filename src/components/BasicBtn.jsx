export default function BasicBtn({
  signOut,
  bgcolor = 'bg-red-500 ',
  text = 'Click',
  textcolor = 'bg-slate-500',
  padding = 'py-1',
}) {
  return (
    <button
      onClick={() => {
        signOut && signOut()
      }}
      className={`px-4 font-semibold ${padding} rounded-[4px] hover:opacity-50 ease-in-out duration-700 text-[16px] ${bgcolor} ${textcolor}`}
    >
      {text}
    </button>
  )
}
