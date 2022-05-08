import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Edit.css";
function Edit() {
  const [songTitle, setSongTitle] = useState("");
  const [id, setid] = useState("");

  let history = useNavigate();

  var index = array
    .map(function (e) {
      return e.id;
    })
    .indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    let a = array[index];

    a.songTitle = songTitle;

    history("/");
  };

  useEffect(() => {
    setSongTitle(localStorage.getItem("songTitle"));
    setid(localStorage.getItem("id"));
  }, []);

  return (
    <div>
      <form>
        <input
          type="text"
          name="songTitle"
          id="songTitle"
          onChange={(e) => setSongTitle(e.target.value)}
        />
        <br></br>
        <input
          className="button-31"
          type="submit"
          value="Update"
          onClick={handleSubmit}
        />
        <Link to="/">
          <button className="button-31">Home</button>
        </Link>
      </form>
    </div>
  );
}

export default Edit;
