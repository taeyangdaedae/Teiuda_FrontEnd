import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import Logo from "./Logo";
export function NavBar() {
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
    grid-template-rows: 0.3fr 0.7fr 9fr;
    border-right: 1px solid #735a19;
  `;

  return (
    <Wrapper>
      <Logo />
      <Divider />
      <Nav />
    </Wrapper>
  );
}
