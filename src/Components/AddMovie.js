import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "./Modal";
import './AddMovie.css';
import API from "../API";


const AddMovie = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [starring, setStarring] = useState("");
  const [movies, setMovies] = useState([]);


  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    refreshMovies();
  }, []);

  const refreshMovies = () => {
    API.get("/")
      .then((res) => {
        setMovies(res.data);

      })
      .catch(console.error);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let item = { name, genre, starring };
    API.post("/", item).then(() => refreshMovies());
  };

  // const onUpdate = (id) => {
  //   let item = { name };
  //   API.patch(`/${id}/`, item).then((res) => refreshMovies());
  // };

  const onDelete = (id) => {
    API.delete(`/${id}/`).then((res) => refreshMovies());
  };

  function selectMovie(id) {
    let item = movies.filter((movie) => movie.id === id)[0];
    setName(item.name);
    setGenre(item.genre);
    setStarring(item.starring);
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <Form onSubmit={onSubmit} className="mt-4">
            <div className="position-absolute top-50 start-50">
              <Button
                className="openModalBtn"
                onClick={() => {
                  setModalOpen(true);
                }}
                variant="primary"
              >
                Book
              </Button>
              {modalOpen && <Modal setOpenModal={setModalOpen} />}
              <Button
                variant="primary"
                type="button"
                onClick={() => {
                  setModalOpen(true);
                }}
                className="openModalBtn"
              >
                Return
              </Button>
              {modalOpen && <Modal setOpenModal={setModalOpen} />}
            </div>
          </Form>
        </div>
        <div className="col-md-8 m">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Movie Name</th>
                <th scope="col">Genre</th>
                <th scope="col">Starring</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie, index) => {
                return (
                  <tr key="">
                    <th scope="row">{movie.id}</th>
                    <td> {movie.name}</td>
                    <td>{movie.genre}</td>
                    <td>{movie.starring}</td>
                    <td>
                      <i
                        className="fa fa-pencil-square text-primary d-inline"
                        aria-hidden="true"
                        onClick={() => selectMovie(movie.id)}
                      ></i>
                      <i
                        className="fa fa-trash-o text-danger d-inline mx-3"
                        aria-hidden="true"
                        onClick={() => onDelete(movie.id)}
                      ></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;