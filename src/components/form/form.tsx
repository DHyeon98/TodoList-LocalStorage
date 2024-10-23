import { FormEvent, useRef } from "react";

interface FromType {
  handleSubmit: (title: string, description: string) => void;
}

export default function Form({ handleSubmit }: FromType) {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (titleRef.current && descriptionRef.current) {
      handleSubmit(titleRef.current.value, descriptionRef.current.value);
    } else {
      alert("값을 입력해주세요.");
    }
  };
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input type="text" ref={titleRef} />
      <input type="text" ref={descriptionRef} />
      <button type="submit">저장</button>
    </form>
  );
}
