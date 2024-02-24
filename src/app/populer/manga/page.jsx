"use client"
import AnimeList from "@/components/Animelist"
import HeaderMenu from "@/components/utils/HeaderMenu"
import Pagination from "@/components/utils/Pagination"
import React,{ useEffect, useState } from "react"
import { getAnime } from "../../../libs/koneksi"

const Page = () => {
  const [pages,setPages] = useState(1)
  const [topManga,setTopManga] = useState([])

  const fetchData = async () => {
    const data = await getAnime("top/manga",`page=${pages}`)
    setTopManga(data)
  }

  useEffect(() => {
    fetchData()
  }, [pages])

  return (
    <>
    <main>

    <section>
      <HeaderMenu/>
      <AnimeList api={topManga}/>
      <Pagination page={pages} lastpage={topManga.pagination?.last_visible_page} setPage={setPages}/>
    </section>
    </main>
    </>
  )
}

export default Page