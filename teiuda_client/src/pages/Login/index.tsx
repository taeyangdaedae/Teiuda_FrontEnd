import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { ShortInputText } from "@/components/InputText";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const handleData = (type: string, data: string) => {
    if (type === "id") {
      setId(data);
    } else if (type === "password") {
      setPassword(data);
    }
  };
  const Wrapper = styled.div`
    display: grid;
    grid-template-rows: auto;
  `;
  return (
    <div>
      <Helmet>
        <title>로그인</title>
      </Helmet>
      <Wrapper>
        <p> 로그인 </p>
        <ShortInputText type="id" placeholder="id" handleData={handleData} />
        <ShortInputText
          type="password"
          placeholder="password"
          handleData={handleData}
        />
        <button
          onClick={() => {
            alert(id);
          }}
        >
          로그인
        </button>
        <Link to="/"> 비밀번호를 잊어버리셨나요? </Link>
      </Wrapper>
    </div>
  );
};
export { Login };
