import axios from "axios";
import React, { useState } from "react";
import "./Create.css";

const Create = () => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const options = [
    { label: "Em Andamento", value: "EM_ANDAMENTO" },
    { label: "Concluído", value: "CONCLUIDO" },
    { label: "Não Iniciado", value: "NAO_INICIADO" },
  ];

  const handleSubmit = async (e) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await axios.post("http://localhost:8080/todo", {
        titulo,
        descricao,
        status,
      });
      setSuccess(true);
      setTitulo("");
      setDescricao("");
      setStatus("");
    } catch (err) {
      setError("Ocorreu um erro ao criar a tarefa. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="containerCreate">
      <h1>To Do</h1>
      <form onSubmit={handleSubmit}>
        <div className="forms">
          <input
            type="text"
            placeholder="Título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <input
            type="text"
            placeholder="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
          <select
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="" disabled>
              Selecione o status
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <p></p>
          <button type="submit" disabled={loading}>
            {loading ? "Adicionando..." : "Add Task"}
          </button>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && (
          <p style={{ color: "green" }}>Tarefa adicionada com sucesso!</p>
        )}
      </form>
    </div>
  );
};

export default Create;
