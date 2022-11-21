import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useApp from "../context/useApp";
import Card from "./Card";

import { RiLogoutBoxRLine } from "react-icons/ri";
import { BsPlusCircle, BsDashCircle } from "react-icons/bs";

export default function MainPage() {
  const { loadStatement, name, totalBalance, statement } = useApp();

  const navigate = useNavigate();

  const navigateToSignIn = () => {
    navigate("/");
  };

  const navigateToEntry = () => {
    navigate("/entry");
  };

  const navigateToWithdraw = () => {
    navigate("/withdraw");
  };

  useEffect(() => {
    loadStatement();
  }, []);

  return (
    <Page>
      <Topper>
        <p>Olá, {name}</p>
        <RiLogoutBoxRLine onClick={navigateToSignIn} />
      </Topper>
      <Content>
        <div>
          {statement.lenght > 0 ? (
            <p>Não há registros de entrada ou saída</p>
          ) : (
            statement.map((item, index) => (
              <Card
                key={index + 1}
                day={item.day}
                description={item.description}
                value={item.value}
                type={item.type}
              />
            ))
          )}
        </div>
        <TotalMoney total={totalBalance}>
          <h3>SALDO</h3>
          <p>99999</p>
        </TotalMoney>
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
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 10px 10px 10px;
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

const TotalMoney = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    color: #000000;
    font-weight: 700;
    font-size: 17px;
  }

  p {
    font-size: 17px;
    color: ${(props) => (props.total >= 0 ? "#03AC00" : "#C70000")};
  }
`;
