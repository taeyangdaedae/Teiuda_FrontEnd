import styled from "styled-components";

import arrow_icon from "./assets/icon-arrow.png";
import person_icon from "./assets/icon-person.png";
import note_icon from "./assets/icon-note.png";
import { useNavigate } from "react-router-dom";

const Section = (props: { value: string }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/my-page/" + props.value);
    window.location.reload();
  };
  var sectionData = {
    file: note_icon,
    text: "생각 이력",
  };
  if (props.value === "edit-info") {
    sectionData = {
      file: person_icon,
      text: "내 정보 수정",
    };
  }

  const Wrapper = styled.div`
    border-radius: 5%;
    display: grid;
    grid-template-columns: 2.5fr 5fr 2.5fr;
    place-items: center;

    > span {
      color: #0d3c26;
      font-family: NanumMyeongjo;
      font-size: 170%;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    &:hover {
      cursor: pointer;
      background: rgba(225, 212, 184, 0.5);
    }
    &:visited {
      background: rgba(225, 212, 184, 0.5);
    }
  `;

  return (
    <Wrapper onClick={() => handleClick()}>
      <img src={sectionData.file} alt={props.value} />
      <span>{sectionData.text}</span>
      <img src={arrow_icon} alt="arrow_icon" />
    </Wrapper>
  );
};

export { Section };
