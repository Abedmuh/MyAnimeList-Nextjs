"use client"
import React from "react"

const AddButton = ({anime_mal_id,user_email}) => {

  const handleButton = async (e) => {
    e.preventDefault()

    const data = { anime_mal_id, user_email }

    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data)
    })
    const list = await response.json()
    console.log(list);
  }
  return (
    <>
      <button className="bg-sky-600 min-w-36 text-center" onClick={handleButton}>add to Mylist</button>
    </>
  )
}

export default AddButton