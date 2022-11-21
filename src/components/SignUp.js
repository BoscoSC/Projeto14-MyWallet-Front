import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import logo from "../assets/logo.png";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const navigateToSignIn = () => {
    navigate("/");
  };

  function register(event) {
    event.preventDefault();

    if (password === confirmPassword) {
      const URL = "http://localhost:5000/register";
      const body = {
        name: name,
        email: email,
        password: password,
      };

      const promise = axios.post(URL, body);

      promise.then(() => {
        alert("register success");
        navigateToSignIn();
      });

      promise.catch((error) => alert(error.response.data.message));
    } else {
      alert("As senhas não batem");
    }
  }

  return (
    <Page>
      <img src={logo} alt="" />
      <form onSubmit={register}>
        <Input
          required
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          required
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          required
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          required
          type="password"
          placeholder="Confirme a senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button type="submit">Cadastrar</Button>
      </form>
      <SignIn onClick={navigateToSignIn}>Já tem uma conta? Entre agora!</SignIn>
    </Page>
  );
}

const Page = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  background-color: #8c11be;
  padding: 0 30px;
`;

const Input = styled.input`
  width: 100%;
  height: 58px;
  font-size: 20px;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 15px;
  box-sizing: border-box;
  margin-bottom: 15px;

  ::placeholder {
    color: #000000;
  }
`;

const Button = styled.button`
  cursor: pointer;
  width: 100%;
  height: 58px;
  font-size: 20px;
  background: #a328d6;
  border-radius: 5px;
  color: #ffffff;
  font-weight: 700;
  text-align: center;
`;

const SignIn = styled.p`
  cursor: pointer;
  width: 100%;
  height: 58px;
  font-size: 15px;
  color: #ffffff;
  font-weight: 700;
  text-align: center;
`;
