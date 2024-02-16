import AnimeList from "@/components/Animelist";
import Header from "@/components/Animelist/Header";
import Link from "next/link";

const Home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const anime = await response.json()
  return (
    <main>

      <section>
        <Header title="Paling Populer" linkref="/populer" />
        <AnimeList api={anime} />
      </section>
    </main>
  );
}

export default Home
