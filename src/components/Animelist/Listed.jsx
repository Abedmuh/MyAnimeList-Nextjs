import Image from "next/image"
import Link from "next/link"

const Listed = ({ api }) => {

  return (
    <>
      <div className="grid grid-cols-1 m-4 gap-4">
        {api.data?.map((anime) => {
          return (
            <Link href={`/anime/detail/${anime.mal_id}`} className="bg-sky-500 flex flex-row items-center gap-2" key={anime.mal_id}>
              <Image className="w-10 h-14" src={anime.images.webp.image_url} alt="..." width={600} height={600} />
              <h3>{anime.title}</h3>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default Listed