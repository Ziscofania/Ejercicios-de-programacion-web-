import React, { useState } from "react";

const ListaTareas = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return;

    const tarea = {
      id: Date.now(),
      texto: nuevaTarea,
    };

    setTareas([...tareas, tarea]);
    setNuevaTarea("");
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      agregarTarea();
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Lista de Tareas</h2>

      <div style={styles.form}>
        <input
          type="text"
          placeholder="Escribe una tarea..."
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          onKeyDown={handleKeyPress}
          style={styles.input}
        />
        <button onClick={agregarTarea} style={styles.button}>
          Agregar
        </button>
      </div>

      <ul style={styles.list}>
        {tareas.map((tarea) => (
          <li key={tarea.id} style={styles.listItem}>
            <span>{tarea.texto}</span>
            <button onClick={() => eliminarTarea(tarea.id)} style={styles.delete}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// --- Estilos claros ---
const styles = {
  container: {
    maxWidth: "420px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #000000ff",
    borderRadius: "12px",
    backgroundColor: "#ffffff", // Fondo claro
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#111827", // gris muy oscuro (casi negro)
  },
  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {                                                                                                                                                                                                                                                                                                                                                                                                                          
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #000000ff", // gris claro
    outline: "none",
  },
  button: {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    padding: "10px 16px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#3b82f6", // azul claro
    color: "white",                                                                                                                     
    cursor: "pointer",                                                                                  
    fontWeight: "bold",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    marginBottom: "8px",
    backgroundColor: "#0055ffff", // gris muy claro
    borderRadius: "8px",
    border: "1px solid #000000ff",
  },
  delete: {
    backgroundColor: "#ef4444", // rojo
    border: "none",
    color: "white",
    borderRadius: "6px",
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default ListaTareas;
