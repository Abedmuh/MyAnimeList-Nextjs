"use client"

import { useState } from "react"

const ReviewTxt  = ({user}) => {

  const [review, setReview] = useState(null)

  const handleInput = (e) => {
    setReview(e.target.value)
  }
  const submitReview = (e) => {
    e.preventDefault()
    console.log(review);
  }
  return (
    <>
    {user && (
        <div>
          <textarea onChange={handleInput} className="w-full p-3 h-24 text-black bg-white"></textarea>
          <button onClick={submitReview} className="bg-sky-600 min-w-36 px-5 text-center rounded-md">Submit</button>
        </div>
      )}
    <div>
        <h1>Username</h1>
        <h1>here review list</h1>
    </div>
    </>
  )
}

export default ReviewTxt