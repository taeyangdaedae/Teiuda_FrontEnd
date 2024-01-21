import { Helmet } from "react-helmet";
import { Topic } from "@/components/Think";
import { LongInputText } from "@/components/InputText";
import { ToggleBtn } from "@/components/Button";
import { CommonBtn } from "@/components/Button/CommonBtn";

const ThinkWrite = () => {
  const handleClick = () => {};
  return (
    <div>
      <Helmet>
        <title>생각 작성</title>
      </Helmet>
      <div>
        <Topic />
        <LongInputText />
        <ToggleBtn /> <span>공유</span>
        <CommonBtn value="등록" ClickHandler={handleClick} />
      </div>
    </div>
  );
};

export { ThinkWrite };
