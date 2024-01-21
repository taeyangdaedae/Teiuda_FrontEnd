import styled from "styled-components";
import * as mock_data from "./mock.json";
import ThinkService from "@/api/service/think.service";
import TopicService from "@/api/service/topic.service";
import { useEffect, useState } from "react";
import { Topic } from "@/components/Think/Topic";

const MockData = mock_data;

interface ThinkCellDataType {
  user: string;
  content: string;
}

const ThinkBoard = (props: { isLoggedIn: boolean }) => {
  const [thinkData, setThinkData] = useState<ThinkCellDataType[]>([]);

  useEffect(() => {
    getThinkData();
  }, []);

  const getThinkData = () => {
    if (props.isLoggedIn) {
      ThinkService.getToday()
        .then((res: any) => {
          let tmp: ThinkCellDataType[] = [];
          res.forEach((data: any) => {
            tmp.push({ user: data.uid, content: data.content });
          });
          setThinkData(tmp);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    } else {
      let tmp: ThinkCellDataType[] = [];
      MockData.think.forEach((data: any) => {
        tmp.push({ user: data.user, content: data.content });
      });
      console.log("되나?");
      setThinkData(tmp);
    }
  };

  const Wrapper = styled.div`
    display: inline;
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
      <Topic isLoggedIn={props.isLoggedIn} />
      <Divider />
      <div className="think-board">
        {thinkData.map((data: ThinkCellDataType) => {
          return (
            <div className="think-cell">
              <div>{data.content}</div>
              <div>{data.user}</div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};
export { ThinkBoard };
