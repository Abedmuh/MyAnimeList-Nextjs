import AnimeList from "@/components/Animelist";
import Header from "@/components/Animelist/Header";
import { getAnime } from "../libs/koneksi";
import Listed from "@/components/Animelist/Listed";

const Page = async () => {

  const topAnime = await getAnime("top/anime","limit=4")
  const upcomingAnime = await getAnime("seasons/upcoming","limit=4")
  const seasonalAnime = await getAnime("seasons/now","limit=8")
  const topManga = await getAnime("top/manga","limit=8")
  return (
    <main>
      <section>
        <div className="grid grid-cols-4">
          <div className="grid col-span-3">
            <Header title="Anime season ini" linkref="/anime/seasonal" />
            <AnimeList api={seasonalAnime} />
          </div>
          
          <div className="grid col-span-1">
            <div className="border-white border-2">
              <Header title="Paling Populer" linkref="/anime/populer"></Header>
              <Listed api={topAnime}/>
            </div>
            <div className="border-white border-2">
              <Header title="Upcoming Populer" linkref="/anime/populer"></Header>
              <Listed api={upcomingAnime}/>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Header title="Manga Paling Populer" linkref="/manga/populer" />
        <AnimeList api={topManga} />
      </section>
    </main>
  );
}

export default Page
