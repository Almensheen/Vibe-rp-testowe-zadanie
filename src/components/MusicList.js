import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { Link, useNavigate } from "react-router-dom";

const MusicList = (props) => {
  let history = useNavigate();
  function setID(id, songTitle) {
    localStorage.setItem("id", id);
    localStorage.setItem("songTitle", songTitle);
  }
  function deleted(id) {
    var index = array
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);

    array.splice(index, 1);

    history("/");
  }
  return (
    <div style={{ margin: "10rem" }}>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {array.map((item) => {
            return (
              <tr>
                <td>{item.songTitle}</td>

                <td>
                  <Link to={`/edit`}>
                    <Button
                      onClick={(e) => setID(item.id, item.Name, item.Age)}
                      variant="info"
                    >
                      Update
                    </Button>
                  </Link>
                </td>

                <td>
                  <Button onClick={(e) => deleted(item.id)} variant="danger">
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Link className="d-grid gap-2" to="/create">
        <Button variant="warning" size="lg">
          Create
        </Button>
      </Link>
    </div>
  );
};
export default MusicList;
