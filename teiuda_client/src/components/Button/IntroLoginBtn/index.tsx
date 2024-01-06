import styled from "styled-components";

const IntroLoginBtn = () => {
  const Wrapper = styled.div`
    display: grid;
    place-items: center;
  `;
  const Button = styled.button`
    width: 25rem;
    height: 4rem;
    border: none;
    outline: none;
    border-radius: 45px;
    background: #fff;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
    color: #0d3c26;
    font-family: NanumMyeongjo;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
    cursor: pointer;
    text-align: center;
  `;
  return (
    <Wrapper>
      <Button
        onClick={() => {
          alert("클릭");
        }}
        style={{ gridArea: "1/1" }}
      >
        로그인 | 회원가입
      </Button>
    </Wrapper>
  );
};

export { IntroLoginBtn };
