import React from "react";
import styled from "styled-components";
import profile_img from "./assets/profile_img.png";

const Content = () => {
  const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr 9fr;
  `;
  const MyProfile = styled.div`
    text-align: center;
    padding-top: 5%;
    img {
      cursor: pointer;
    }
  `;

  return (
    <Wrapper>
      <MyProfile>
        {window.location.pathname !== "/intro" ? (
          <img
            src={profile_img}
            alt="profile_img"
            onClick={() => alert("클릭")}
          />
        ) : null}
      </MyProfile>
    </Wrapper>
  );
};

export { Content };
