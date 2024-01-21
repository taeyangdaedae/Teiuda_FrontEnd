import styled from "styled-components";
import { ThinkBoard } from "@/components";
import { IntroBtn } from "@/components";
import authService from "@/api/service/auth.service";

const Home = () => {
  const isLoggedIn = (): boolean => {
    if (authService.getCurrentUser()) {
      return true;
    } else {
      return false;
    }
  };
  const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 8fr 2fr;
  `;
  const Bottom = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    place-items: center;
  `;

  return (
    <Wrapper>
      <ThinkBoard isLoggedIn={isLoggedIn()} />
      <Bottom>
        <div />
        <IntroBtn value="로그인" />
        <IntroBtn value="회원가입" />
        <div />
      </Bottom>
    </Wrapper>
  );
};

export { Home };
