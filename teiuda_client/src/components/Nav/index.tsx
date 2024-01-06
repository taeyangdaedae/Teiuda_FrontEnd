import React from "react";
import styled from "styled-components";
import { Content } from "./Content";
import { Logo } from "./Logo";

const Nav = () => {
  const Divider = styled.hr`
    position: relative;
    width: 80px;
    height: 1px;
    border: 0;
    background-color: #735a19;
    align: center;
  `;
  const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 0.2fr 0.2fr 9.6fr;
    border-right: 1px solid #735a19;
  `;

  return (
    <Wrapper>
      <Logo />
      <Divider />
      <Content />
    </Wrapper>
  );
};
export { Nav };
