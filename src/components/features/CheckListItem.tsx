"use client";

import CheckList, { CheckListStyle } from "@/components/ui/CheckList";

interface Props {
  id: string;
  name: string;
  isCompleted: boolean;
  onToggle: (id: string) => void;
}

export default function ChecklistItem({
  id,
  name,
  isCompleted,
  onToggle,
}: Props) {
  return (
    <CheckList
      id={id}
      checkListStyle={
        isCompleted ? CheckListStyle.ACTIVE : CheckListStyle.DEFAULT
      }
      onToggle={onToggle}
    >
      {name}
    </CheckList>
  );
}
