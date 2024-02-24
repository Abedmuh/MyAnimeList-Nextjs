"use client"
import React, { useState } from "react";

const AddButton = ({ anime_mal_id, user_email ,title, image, stats }) => {
  const [txtButton, setTxtButton] = useState(stats);
  const malId = anime_mal_id
  const userId = user_email

  const handleButton = async (e) => {
    e.preventDefault();

    const data = { malId, userId, title, image  };
    const method = txtButton === "Remove from MyList" ? "DELETE" : "POST"
    const response = await fetch("/anime", {
      method: method,
      body: JSON.stringify(data),
    }).catch(err => {
      console.log(err)
    })
    const list = await response?.json();
    console.log(list);
    if (list) {
      txtButton === "Remove from MyList" ? setTxtButton("Add to MyList") : setTxtButton("Remove from MyList")
    }
  };
  return (
    <>
      <button className="bg-sky-600 min-w-36 px-5 text-center rounded-md" onClick={handleButton}>
        {txtButton}
      </button>
    </>
  );
};

export default AddButton;
