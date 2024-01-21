import styled from "styled-components";
import { MyPageNav } from "@/components/MyPageNav";
import { Helmet } from "react-helmet";

const MyPage = () => {
  const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 8fr;
  `;

  return (
    <div>
      <Helmet> 마이페이지 </Helmet>
      <Wrapper>
        <MyPageNav />
        <div />
      </Wrapper>
    </div>
  );
};

export { MyPage };
