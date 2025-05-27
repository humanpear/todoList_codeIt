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
      const created = await createTodo({
        name: newName.trim(),
      });
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
    return <p className="w-full justify-center pt-[24px]">로딩중...</p>;
  }

  return (
    <>
      <div className="hidden xl:block">
        <GNB GnbStyle={GNBStyle.LARGE} />
      </div>
      <div className="hidden md:block xl:hidden">
        <GNB GnbStyle={GNBStyle.MEDIUM} />
      </div>
      <div className="md:hidden">
        <GNB GnbStyle={GNBStyle.SMALL} />
      </div>

      <div className="flex flex-col w-[1550px]">
        <div className="flex pt-[24px] pl-[24px] xl:pl-[360px] pb-[30px] w-full gap-[16px]">
          <Search
            value={newName}
            placeholder="할 일을 입력해주세요"
            onChange={(e) => setNewName(e.target.value)}
            onKeyDown={onKeyDown}
          ></Search>
          <div className="hidden md:block">
            <Button
              buttonStyle={ButtonStyle.ADD_DEFAULT_LARGE}
              onClick={handleAdd}
            ></Button>
          </div>
          <div className="md:hidden">
            <Button
              buttonStyle={ButtonStyle.ADD_DEFAULT_SMALL}
              onClick={handleAdd}
            ></Button>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row sm:w-[375px] md:w-[744px] w-xl:w-full xl:gap-[235px] gap-[24px] pl-[24px] xl:pl-[360px] pb-[30px]">
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
