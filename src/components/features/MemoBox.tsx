"use client";

import Image from "next/image";
import { ChangeEvent, useRef, useLayoutEffect } from "react";

interface Props {
  value: string;
  onChange: (newMemo: string) => void;
}

export default function MemoBox({ value, onChange }: Props) {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  const taRef = useRef<HTMLTextAreaElement>(null);

  useLayoutEffect(() => {
    const ta = taRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = `${Math.min(ta.scrollHeight, 230)}px`;
  }, [value]);

  return (
    <div className="relative flex overflow-hidden items-center justify-center w-[343px] md:w-[696px] xl:w-[588px] h-[311px] rounded-[24px]">
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
        ref={taRef}
        className="font-normal text-center w-full px-[20px] mt-[40px] text-[16px] text-slate-800 leading-none bg-transparent resize-none outline-none z-10"
        placeholder="메모를 입력해주세요"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
