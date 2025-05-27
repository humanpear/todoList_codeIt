"use client";

import React from "react";

interface Props {
  value: string;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

export default function Search({
  value,
  placeholder = "",
  onChange,
  onKeyDown,
}: Props) {
  return (
    <div className="relative inline-block">
      <div className="absolute top-[3.5px] left-[4px] lg:w-[1016px] md:w-[518px] w-[280px] h-[56px] rounded-[24px] border-[2px] border-slate-900 bg-slate-900 z-0" />
      <div className="relative flex items-center lg:w-[1016px] md:w-[518px] w-[280px] h-[56px] pl-[24px] rounded-[24px] border-[2px] border-slate-900 bg-slate-100 z-10">
        <input
          type="text"
          className="font-normal w-[calc(100%-5px)] text-[16px] text-slate-900 bg-slate-100 outline-none"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      </div>
    </div>
  );
}
