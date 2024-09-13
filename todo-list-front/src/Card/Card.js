import React, { useEffect, useState } from "react";
import "./Card.css";
import axios from "axios";
import Update from "./UpdateAndDelete/UpdateDelete";

const Card = () => {
  const [toDos, setTodo] = useState([]);
  const [filtro, setFiltro] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/todo")
      .then((response) => {
        console.log("API Response:", response.data);
        setTodo(response.data);
        setFiltro(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Carregando ...</div>;
  }

  const handleFilter = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setFiltro(
      toDos.filter(
        (f) => f.titulo && f.titulo.toLowerCase().includes(searchTerm)
      )
    );
  };

  return (
    <div className="containerCard">
      <div className="search">
        <input
          className="input-search"
          type="text"
          placeholder="Search by name"
          onChange={handleFilter}
        />
      </div>
      <ul className="Card">
        {filtro.length > 0 ? (
          filtro.map((todo) => (
            <li key={todo.id} className="Cards">
              <h3 className="titulo">{todo.titulo}</h3>
              <h3 className="descricao">{todo.descricao}</h3>
              <Update todo={todo}></Update>
            </li>
          ))
        ) : (
          <div className="error">No items found</div>
        )}
      </ul>
    </div>
  );
};

export default Card;
