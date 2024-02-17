"use client"
import AnimeList from "@/components/Animelist"
import HeaderMenu from "@/components/utils/HeaderMenu"
import Pagination from "@/components/utils/Pagination"
import React,{ useEffect, useState } from "react"

const Page = () => {
  const [pages,setPages] = useState(1)
  const [topAnime,setTopAnime] = useState([])

  const fetchData = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${pages}`)
    const data = await response.json()
    console.log(data);
    setTopAnime(data)
  }

  useEffect(() => {
    fetchData()
  }, [pages])

  return (
    <>
    <main>

    <section>
      <HeaderMenu/>
      <AnimeList api={topAnime}/>
      <Pagination page={pages} lastpage={topAnime.pagination?.last_visible_page} setPage={setPages}/>
    </section>
    </main>
    </>
  )
}

export default Page