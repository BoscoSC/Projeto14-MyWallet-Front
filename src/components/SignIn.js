import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import useApp from "../context/useApp";

import logo from "../assets/logo.png";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useApp();
  const navigate = useNavigate();

  const navigateToSignUp = () => {
    navigate("/signUp");
  };

  const navigateToMainPage = () => {
    navigate("/mainPage");
  };

  function login(event) {
    event.preventDefault();

    const URL = "http://localhost:5000/login";
    const body = {
      email: email,
      password: password,
    };

    const promise = axios.post(URL, body);

    promise.then((res) => {
      setToken(res.data.token);
      navigateToMainPage();
    });

    promise.catch((error) => {
      alert(error.response.data.message);
    });
  }

  return (
    <Page>
      <img src={logo} alt="" />
      <form onSubmit={login}>
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
        <Button type="submit">Entrar</Button>
      </form>
      <SignUp onClick={navigateToSignUp}>Primeira vez? Cadastre-se!</SignUp>
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

const SignUp = styled.p`
  cursor: pointer;
  width: 100%;
  height: 58px;
  font-size: 15px;
  color: #ffffff;
  font-weight: 700;
  text-align: center;
`;
