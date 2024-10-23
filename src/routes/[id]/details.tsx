import { useLocation, useNavigate } from "react-router-dom";
import { DataType } from "../../App";

export default function Details() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleDelete = () => {
    const localStorageData = localStorage.getItem("data");
    if (localStorageData) {
      const parseData = JSON.parse(localStorageData);
      const filterData = parseData.filter((item: DataType) => {
        return item.id !== state[0].id;
      });
      localStorage.setItem("data", JSON.stringify(filterData));
    }
    navigate("/", { replace: true });
  };

  return (
    <main>
      <button type="button" onClick={() => navigate(-1)}>
        뒤로 가기
      </button>
      <h1>상세 페이지</h1>
      <div>
        <h2>{state[0].title}</h2>
        <p>{state[0].description}</p>
      </div>
      <button onClick={handleDelete}>삭제</button>
    </main>
  );
}
