import Header from "@/components/Animelist/Header";
import AnimeList from "@/components/Animelist";

const Page = async ({ params }) => {

  const keywords = decodeURI(params.keyword)

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keywords}`)
  const anime = await response.json()
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