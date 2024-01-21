import { useLinkClickHandler } from "react-router-dom";
import styled from "styled-components";

const CommonBtn = (props: { value: string; ClickHandler: any }) => {
  const Button = styled.button`
    border-radius: 3px;
    background: #c8c2bb;
    color: #000;
    font-family: NanumMyeongjo;
    font-size: 120%;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `;
  return <Button onClick={props.ClickHandler()}> {props.value} </Button>;
};

export { CommonBtn };
