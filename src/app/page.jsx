import AnimeList from "@/components/Animelist";
import Header from "@/components/Animelist/Header";
import { getAnime } from "../libs/koneksi";

const Page = async () => {

  const topAnime = await getAnime("top/anime","limit=8")
  return (
    <main>
      <section>
        <Header title="Paling Populer" linkref="/populer" />
        <AnimeList api={topAnime} />
      </section>
    </main>
  );
}

export default Page
