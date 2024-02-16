"use client"
import Header from "@/components/Animelist/Header";
import AnimeList from "@/components/Animelist";
import { useSearchParams } from "next/navigation";

const Page = async () => {
  const searchParams = useSearchParams()
  const querry = searchParams.get('q')

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${querry}`)
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