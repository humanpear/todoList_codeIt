"use client";
import { useState, useEffect, KeyboardEvent } from "react";
import ToDoSection from "@/components/features/ToDoSection";
import DoneSection from "@/components/features/DoneSection";
import GNB, { GNBStyle } from "@/components/ui/GNB";
import Search from "@/components/ui/Search";
import Button, { ButtonStyle } from "@/components/ui/Button";
import { getTodos, createTodo, updateTodo, Todo } from "@/apis/todo";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newName, setNewName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getTodos();
        setTodos(data);
      } catch (err) {
        console.error("할 일 불러오기 실패", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleToggle = async (id: string) => {
    try {
      const target = todos.find((t) => t.id === id);
      if (!target) return;

      const updated = await updateTodo(id, {
        isCompleted: !target.isCompleted,
      });

      setTodos((prev) => prev.map((t) => (t.id === id ? updated : t)));
    } catch (err) {
      console.error("상태 변경 실패", err);
    }
  };

  const handleAdd = async () => {
    if (!newName.trim()) return;
    try {
      // createTodo({ name, imageUrl? }) 시그니처에 맞춰서 객체 전달
      const created = await createTodo({ name: newName.trim() });
      setTodos((prev) => [created, ...prev]);
      setNewName("");
    } catch (err) {
      console.error("할 일 생성 실패", err);
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleAdd();
  };

  if (loading) {
    return <p className="pl-[360px] pt-[24px]">로딩중...</p>;
  }

  return (
    <>
      <GNB GnbStyle={GNBStyle.LARGE}></GNB>
      <div className="flex flex-col w-[1550px]">
        <div className="flex pt-[24px] pl-[360px] pb-[30px] w-full gap-[16px]">
          <Search
            value={newName}
            placeholder="할 일을 입력해주세요"
            onChange={(e) => setNewName(e.target.value)}
            onKeyDown={onKeyDown}
          ></Search>
          <Button
            buttonStyle={ButtonStyle.ADD_DEFAULT_LARGE}
            onClick={handleAdd}
          ></Button>
        </div>
        <div className="flex w-full pl-[360px]">
          <ToDoSection
            todos={todos.filter((t) => !t.isCompleted)}
            onToggle={handleToggle}
          />

          <DoneSection
            todos={todos.filter((t) => t.isCompleted)}
            onToggle={handleToggle}
          />
        </div>
      </div>
    </>
  );
}
