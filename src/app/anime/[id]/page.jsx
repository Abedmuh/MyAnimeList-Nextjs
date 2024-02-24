import { getAnime } from "@/libs/koneksi"
import AddButton from "./Component"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import prisma from "@/libs/prisma"
import VideoPlayer from "@/components/utils/VideoPlayer"

const Page = async ({params}) => {
  const user = await getServerSession(authOptions)
  const anime = await getAnime(`anime/${params.id}`)
  const myanimelist = await prisma.AnimeList.findFirst({
    where: {user_email: user.user?.email, anime_mal_id: params.id}
  })
  return (
    <>
      <main>
      <section className="grid grid-cols-4 gap-1 my-4">
        <div className="flex flex-col items-center gap-4">
          <img src={anime.data.images.webp.image_url} alt={anime.data.images.jpg.image_url} className="max-w-44"/>
          <ul>
            <li><h2>{anime.data.title}</h2></li>
            <li><h2>{anime.data.score}</h2></li>
            <AddButton 
            anime_mal_id={params.id} 
            user_email={user.user.email} 
            stats={myanimelist ? "Remove from MyList" : "Add to MyList"} 
            title={anime.data.title} 
            image={anime.data.images.webp.image_url}/>
          </ul>
        </div>
        <div className="grid col-span-3 mx-4 border-white border-2 p-2 gap-4">
          <h1>Synopsis</h1>
          <p>{anime.data.synopsis}</p>
          <VideoPlayer youtubeId={anime.data.trailer.youtube_id}/>
          <div className="grid grid-cols-2">
            <div>
              Stats
            </div>
            <div>
              Activities
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

export default Page