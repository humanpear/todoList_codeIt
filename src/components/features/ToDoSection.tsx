"use client";

import React from "react";
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
  return (
    <div className="w-full h-full">
      <Image src="/images/todo.svg" alt="todo" width={101} height={36} />
      <div className="flex flex-col">
        {todos.length === 0 ? (
          <div className="flex flex-col items-center text-slate-400 text-[16px] font-bold">
            <Image
            className="mt-[75px] mb-[24px]"
              src="/images/todo_large.svg"
              alt="todo_large"
              width={200}
              height={200}
            />
            <p>할 일이 없어요.</p>
            <p>TODO를 새롭게 추가해주세요!</p>
          </div>
        ) : (
          <ul className="flex flex-col mt-[15px] gap-[15px]">
            {todos.map((todo) => (
              <li key={todo.id}>
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
