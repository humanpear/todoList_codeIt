'use client'
import Image from "next/image";

export enum CheckListDetailStyle {
  DEFAULT = "DEFAULT",
  ACTIVE = "ACTIVE",
}

interface Props {
  checkListDetailStyle: CheckListDetailStyle;
  children?: React.ReactNode;
}

export default function CheckList({ checkListDetailStyle, children }: Props) {
  const selectCheckList = () => {
    switch (checkListDetailStyle) {
      case CheckListDetailStyle.DEFAULT:
        return (
          <div className="flex items-center justify-center gap-[16px] w-[996px] h-[64px] rounded-[24px] border-[2px] border-slate-900 bg-whited">
            <Image src="/icons/checkbox_default.svg" alt="checkbox_default" width={32} height={32}></Image>
            <div className="font-bold text-[20px] text-slate-900 underline">{children}</div>
          </div>
        );
      case CheckListDetailStyle.ACTIVE:
        return (
          <div className="flex items-center justify-center gap-[16px] w-[996px] h-[64px] rounded-[24px] border-[2px] border-slate-900 bg-violet-100">
            <Image src="/icons/checkbox_active.svg" alt="checkbox_active" width={32} height={32}></Image>
            <div className="font-bold text-[20px] text-slate-900 underline">{children}</div>
          </div>
        );
      default:
        return null;
    }
  };

  return selectCheckList();
}