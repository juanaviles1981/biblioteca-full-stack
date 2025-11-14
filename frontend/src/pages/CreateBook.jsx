import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("http://localhost:5555/books", data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert('Ha ocurrido un error . Chequee consola')
        console.log(error);
      });
  };

  return (
  <div className="p-4">
    <BackButton/>
    <h1 className="text-3xl my-4">Crear Libro</h1>
    {loading ? <Spinner/>: ''}
    <div className="flex flex-col border-2 border-sky-400 rounded-xl x-[600px]">

    </div>
  </div>
)
};

export default CreateBook;
