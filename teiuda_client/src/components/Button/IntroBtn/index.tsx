import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const IntroBtn = (props: { value: string }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    props.value === "로그인" ? navigate("/login") : navigate("/sign-up");
  };
  const Button = styled.div`
    width: 25rem;
    height: 4rem;
    border: none;
    outline: none;
    border-radius: 45px;
    background: #fff;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
    color: #0d3c26;
    font-family: NanumMyeongjo;
    font-size: 150%;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  return <Button onClick={() => handleClick()}>{props.value}</Button>;
};

export { IntroBtn };
