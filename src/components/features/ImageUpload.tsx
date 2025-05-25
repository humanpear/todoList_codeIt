"use client";

import { useState, ChangeEvent } from "react";
import Image from "next/image";
import Button, { ButtonStyle } from "@/components/ui/Button";

interface Props {
  initialUrl?: string;
  onUpload?: (url: string) => void;
}

export default function ImageUpload({ initialUrl, onUpload }: Props) {
  const [previewUrl, setPreviewUrl] = useState<string>(initialUrl || "");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    onUpload?.(url);
  };

  return (
    <div
      className="
        relative flex items-center justify-center 
        w-[384px] h-[311px] rounded-[24px] 
        border-2 border-slate-300 border-dashed 
        bg-slate-50
      "
    >
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {previewUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={previewUrl}
          alt="uploaded preview"
          className="object-cover w-full h-full rounded-[24px]"
        />
      ) : (
        <>
          <div className="absolute right-[15px] bottom-[15px]">
            <Button buttonStyle={ButtonStyle.PLUS} />
          </div>
          <Image
            src="/images/img.svg"
            alt="img"
            width={64}
            height={64}
          />
        </>
      )}

      <label
        htmlFor="file-upload"
        className="absolute right-[15px] bottom-[15px] cursor-pointer"
      >
        <span className="sr-only">이미지 업로드</span>
      </label>
    </div>
  );
}
