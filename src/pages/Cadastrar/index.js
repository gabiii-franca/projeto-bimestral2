import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

export default function Cadastrar() {
  return (
    <Container>
      <div>
        <form>
          <p>Realizar Cadastrar</p>
          <input type="text" placeholder="Nome" required />
          <input type="text" placeholder="Nome de Usuário" required />
          <input type="password" placeholder="Senha" required />
          <input
            type="password"
            placeholder="Insira novamente a senha"
            required
          />
          <button type="submit">Cadastrar</button>
          <Link to="/">Voltar</Link>
        </form>
      </div>
    </Container>
  );
}
