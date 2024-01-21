import styled from "styled-components";
import { useState } from "react";

import { ShortInputText } from "@/components/InputText";
import { Helmet } from "react-helmet";

const SignUp = () => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const handleData = (type: string, value: string) => {
    if (value === "id") {
      setId(value);
    } else if (value === "password") {
      setPassword(value);
    } else if (value === "repassword") {
      setRepassword(value);
    } else if (value === "email") {
      setEmail(value);
    }
    alert({ id, email, password, repassword });
  };
  const Wrapper = styled.div``;
  return (
    <div>
      <Helmet>
        <title>회원가입 </title>
      </Helmet>
      <Wrapper>
        <p> 회원가입 </p>
        <ShortInputText type="text" placeholder="id" handleData={handleData} />
        <ShortInputText
          type="text"
          placeholder="email"
          handleData={handleData}
        />
        <ShortInputText
          type="password"
          placeholder="password"
          handleData={handleData}
        />
        <ShortInputText
          type="password"
          placeholder="비밀번호 재확인"
          handleData={handleData}
        />
        <button
          onClick={() => {
            alert("signup button clicked");
          }}
        >
          {" "}
          회원가입{" "}
        </button>
      </Wrapper>
    </div>
  );
};
export { SignUp };
