import { createContext } from "react";
import { useState } from "react";
import axios from "axios";

export const ContextApp = createContext();

export const ContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [totalBalance, setTotalBalance] = useState(0);
  const [statement, setStatement] = useState({});

  function loadStatement() {
    const URL = "https://localhost:5000/mainPage";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.get(URL, config);

    promise.then((res) => {
      console.log(res.data);
      setName(res.data.name);
      setStatement(res.data.statement);
    });

    promise.catch((error) => {
      alert(error.response.data);
    });
  }

  return (
    <ContextApp.Provider
      value={{
        token,
        setToken,
        loadStatement,
        name,
        setName,
        statement,
        setStatement,
        totalBalance,
        setTotalBalance,
      }}
    >
      {children}
    </ContextApp.Provider>
  );
};
