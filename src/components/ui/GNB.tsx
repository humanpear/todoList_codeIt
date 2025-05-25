"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export enum GNBStyle {
  LARGE = "LARGE",
  MEDIUM = "MEDIUM",
  SMALL = "SMALL",
}

interface Props {
  GnbStyle: GNBStyle;
  children?: React.ReactNode;
}

export default function GNB({ GnbStyle }: Props) {
  const router = useRouter();
  const handleLogoClick = () => {
    router.push("/");
  };

  const selectGNB = () => {
    switch (GnbStyle) {
      case GNBStyle.LARGE:
        return (
          <div
            className="flex justify-start items-center w-[1920px] h-[60px] pl-[360px] bg-white border-b border-slate-200 cursor-pointer"
            onClick={handleLogoClick}
          >
            <Image
              src="/images/doit_large.svg"
              alt="doit_large"
              width={151}
              height={40}
            />
          </div>
        );
      case GNBStyle.MEDIUM:
        return (
          <div
            className="flex justify-start items-center w-[744px] h-[60px] pl-[24px] bg-white border-b border-slate-200 cursor-pointer"
            onClick={handleLogoClick}
          >
            <Image
              src="/images/doit_large.svg"
              alt="doit_large"
              width={151}
              height={40}
            />
          </div>
        );
      case GNBStyle.SMALL:
        return (
          <div
            className="flex justify-between items-center w-[375px] h-[60px] pl-[16px] bg-white border-b border-slate-200 cursor-pointer"
            onClick={handleLogoClick}
          >
            <Image
              src="/images/doit_small.svg"
              alt="doit_large"
              width={71}
              height={40}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return selectGNB();
}
