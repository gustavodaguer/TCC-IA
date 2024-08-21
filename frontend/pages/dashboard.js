import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log(token);
        const response = await axios.get("http://localhost:4321/api/clientes", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setClientes(response.data);
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Dashboard 2.0</h2>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.id}>
            {cliente.nome} - {cliente.cpf}
          </li>
        ))}
      </ul>
    </div>
  );
}
