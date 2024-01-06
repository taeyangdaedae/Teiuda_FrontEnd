import styled from "styled-components";

const ThinkBoard = (props: { isIntro: boolean }) => {
  const Wrapper = styled.div`
    display: inline;
  `;
  const Topic = styled.span`
    margin: 0 auto;
    color: #0d3c26;

    font-family: "NanumMyeongjo";
    text-align: center;
    font-size: 300%;
    font-style: normal;
    font-weight: 400;
  `;
  const Divider = styled.span`
    position: relative;
    top: 20%;
    width: 1px;
    height: 60%;
    border: 0;
    background-color: #735a19;
  `;
  return (
    <Wrapper>
      <Topic> 토픽 </Topic>
      <Divider />
      {props.isIntro ? <div>Demo Content </div> : <div> Real Content </div>}
    </Wrapper>
  );
};
export { ThinkBoard };
