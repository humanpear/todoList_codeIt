"use client";

import Image from "next/image";
import { ChangeEvent } from "react";

interface Props {
  value: string;
  onChange: (newMemo: string) => void;
}

export default function MemoBox({ value, onChange }: Props) {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="relative flex overflow-hidden items-center justify-center w-[588px] h-[311px] rounded-[24px]">
      <Image
        src="/images/memo.svg"
        alt="memo"
        fill
        style={{ objectFit: "cover" }}
      ></Image>
      <div className="absolute top-[24px] font-extrabold text-[16px] text-amber-800 z-10">
        Memo
      </div>
      <textarea
        className="font-normal text-[16px] text-slate-800 z-10"
        placeholder="메모를 입력해주세요"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
