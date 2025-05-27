"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ChecklistItem from "./CheckListItem";
import Image from "next/image";

interface ToDo {
  id: string;
  name: string;
  isCompleted: boolean;
}

interface Props {
  todos: ToDo[];
  onToggle: (id: string) => void;
}

export default function ToDoSection({ todos, onToggle }: Props) {
  const router = useRouter();
  
  return (
    <div className="w-full h-full">
      <Image src="/images/todo.svg" alt="todo" width={101} height={36} />
      <div className="flex sm:w-[375px] md:w-[744px] w-lg:w-full flex-col">
        {todos.length === 0 ? (
          <div className="flex flex-col max-w-[588px] items-center text-slate-400 text-[16px] font-bold">
            <Image
              className="hidden md:block mt-[8px] lg:mt-[75px] mb-[24px]"
              src="/images/todo_large.svg"
              alt="todo_large"
              width={200}
              height={200}
            />
            <Image
              className="md:hidden mt-[8px] mb-[24px]"
              src="/images/todo_small.svg"
              alt="todo_small"
              width={120}
              height={120}
            />
            <p>할 일이 없어요.</p>
            <p>TODO를 새롭게 추가해주세요!</p>
          </div>
        ) : (
          <ul className="flex flex-col mt-[15px] gap-[15px]">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="cursor-pointer"
                onClick={() => router.push(`/items/${todo.id}`)}
              >
                <ChecklistItem
                  id={todo.id}
                  name={todo.name}
                  isCompleted={todo.isCompleted}
                  onToggle={onToggle}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
