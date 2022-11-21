import styled from "styled-components";

export default function Card({ day, description, value, type }) {
  return (
    <Container type={type}>
      <div>
        <p>{day}</p>
        <h2>{description}</h2>
      </div>
      <Value type={type}>{value}</Value>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  margin-bottom: 10px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  p {
    color: #c6c6c6;
  }

  h2 {
    color: #000000;
  }
`;

const Value = styled.h3`
  font-size: 16px;
  color: ${(props) => (props.type === "entry" ? "#03AC00" : "#C70000")};
`;
