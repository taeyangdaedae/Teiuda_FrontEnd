import styled from "styled-components";
import { Section } from "./Section";
const MyPageNav = () => {
  const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 7fr;
    border-right: 1px solid #735a19;
  `;
  return (
    <Wrapper>
      <div />
      <Section value="think-history" />
      <Section value="edit-info" />
      <div />
    </Wrapper>
  );
};

export { MyPageNav };
