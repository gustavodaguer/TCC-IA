import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Admin");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4321/api/auth/register", {
        name,
        email,
        password,
        role,
      });
      router.push("/login");
    } catch (error) {
      console.error("Erro ao registrar:", error);
    }
  };

  return (
    <div>
      <h2>Registrar</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Função:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Admin">Admin</option>
            <option value="Gerente">Gerente</option>
            <option value="Caixa">Caixa</option>
          </select>
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}
