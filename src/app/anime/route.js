const { default: prisma } = require("@/libs/prisma")

export async function POST(request) {
  try {
    const { malId, userId, title, image, rating, review } = await request.json()

    const data = {
      anime_mal_id: malId,
      user_email: userId,
      title,
      image,
      rating: Number(rating),
      review
    }
    const myAnimeList = await prisma.animeList.create({ data })
    if (!myAnimeList) {
      return Response.json({
        status: 500
      })
    }
    return Response.json({
      status: 200
    })
  } catch (err) {
    return Response.json({
      status: 500,
      message: err.message
    })
  }
}

export async function DELETE(request) {
  try {
    const { malId, userId, title, image } = await request.json()
    await prisma.animeList.deleteMany({
      where: {
        anime_mal_id: malId,
        user_email: userId,
        title,
        image
      }
    })
    return Response.json({
      status: 200
    })
  } catch (err) {
    return Response.json({
      status: 500,
      message: err.message
    })
  }
} 
