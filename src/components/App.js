import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyle from "./global";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import MainPage from "./MainPage";
import Entry from "./Entry";
import Withdraw from "./Withdraw";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/mainPage" element={<MainPage />} />
        <Route path="/entry" element={<Entry />} />
        <Route path="/withdraw" element={<Withdraw />} />
      </Routes>
    </BrowserRouter>
  );
}
