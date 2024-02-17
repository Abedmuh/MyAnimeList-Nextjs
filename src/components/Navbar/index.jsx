import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
  return (
    <header className="bg-sky-600">
      <div className="max-w-5xl mx-auto">

        <div className="flex justify-between items-center gap-2">
          <div>

            <Link href="/" className="text-white font-bold text-2xl">Myanimelist</Link>
          </div>
          <div className="flex gap-4 mr-2">
            <button className="bg-slate-800 text-white w-36 rounded-md">Login</button>
            <button className="bg-sky-900 text-white w-36 rounded-md">Register</button>
          </div>
        </div>

        <div className="flex justify-between pt-2 pb-4">
          <div className="flex gap-4">
            <Link href="/" className="text-white">Anime</Link>
            <Link href="/" className="text-white">Manga</Link>
            <Link href="/" className="text-white">Help</Link>
            <Link href="/" className="text-white">About</Link>
          </div>
          <InputSearch />
        </div>
      </div>
    </header>
  )
}

export default Navbar