import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Intro, SignUp, MyPage, Login } from "@/pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/intro" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/" element={<Navigate replace to="/intro" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
