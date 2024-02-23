import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import Link from "next/link"

const User = async () => {
  const data = await getServerSession(authOptions)
  console.log(data);
  const actionLabel = data ? "Sign Out" : "Sign in"
  const actionUrl = data ? "api/auth/signout" : "api/auth/signin"
  const dashboard = data ? "Dashboard" : null
  return(
    <>
    {data ? <Link href="/user/dashboard" className="bg-sky-900 text-white text-center w-36 rounded-md">{dashboard}</Link> : null }
    
    <Link href={actionUrl} className="bg-sky-900 text-white text-center w-36 rounded-md">{actionLabel}</Link>
    </>
  )
}

export default User