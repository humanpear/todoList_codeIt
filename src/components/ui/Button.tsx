"use client";

import React from "react";
import PlusIcon from "@/assets/icons/plus.svg";
import XIcon from "@/assets/icons/X.svg";
import CheckIcon from "@/assets/icons/check.svg";
import EditIcon from "@/assets/icons/edit.svg";

export enum ButtonStyle {
  ADD_DEFAULT_LARGE = "ADD_DEFAULT_LARGE",
  ADD_DEFAULT_SMALL = "ADD_DEFAULT_SMALL",
  ADD_ACTIVE_LARGE = "ADD_ACTIVE_LARGE",
  ADD_ACTIVE_SMALL = "ADD_ACTIVE_SMALL",
  DELETE_LARGE = "DELETE_LARGE",
  EDIT_DEFAULT_LARGE = "EDIT_DEFAULT_LARGE",
  EDIT_ACTIVE_LARGE = "EDIT_ACTIVE_LARGE",
  PLUS = "PLUS",
  EDIT = "EDIT",
}

interface Props {
  buttonStyle: ButtonStyle;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ buttonStyle, onClick }: Props) {
  const selectButton = () => {
    switch (buttonStyle) {
      case ButtonStyle.ADD_DEFAULT_LARGE:
        return (
          <div className="relative inline-block text-slate-900">
            <div className="absolute top-[4px] left-[3.65px] w-[168px] h-[56px] rounded-[24px] border-[2px] border-slate-900 bg-slate-900 z-0" />
            <button
              type="button"
              onClick={onClick}
              className="relative flex justify-center items-center gap-[4px] z-10 w-[168px] h-[56px] rounded-[24px] border-[2px] border-slate-900 bg-slate-200 font-bold text-[16px] "
            >
              <PlusIcon className="w-[16px] h-[16px]" />
              추가하기
            </button>
          </div>
        );
      case ButtonStyle.ADD_DEFAULT_SMALL:
        return (
          <div className="relative inline-block text-slate-900">
            <div className="absolute top-[4px] left-[3.65px] w-[56px] h-[56px] rounded-[24px] border-[2px] border-slate-900 bg-slate-900 z-0" />
            <button
              type="button"
              onClick={onClick}
              className="relative flex justify-center items-center gap-[4px] z-10 w-[56px] h-[56px] rounded-[24px] border-[2px] border-slate-900 bg-slate-200 font-bold text-[16px] "
            >
              <PlusIcon className="w-[16px] h-[16px]" />
            </button>
          </div>
        );
      case ButtonStyle.ADD_ACTIVE_LARGE:
        return (
          <div className="relative inline-block text-white">
            <div className="absolute top-[4px] left-[3.65px] w-[168px] h-[56px] rounded-[24px] border-[2px] border-slate-900 bg-slate-900 z-0" />
            <button
              type="button"
              onClick={onClick}
              className="relative flex justify-center items-center gap-[4px] z-10 w-[168px] h-[56px] rounded-[24px] border-[2px] border-slate-900 bg-violet-600 font-bold text-[16px] "
            >
              <PlusIcon className="w-[16px] h-[16px]" />
              추가하기
            </button>
          </div>
        );
      case ButtonStyle.ADD_ACTIVE_SMALL:
        return (
          <div className="relative inline-block text-white">
            <div className="absolute top-[4px] left-[3.65px] w-[56px] h-[56px] rounded-[24px] border-[2px] border-slate-900 bg-slate-900 z-0" />
            <button
              type="button"
              onClick={onClick}
              className="relative flex justify-center items-center gap-[4px] z-10 w-[56px] h-[56px] rounded-[24px] border-[2px] border-slate-900 bg-violet-600 font-bold text-[16px] "
            >
              <PlusIcon className="w-[16px] h-[16px]" />
            </button>
          </div>
        );
      case ButtonStyle.DELETE_LARGE:
        return (
          <div className="relative inline-block text-white">
            <div className="absolute top-[4px] left-[3.65px] w-[168px] h-[56px] rounded-[24px] border-[2px] border-slate-900 bg-slate-900 z-0" />
            <button
              type="button"
              onClick={onClick}
              className="relative flex justify-center items-center gap-[4px] z-10 w-[168px] h-[56px] rounded-[24px] border-[2px] border-slate-900 bg-rose-500 font-bold text-[16px] "
            >
              <XIcon className="w-[16px] h-[16px]" />
              삭제하기
            </button>
          </div>
        );
      case ButtonStyle.EDIT_DEFAULT_LARGE:
        return (
          <div className="relative inline-block text-slate-900">
            <div className="absolute top-[4px] left-[3.65px] w-[168px] h-[56px] rounded-[24px] border-[2px] border-slate-900 bg-slate-900 z-0" />
            <button
              type="button"
              onClick={onClick}
              className="relative flex justify-center items-center gap-[4px] z-10 w-[168px] h-[56px] rounded-[24px] border-[2px] border-slate-900 bg-slate-200 font-bold text-[16px] "
            >
              <CheckIcon className="w-[16px] h-[16px]" />
              수정완료
            </button>
          </div>
        );
      case ButtonStyle.EDIT_ACTIVE_LARGE:
        return (
          <div className="relative inline-block text-slate-900">
            <div className="absolute top-[4px] left-[3.65px] w-[168px] h-[56px] rounded-[24px] border-[2px] border-slate-900 bg-slate-900 z-0" />
            <button
              type="button"
              onClick={onClick}
              className="relative flex justify-center items-center gap-[4px] z-10 w-[168px] h-[56px] rounded-[24px] border-[2px] border-slate-900 bg-lime-300 font-bold text-[16px] "
            >
              <CheckIcon className="w-[16px] h-[16px]" />
              수정완료
            </button>
          </div>
        );
      case ButtonStyle.PLUS:
        return (
          <div className="text-slate-500">
            <button
              type="button"
              onClick={onClick}
              className="flex justify-center items-center w-[64px] h-[64px] rounded-full bg-slate-200"
            >
              <PlusIcon className="w-[24px] h-[24px]" />
            </button>
          </div>
        );
      case ButtonStyle.EDIT:
        return (
          <div>
            <button
              type="button"
              onClick={onClick}
              className="flex justify-center items-center w-[64px] h-[64px] border-[2px] border-slate-900 rounded-full bg-slate-900/50"
            >
              <EditIcon className="w-[24px] h-[24px]" />
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return selectButton();
}
