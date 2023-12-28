import React from "react";
import styled from "styled-components";
import profile_img from "./assets/profile_img.png";

export default () => {
  const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr 9fr;
  `;
  const MyProfile = styled.div`
    border-top: 1px solid #735a19;
    border-bottom: 1px solid #735a19;
  `;
  return (
    <Wrapper>
      <MyProfile>
        <img src={profile_img} alt="profile_img" />
      </MyProfile>
      <div />
    </Wrapper>
  );
};
