import React, { useState } from "react";
import array from "./array";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import "./Create.css";
const Create = () => {
  const [song, setSong] = useState("");

  let history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const ids = uuid();
    let uniqueId = ids.slice(0, 8);
    let a = song;
    array.push({ id: uniqueId, songTitle: a });
    history("/");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="songName"
          id="songName"
          onChange={(e) => setSong(e.target.value)}
        />
        <br></br>
        <input className="button-31" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Create;
