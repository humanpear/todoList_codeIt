"use client";

import { useState, ChangeEvent } from "react";
import Image from "next/image";
import Button, { ButtonStyle } from "@/components/ui/Button";
import { uploadImage } from "@/apis/upload";

interface Props {
  initialUrl?: string;
  onUpload?: (url: string) => void;
}

export default function ImageUpload({ initialUrl, onUpload }: Props) {
  const [previewUrl, setPreviewUrl] = useState<string>(initialUrl || "");

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const nameWithoutExt = file.name.replace(/\.[^/.]+$/, "");
    if (!/^[A-Za-z]+$/.test(nameWithoutExt)) {
      alert("파일 이름은 확장자 제외하고 영어 알파벳만 사용 가능합니다.");
      return;
    }

    const MAX_SIZE = 5 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      alert("파일 크기는 5MB 이하로 업로드해주세요.");
      return;
    }

    const localUrl = URL.createObjectURL(file);
    setPreviewUrl(localUrl);

    try {
      const uploadedUrl = await uploadImage(file);
      onUpload?.(uploadedUrl);
    } catch (err) {
      console.error("이미지 업로드 실패", err);
      alert("이미지 업로드에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div
      className="
        relative flex items-center justify-center 
        w-[343px] md:w-[696px] xl:w-[384px] h-[311px] rounded-[24px] 
        border-2 border-slate-300 border-dashed 
        bg-slate-50
      "
    >
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        className="absolute w-[64px] h-[64px] rounded-full right-[15px] bottom-[15px] opacity-0 cursor-pointer z-[10]"
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
          <div className="absolute right-[15px] bottom-[15px] z-[0]">
            <Button buttonStyle={ButtonStyle.PLUS} />
          </div>
          <Image src="/images/img.svg" alt="img" width={64} height={64} />
        </>
      )}
    </div>
  );
}
