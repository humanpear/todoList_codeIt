"use client";

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

export default function DoneSection({ todos, onToggle }: Props) {
  return (
    <div className="w-full h-full">
      <Image src="/images/done.svg" alt="done" width={101} height={36} />
      <div className="flex flex-col">
        {todos.length === 0 ? (
          <div className="flex flex-col items-center text-slate-400 text-[16px] font-bold">
            <Image
            className="mt-[75px] mb-[39px]"
              src="/images/done_large.svg"
              alt="done_large"
              width={200}
              height={200}
            />
            <p>아직 다 한 일이 없어요.</p>
            <p>해야 할 일을 체크해보세요!</p>
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
