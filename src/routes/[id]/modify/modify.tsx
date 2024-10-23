import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataType } from "../../../App";

export default function ModifyPage() {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleBackPage = () => {
    navigate(-1);
  };

  const filterData = () => {
    const localStorageItem = localStorage.getItem("data");
    if (localStorageItem && id) {
      const parseData = JSON.parse(localStorageItem);
      return parseData.filter((item: DataType) => {
        return item.id !== Number(id);
      });
    }
  };

  const handleModify = () => {
    if (!titleRef.current || !descriptionRef.current) {
      alert("값을 입력해주세요.");
      return;
    }

    if (!titleRef.current.value || !descriptionRef.current.value) {
      alert("값을 입력해주세요.");
      return;
    }

    localStorage.setItem(
      "data",
      JSON.stringify([
        ...filterData(),
        {
          id: Number(id),
          title: titleRef.current.value,
          description: descriptionRef.current.value,
        },
      ])
    );
    navigate("/", { replace: true });
  };

  return (
    <main>
      <h1>수정 페이지</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="수정할 제목을 입력해주세요."
          ref={titleRef}
        />
        <input
          type="text"
          placeholder="수정할 내용을 입력해주세요."
          ref={descriptionRef}
        />
        <div>
          <button onClick={handleBackPage}>뒤로 가기</button>
          <button onClick={handleModify}>수정하기</button>
        </div>
      </form>
    </main>
  );
}
