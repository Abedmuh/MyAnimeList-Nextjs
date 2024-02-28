import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
const { default: prisma } = require("@/libs/prisma")
import Link from "next/link"
import Image from "next/image"


const Page = async () => {
  const user = getServerSession(authOptions)
  
  const myAnimeList = await prisma.animeList.findMany({
    where: {
      user_email: user
    },
  })
  return (
    <>
    <main>
      <section>
        <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 m-4 gap-4">
          {myAnimeList.map((anime) => {
            return (
              <Link href={`/anime/${anime.anime_mal_id}`} className="bg-sky-500" key={anime.anime_mal_id}>
                <Image src={anime.image} alt="..." width={600} height={600} />
                <h3>{anime.title}</h3>
              </Link>
            )
          })}
        </div>
      </section>
    </main>
    </>
  )
}

export default Page