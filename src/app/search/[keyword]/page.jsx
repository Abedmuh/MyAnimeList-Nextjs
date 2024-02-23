import Header from "@/components/Animelist/Header";
import AnimeList from "@/components/Animelist";
import { getAnime } from "@/libs/koneksi";

const Page = async ({ params }) => {

  const keywords = decodeURI(params.keyword)
  
  const anime = await getAnime("anime", `q=${keywords}`) 
  return (
    <>
      <main>
        <section>
          <Header title="Paling Populer" linkref="/populer" />
          <AnimeList api={anime} />
        </section>
      </main>

    </>
  )
}

export default Page