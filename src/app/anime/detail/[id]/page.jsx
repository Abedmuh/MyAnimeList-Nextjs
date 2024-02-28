import { getAnime } from "@/libs/koneksi"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import prisma from "@/libs/prisma"
import VideoPlayer from "@/components/utils/VideoPlayer"
import ReviewTxt from "./Reviews"
import ReviewButton from "./ReviewButton"

const Page = async ({params}) => {
  const user = await getServerSession(authOptions)
  const anime = await getAnime(`anime/${params.id}`)
  const myanimelist = await prisma.animeList.findFirst({
    where: {user_email: user?.user.email, anime_mal_id: params.id}
  })
  const allAnimelist = await prisma.animeList.findFirst({
    where: {anime_mal_id: params.id}
  })
  return (
    <>
      <main>
      <section className="grid md:grid-cols-4 gap-1 my-4 grid-cols-1">
        <div className="flex flex-row items-center gap-4 md:flex-col">
          <img src={anime.data.images.webp.image_url} alt={anime.data.images.jpg.image_url} className="max-w-44"/>
          <div>

          <ul>
            <li><h2>{anime.data.title}</h2></li>
            <li><h2>{anime.data.score}</h2></li>
          </ul>
          {user && (
            <ReviewButton
            anime_mal_id={params.id} 
            user_email={user.user?.email} 
            title={anime.data.title} 
            image={anime.data.images.webp.image_url}
            stats={myanimelist ? "Edit MyList" : "Add to MyList"}
            myreview={anime.data.review} 
            />
            )}
            </div>
        </div>
        <div className="grid col-span-3 mx-4 border-white border-2 p-2 gap-4">
          <div className="grid grid-cols-4 text-center place-items-center">
            <div>
              <h1 className="text-sm">Score</h1>
              <h1 className="text-lg">{anime.data.score}</h1>
              <h1 className="text-sm">{anime.data.scored_by}</h1>
            </div>
            <div>
              <h1>Rank</h1>
              <h1>{anime.data.rank}</h1>
            </div>
            <div>
              <h1>First Aired</h1>
              <h1>{anime.data.season}, {anime.data.year}</h1>
            </div>
            <div>
              <h1>Favorite</h1>
              <h1>{anime.data.favorites}/{anime.data.members}</h1>
            </div>
          </div>
          <h1 className="text-lg">Synopsis</h1>
          <p>{anime.data.synopsis}</p>
          <VideoPlayer youtubeId={anime.data.trailer.youtube_id}/>
          <h1>Reviews</h1>
          <ReviewTxt review={allAnimelist}/>
        </div>
      </section>
    </main>
    </>
  )
}

export default Page