import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { BsPlusCircle, BsDashCircle } from "react-icons/bs";

export default function MainPage() {
  const navigate = useNavigate();

  const navigateToEntry = () => {
    navigate("/entry");
  };

  const navigateToWithdraw = () => {
    navigate("/withdraw");
  };

  return (
    <Page>
      <Topper>
        <p>Olá, Fulano</p>
        <RiLogoutBoxRLine />
      </Topper>

      <Content>
        <p>Não há registros de entrada ou saída</p>
      </Content>

      <Bottom onClick={navigateToEntry}>
        <Button>
          <BsPlusCircle />
          <p>Nova entrada</p>
        </Button>

        <Button onClick={navigateToWithdraw}>
          <BsDashCircle />
          <p>Nova entrada</p>
        </Button>
      </Bottom>
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
  padding: 30px;
`;

const Topper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 26px;
  font-weight: 700;
  color: #ffffff;

  svg {
    cursor: pointer;
    font-size: 30px;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 100px;
  background: #ffffff;
  border-radius: 5px;

  p {
    text-align: center;
    font-size: 20px;
    color: #868686;
  }
`;

const Bottom = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  gap: 15px;
`;

const Button = styled.div`
  cursor: pointer;
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  background: #a328d6;
  border-radius: 5px;
  padding: 15px;
  svg {
    font-size: 20px;
  }
`;
