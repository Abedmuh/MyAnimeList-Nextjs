import Link from "next/link"

const Header = ({ title, linkref }) => {
  return (
    <>
      <div className="flex justify-between mx-4">
        <h1>{title}</h1>
        <Link href={linkref}>More...</Link>
      </div>
    </>
  )
}

export default Header