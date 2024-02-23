import { getAnime } from "@/libs/koneksi"
import AddButton from "./Component"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import prisma from "@/libs/prisma"

const Page = async ({params}) => {
  const user = await getServerSession(authOptions)
  const anime = await getAnime(`anime/${params.id}`)
  const myanimelist = await prisma.AnimeList.findFirst({
    where: {user_email: user.user?.email, anime_mail_id: params.id}
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
            <AddButton anime_mal_id={params.id} user_email={user.user.email}/>
          </ul>
        </div>
        <div className="grid col-span-3 mx-4 border-white border-2 p-2">
          <h1>Biography</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt voluptas, illo dolorem magnam illum quas consectetur sed, itaque vel laboriosam ut ea impedit earum magni totam unde. Cumque quasi odio autem repudiandae corrupti ea, libero aut veniam fugiat ad deserunt porro, laboriosam corporis maiores placeat? Illum quia veniam, asperiores quod molestiae adipisci earum consequuntur dolorum, voluptatum rerum quibusdam officiis accusamus beatae obcaecati voluptates eos. Doloremque accusantium tempore veniam! Harum maxime ipsum quas, corporis esse eum odit adipisci? Itaque, in porro esse aut at quo labore aperiam cum repudiandae officia nesciunt sequi unde excepturi distinctio earum quis a quas quidem.</p>
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