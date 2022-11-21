import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import styled from "styled-components";

export default function SignIn() {
  const navigate = useNavigate();

  const navigateToSignUp = () => {
    navigate("/signUp");
  };

  return (
    <Page>
      <img src={logo} alt="" />
      <form>
        <Input required type="email" placeholder="E-mail" />
        <Input required type="password" placeholder="Senha" />
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
