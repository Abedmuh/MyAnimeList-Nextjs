"use client"
import React, { useState } from "react";
import "./Modal.css";

const ReviewButton = ({ anime_mal_id, user_email ,title, image, stats }) => {
  const [modal, setModal] = useState(false)
  const [rating, setRating] = useState(null)
  const [message, setMessage] = useState(null)
  const [txtButton, setTxtButton] = useState(stats)

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const submitList = async (e) => {
    e.preventDefault();

    const data = { malId:anime_mal_id, userId: user_email, title, image, rating, review: message  };
    const method = txtButton === "Edit MyList" ? "UPDATE" : "POST"
    const response = await fetch("/anime", {
      method: method,
      body: JSON.stringify(data),
    }).catch(err => {
      console.log(err)
    })
    const list = await response.json()
    if (list) {
      console.log(list);
      txtButton === "Edit MyList" ? setTxtButton("Add to MyList") : setTxtButton("Edit MyList")
      toggleModal()
    }
  };

  return (
    <>
      <div>
        <button
          onClick={toggleModal}
          className="bg-sky-600 min-w-36 px-5 text-center rounded-md"
        >
          {txtButton}
        </button>
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content text-black bg-white absolute rounded-lg ">
            <div>
              <button
                className="bg-red-600 px-2 text-center rounded-md text-white"
                onClick={toggleModal}
              >
                X
              </button>
              <h1>Review</h1>
            </div>
            
            <label htmlFor="rating">Your Rating</label>
            <select
              id="rating"
              name="rating"
              className="block w-full px-3 py-2 mt-1 text-base font-medium text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-600 focus:border-sky-600 sm:text-sm"
              onChange={handleRatingChange}
            >
              <option value={null}>Unrated</option>
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-black bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a comment..."
              onChange={handleMessageChange}
            ></textarea>

            <div>
            <button
              onClick={submitList}
              className="bg-sky-600 min-w-36 px-3 text-center rounded-md text-white"
            >
              {txtButton}
            </button>

            
          
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewButton;
