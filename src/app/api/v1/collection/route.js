const { default: prisma } = require("@/libs/prisma")

export async function POST(request) {
  const { anime_mal_id, user_email } = await request.json()
  const data = {
    anime_mal_id,
    user_email
  }
  const myAnimelist = await prisma.AnimeList.create({ data })
  if (!myAnimelist) {
    return Response.json({
      status: 500
    })
  } else {
    return Response.json({
      status: 200
    })
  }
}