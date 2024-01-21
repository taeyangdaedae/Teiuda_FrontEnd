import { useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import { ToggleBtn } from "@/components/Button";

const ThinkHistory = () => {
  const [historyData, setHistoryData] = useState([
    { topic: "topic", think: "think", createdAt: "createdAt" },
    { topic: "topic2", think: "think2", createdAt: "createdAt2" },
    { topic: "topic3", think: "think3", createdAt: "createdAt3" },
  ]);
  const Wrapper = styled.div`
    display: grid;
    place-items: center;
  `;
  const Table = styled.div`
    margin-left: 10%
    display: grid;
    grid-template-rows: auto;
    width: 70%;
    height: 90%
    border: 1px solid #735a19;
    > div{
      color: #0D3C26;
      font-family: NanumMyeongjo;
      font-style: normal;
      line-height: normal;
    }
    > div:first-child {
      font-size: 120%;
      font-weight: bold;
    }
  `;
  const Cell = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    > div {
      border: 1px solid #735a19;
    }
    > div#topic {
      font-size: 250%;
      font-weight: bold;
    }
  `;
  return (
    <div>
      <Helmet>
        <title>생각이력</title>
      </Helmet>
      <Wrapper>
        <Table>
          <Cell>
            <div>그날의 단어</div>
            <div>나의 생각</div>
            <div>작성시간</div>
          </Cell>
          {historyData.map((data, index) => (
            <Cell>
              <div id="topic" key={index}>
                {data.topic}
              </div>
              <div key={index}>{data.think}</div>
              <div>
                <div key={index}>{data.createdAt}</div>
                <ToggleBtn />
              </div>
            </Cell>
          ))}
        </Table>
      </Wrapper>
    </div>
  );
};
export { ThinkHistory };
