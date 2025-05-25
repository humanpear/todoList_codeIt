"use client";
import Image from "next/image";

interface Props {
  children?: React.ReactNode;
}

export default function MemoBox( { children }: Props) {
  return (
    <div className="relative flex overflow-hidden items-center justify-center w-[588px] h-[311px] rounded-[24px]">
      <Image src="/images/memo.svg" alt="memo" fill style={{ objectFit: "cover" }}></Image>
      <div className="absolute top-[24px] font-extrabold text-[16px] text-amber-800 z-10">Memo</div>
      <div className="font-normal text-[16px] text-slate-800 z-10">{children}</div>
    </div>
  );
}
