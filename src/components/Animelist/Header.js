import Link from "next/link"

const Header = ({ title, linkref }) => {
  return (
    <>
      <div className="flex justify-between">
        <h1>{title}</h1>
        <Link href={linkref}>More...</Link>
      </div>
    </>
  )
}

export default Header