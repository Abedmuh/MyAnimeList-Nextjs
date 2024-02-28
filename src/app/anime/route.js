const { default: prisma } = require("@/libs/prisma")

export async function POST(request) {
  try {
    let { malId, userId, title, image, rating, review } = await request.json()
    rating ? rating = Number(rating) : null

    const data = {
      anime_mal_id: malId,
      user_email: userId,
      title,
      image,
      rating,
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

export async function PUT(request) {
  try {
    const { malId, userId, rating, review } = await request.json();
    const updatedData = {};

    if (rating) updatedData.rating = Number(rating);
    if (review) updatedData.review = review;

    const updatedAnimeList = await prisma.animeList.updateMany({
      where: {
        anime_mal_id: malId,
        user_email: userId,
      },
      data: updatedData
    });

    if (!updatedAnimeList) {
      return Response.json({
        status: 404,
        message: "Anime list not found."
      });
    }

    return Response.json({
      status: 200
    });
  } catch (err) {
    return Response.json({
      status: 500,
      message: err.message
    });
  }
}

