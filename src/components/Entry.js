import styled from "styled-components";

export default function Entry() {
  return (
    <Page>
      <h1>Nova Entrada</h1>
      <form>
        <Input required type="number" placeholder="Valor" />

        <Input required type="text" placeholder="Descrição" />

        <Button type="submit">Salvar Entrada</Button>
      </form>
    </Page>
  );
}

const Page = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-color: #8c11be;
  padding: 30px 30px;

  h1 {
    font-weight: 700;
    font-size: 26px;
    color: #ffffff;
  }
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
