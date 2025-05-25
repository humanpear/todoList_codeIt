"use client";
import Image from "next/image";

export enum CheckListStyle {
  DEFAULT = "DEFAULT",
  ACTIVE = "ACTIVE",
}

interface Props {
  id: string;
  checkListStyle: CheckListStyle;
  children?: React.ReactNode;
  onToggle: (id: string) => void;
}

export default function CheckList({
  id,
  checkListStyle,
  children,
  onToggle,
}: Props) {
  const selectCheckList = () => {
    switch (checkListStyle) {
      case CheckListStyle.DEFAULT:
        return (
          <div className="flex items-center gap-[16px] w-[527px] h-[50px] pl-[10px] rounded-[27px] border-[2px] border-slate-900 bg-whited">
            <div className="cursor-pointer" onClick={() => onToggle(id)}>
              <Image
                src="/icons/checkbox_default.svg"
                alt="checkbox_default"
                width={32}
                height={32}
              ></Image>
            </div>
            <div className="font-normal text-[16px] text-slate-800">
              {children}
            </div>
          </div>
        );
      case CheckListStyle.ACTIVE:
        return (
          <div className="flex items-center gap-[16px] w-[527px] h-[50px] pl-[10px] rounded-[27px] border-[2px] border-slate-900 bg-violet-100">
            <div className="cursor-pointer" onClick={() => onToggle(id)}>
              <Image
                src="/icons/checkbox_active.svg"
                alt="checkbox_active"
                width={32}
                height={32}
              ></Image>
            </div>
            <div className="font-normal text-[16px] text-slate-800 line-through">
              {children}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return selectCheckList();
}
