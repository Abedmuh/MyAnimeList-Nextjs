import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import Link from "next/link";
// import Image from "next/image";

const Page = async () => {
  const data = await getServerSession(authOptions)
  console.log(data.user.name);
  return (
    <>
    <main>
      <section className="grid grid-cols-4 gap-1 my-4">
        <div className="flex flex-col items-center gap-4">
          <img src={data.user.image} alt=".." className="max-w-44"/>
          <ul>
            <li><h2>{data.user.name}</h2></li>
            <li><h2>{data.user.email}</h2></li>
          </ul>
          <Link className="bg-sky-600 min-w-36 text-center" href="/user/myanimelist">My Anime List</Link>
          <Link className="bg-sky-600 min-w-36 text-center" href="/user/mymangalist">My Manga List</Link>
        </div>
        <div className="grid col-span-3 mx-4 border-white border-2 p-2">
          <h1>Biography</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt voluptas, illo dolorem magnam illum quas consectetur sed, itaque vel laboriosam ut ea impedit earum magni totam unde. Cumque quasi odio autem repudiandae corrupti ea, libero aut veniam fugiat ad deserunt porro, laboriosam corporis maiores placeat? Illum quia veniam, asperiores quod molestiae adipisci earum consequuntur dolorum, voluptatum rerum quibusdam officiis accusamus beatae obcaecati voluptates eos. Doloremque accusantium tempore veniam! Harum maxime ipsum quas, corporis esse eum odit adipisci? Itaque, in porro esse aut at quo labore aperiam cum repudiandae officia nesciunt sequi unde excepturi distinctio earum quis a quas quidem.</p>
          <div className="grid grid-cols-2 ">
            <div>
              Stats
            </div>
            <div>
              Activities
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

export default Page