"use client";
import Image from "next/image";

export enum CheckListDetailStyle {
  DEFAULT = "DEFAULT",
  ACTIVE = "ACTIVE",
}

interface Props {
  checkListDetailStyle: CheckListDetailStyle;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function CheckList({
  checkListDetailStyle,
  value,
  onChange,
  onKeyDown,
}: Props) {
  const selectCheckList = () => {
    switch (checkListDetailStyle) {
      case CheckListDetailStyle.DEFAULT:
        return (
          <div className="flex items-center justify-center gap-[16px] w-[343px] md:w-[696px] lg:w-[996px] h-[64px] rounded-[24px] border-[2px] border-slate-900 bg-whited">
            <Image
              src="/icons/checkbox_default.svg"
              alt="checkbox_default"
              width={32}
              height={32}
            ></Image>
            <input
              className="outline-none font-bold text-[20px] text-slate-900 underline"
              value={value}
              onChange={onChange}
              onKeyDown={onKeyDown}
            />
          </div>
        );
      case CheckListDetailStyle.ACTIVE:
        return (
          <div className="flex items-center justify-center gap-[16px] w-[343px] md:w-[696px] lg:w-[996px] h-[64px] rounded-[24px] border-[2px] border-slate-900 bg-violet-100">
            <Image
              src="/icons/checkbox_active.svg"
              alt="checkbox_active"
              width={32}
              height={32}
            ></Image>
            <input
              className="outline-none font-bold text-[20px] text-slate-900 underline"
              value={value}
              onChange={onChange}
              onKeyDown={onKeyDown}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return selectCheckList();
}
