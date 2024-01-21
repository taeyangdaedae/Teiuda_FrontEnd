import { useState } from "react";

interface TextareaProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: React.FC<TextareaProps> = ({ value, onChange }) => {
  return <textarea value={value} onChange={onChange} />;
};

const LongInputText = () => {
  const [text, setText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <Textarea value={text} onChange={handleChange} />
    </div>
  );
};

export { LongInputText };
