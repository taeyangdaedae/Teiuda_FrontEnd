import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const handleError = () => {
    alert(
      "오류은 또는 잘못된 경로입니다. 확인을 누르면 이전 페이지로 연결됩니다.",
    );
    goBack();
  };

  return (
    <div>
      <h2>404 Not Found</h2>
      <button onClick={handleError}>돌아가기</button>
    </div>
  );
};

export { NotFound };
