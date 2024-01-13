import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  SignUp,
  MyPage,
  Login,
  ThinkWrite,
  ThinkHistory,
  EditMyInfo,
  ErrorPage,
} from "@/pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/my-page" element={<MyPage />}>
          <Route path="edit-info" element={<EditMyInfo />} />
          <Route path="think-history" element={<ThinkHistory />} />
        </Route>
        <Route path="/think-write" element={<ThinkWrite />} />
        <Route path="/*" element={<ErrorPage.NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
