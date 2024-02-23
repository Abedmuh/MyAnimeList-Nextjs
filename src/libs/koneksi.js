const getAnime = async (res, params) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${res}?${params}`)
  const anime = await response.json()

  return anime
}

export { getAnime } 