import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ api }) => {

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 m-4 gap-4">
        {api.data?.map((anime) => {
          return (
            <Link href={`/${anime.mal_id}`} className="bg-sky-500" key={anime.mal_id}>
              <Image src={anime.images.webp.image_url} alt="..." width={600} height={600} />
              <h3>{anime.title}</h3>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default AnimeList