import AnimeList from "@/components/Animelist";
import Link from "next/link";

const Home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const anime = await response.json()
  return (
    <main>
      <div className="flex justify-between">

        <h1>Paling Populer</h1>
        <Link href="/populer">More...</Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 m-4 gap-4">
        {anime.data.map(data => {
          return (
            <div key={data.mal_id} className="shadow-xl">
              <AnimeList title={data.title} images={data.images.webp.image_url} id={data.mal_id} />
            </div>
          )
        })}
      </div>
    </main>
  );
}

export default Home
