import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyle from "./global";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
