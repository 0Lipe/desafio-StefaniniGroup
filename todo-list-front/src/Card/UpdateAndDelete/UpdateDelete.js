import React, { useState } from "react";
import "./UpdateDelete.css";
import axios from "axios";

const Update = ({ todo }) => {
  const [status, setStatus] = useState(todo.status);

  function getColorClass(status) {
    if (status === "EM_ANDAMENTO") {
      return "status-amarelo";
    } else if (status === "CONCLUIDO") {
      return "status-verde";
    } else if (status === "NAO_INICIADO") {
      return "status-vermelho";
    }
    return "";
  }

  const handleChange = (event) => {
    const newStatus = event.target.value;
    setStatus(newStatus);

    axios.put("http://localhost:8080/todo/" + todo.id, {
      status: newStatus,
    });
  };

  const handleDelete = () => {
    axios.delete("http://localhost:8080/todo/" + todo.id);
    window.location.reload();
  };

  return (
    <div className="containerStatus">
      <select
        className={getColorClass(status)}
        value={status}
        onChange={handleChange}
      >
        <option value="CONCLUIDO" className="status-verde">
          Concluído
        </option>
        <option value="EM_ANDAMENTO" className="status-amarelo">
          Em Andamento
        </option>
        <option value="NAO_INICIADO" className="status-vermelho">
          Não Iniciado
        </option>
      </select>
      <button className="btn-cancel" onClick={handleDelete}>
        X
      </button>
    </div>
  );
};

export default Update;
