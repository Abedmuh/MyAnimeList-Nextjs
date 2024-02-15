import Link from "next/link"

const Navbar = () => {
  return (
    <header className="bg-sky-600">
      <div className="max-w-5xl mx-auto">

        <div className="flex justify-between items-center gap-2">
          <div>

            <Link href="/" className="text-white font-bold text-2xl">Myanimelist</Link>
          </div>
          <div className="flex gap-4 mr-2">
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </div>
        </div>

        <div className="flex justify-between pt-2 pb-4">
          <div className="flex gap-4">
            <Link href="/" className="text-white">Anime</Link>
            <Link href="/" className="text-white">Manga</Link>
            <Link href="/" className="text-white">Help</Link>
            <Link href="/" className="text-white">About</Link>
          </div>
          <div>
            <input placeholder="  find Anime..."></input>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar