import AnimeList from "@/components/Animelist";
import Header from "@/components/Animelist/Header";
import { getAnime } from "../libs/koneksi";

const Page = async () => {

  const topAnime = await getAnime("top/anime","limit=8")
  const topManga = await getAnime("top/manga","limit=8")
  return (
    <main>
      <section>
        <Header title=" Anime paling Populer" linkref="/populer/anime" />
        <AnimeList api={topAnime} />
      </section>

      <section>
        <Header title="Manga Paling Populer" linkref="/populer/manga" />
        <AnimeList api={topManga} />
      </section>
    </main>
  );
}

export default Page
