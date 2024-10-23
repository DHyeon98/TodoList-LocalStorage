import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/form/form";
import { Link } from "react-router-dom";

export interface DataType {
  id: number;
  title: string;
  description: string;
}

function App() {
  const [data, setData] = useState<DataType[]>([]);

  const handleSubmit = (title: string, description: string) => {
    if (!title || !description) return alert("제목과 내용을 입력해주세요.");
    const formData = {
      id: Date.now(),
      title,
      description,
    };
    localStorage.setItem("data", JSON.stringify([...data, formData]));
    setData((prev) => [...prev, formData]);
  };

  const handleDataLoad = () => {
    const localData = localStorage.getItem("data");
    if (localData) {
      setData(JSON.parse(localData));
    }
  };

  useEffect(() => {
    handleDataLoad();
  }, []);
  return (
    <main>
      <h1>메인 페이지</h1>
      <Form handleSubmit={handleSubmit} />
      <ul>
        {data.map(({ id, title }: Omit<DataType, "description">) => {
          return (
            <li key={id}>
              <Link to={`/${id}`} state={data}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default App;
