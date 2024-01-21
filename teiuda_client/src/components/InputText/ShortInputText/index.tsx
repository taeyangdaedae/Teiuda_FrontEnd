import { ComponentProps, useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  border-radius: 30px 4px 90px 3px;
  background: #cdc8c1;
`;

const ShortInputText = (props: {
  type: string;
  placeholder: string;
  handleData: (type: string, value: string) => void;
}) => {
  const [data, setData] = useState("");
  const ChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  return (
    <Input
      value={data}
      type={props.type}
      placeholder={props.placeholder}
      onInput={ChangeHandler}
      onBlur={() => props.handleData(props.type, data)}
    />
  );
};

export { ShortInputText };
