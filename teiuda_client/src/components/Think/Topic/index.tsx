import { useEffect, useState } from "react";
import styled from "styled-components";
import TopicService from "@/api/service/topic.service";
import * as mock_data from "@/components/Think/ThinkBoard/mock.json";

const MockData = mock_data;

const Topic = (props: { isLoggedIn: boolean }) => {
  const [topicData, setTopicData] = useState<string>("");
  useEffect(() => {
    getTodayOne();
  }, []);
  const getTodayOne = () => {
    if (props.isLoggedIn) {
      TopicService.getTodayTopic()
        .then((res: any) => setTopicData(res.topic))
        .catch((e: Error) => {
          console.log(e);
        });
    } else {
      setTopicData(MockData.topic);
    }
  };

  const Topic = styled.span`
    margin: 0 auto;
    color: #0d3c26;

    font-family: "NanumMyeongjo";
    text-align: center;
    font-size: 300%;
    font-style: normal;
    font-weight: 400;
  `;
  return <Topic>{topicData}</Topic>;
};

export { Topic };
