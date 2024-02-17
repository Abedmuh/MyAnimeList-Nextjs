"use client"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {

  const searchReff = useRef()
  const router = useRouter()
  const handleSearch = (e) => {
    e.preventDefault()
    router.push(`/search/${searchReff.current.value}`)
  }
  return (
    <>
      <form className="flex items-center relative" onSubmit={handleSearch}>
        <input placeholder="find Anime..." className="rounded-sm px-2" ref={searchReff} required></input>
        <buton type="submit" className="absolute end-2">
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </buton>
      </form>

    </>
  )
}

export default InputSearch