"use client";

import Image from "next/image";
import { useRef, useLayoutEffect } from "react";

export enum CheckListDetailStyle {
  DEFAULT = "DEFAULT",
  ACTIVE = "ACTIVE",
}

interface Props {
  checkListDetailStyle: CheckListDetailStyle;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onToggle?: () => void;
}

export default function CheckList({
  checkListDetailStyle,
  value,
  onChange,
  onKeyDown,
  onToggle,
}: Props) {
  // 크기 자동 조절을 위한 참조 설정
  const spanRef = useRef<HTMLSpanElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // value 변경 시마다 input 너비 업데이트
  useLayoutEffect(() => {
    const span = spanRef.current;
    const input = inputRef.current;
    if (span && input) {
      // span에 같은 텍스트와 스타일을 적용해 너비 측정
      span.textContent = value || "";
      const newWidth = span.offsetWidth;
      input.style.width = `${newWidth}px`;
    }
  }, [value]);

  const renderDefault = () => (
    <div className="flex items-center justify-center gap-[16px] w-[343px] md:w-[696px] xl:w-[996px] h-[64px] rounded-[24px] border-[2px] border-slate-900 bg-whited">
      <div className="cursor-pointer" onClick={onToggle}>
        <Image
          src="/icons/checkbox_default.svg"
          alt="checkbox_default"
          width={32}
          height={32}
        />
      </div>
      <div className="relative inline-block">
        <span
          ref={spanRef}
          className="invisible absolute whitespace-pre font-bold text-[20px] text-slate-900 underline"
        />
        <input
          ref={inputRef}
          type="text"
          className="outline-none font-bold text-[20px] bg-transparent text-slate-900 underline"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      </div>
    </div>
  );

  const renderActive = () => (
    <div className="flex items-center justify-center gap-[16px] w-[343px] md:w-[696px] xl:w-[996px] h-[64px] rounded-[24px] border-[2px] border-slate-900 bg-violet-100">
      <div className="cursor-pointer" onClick={onToggle}>
        <Image
          src="/icons/checkbox_active.svg"
          alt="checkbox_active"
          width={32}
          height={32}
        />
      </div>
      <div className="relative inline-block">
        <span
          ref={spanRef}
          className="invisible absolute whitespace-pre font-bold text-[20px] text-slate-900 underline"
        />
        <input
          ref={inputRef}
          type="text"
          className="outline-none font-bold text-[20px] bg-transparent text-slate-900 underline"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      </div>
    </div>
  );

  return checkListDetailStyle === CheckListDetailStyle.ACTIVE
    ? renderActive()
    : renderDefault();
}
