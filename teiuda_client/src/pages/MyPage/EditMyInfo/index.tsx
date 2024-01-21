import styled from "styled-components";
import { useState } from "react";
import { Helmet } from "react-helmet";

import { CommonBtn } from "@/components/Button/CommonBtn";
import { ShortInputText } from "@/components/InputText";
import { MyPageNav } from "@/components/MyPageNav";

const EditMyInfo = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const handleData = (type: string, value: string) => {
    if (value === "id") {
      setId(value);
    } else if (value === "password") {
      setPassword(value);
    }
  };
  const handleClick = () => {};

  const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 8fr;
  `;
  const SubWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
  `;
  return (
    <div>
      <Helmet>
        <title>생각이력</title>
      </Helmet>
      <Wrapper>
        <MyPageNav />
        <SubWrapper>
          <div>
            <span>아이디 :</span>
            <ShortInputText
              type="text"
              placeholder="로그인한 아이디"
              handleData={handleData}
            />
          </div>
          <div>
            <span>이름 :</span>{" "}
            <ShortInputText
              type="text"
              placeholder="이름"
              handleData={handleData}
            />
          </div>
          <div>
            <span>비밀번호 :</span>
            <ShortInputText
              type="password"
              placeholder="아이디"
              handleData={handleData}
            />
          </div>
          <div>
            <span>비밀번호 확인 :</span>
            <ShortInputText
              type="password"
              placeholder="비밀번호 확인"
              handleData={handleData}
            />
          </div>
          <CommonBtn value="수정" ClickHandler={handleClick()} />
        </SubWrapper>
      </Wrapper>
    </div>
  );
};
export { EditMyInfo };
