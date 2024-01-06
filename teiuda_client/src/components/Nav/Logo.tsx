import React from "react";
import styled from "styled-components";

const Logo = () => {
  const Title = styled.div`
    padding-top: 15%;
    color: #0d3c26;

    font-family: "NanumMyeongjo";
    text-align: center;
    font-size: 170%;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `;
  return <Title> 틔우다.</Title>;
};
export { Logo };
