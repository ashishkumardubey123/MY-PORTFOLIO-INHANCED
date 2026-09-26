import { TaskBarProps } from "@/types/Types";
import Image from "next/image";
import React, { FC } from "react";

const PopLoader: FC<TaskBarProps> = ({ platform }) => {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center gap-4">
      {platform === "Windows" ? (
        <Image
          src="/windows/microsoft-store.png"
          width={100}
          height={100}
          alt="Windows Logo"
        />
      ) : platform === "Mac" ? (
        <div className=" flex flex-col gap-2">
          <div className="spin center">
            <div className="spin-blade"></div>
            <div className="spin-blade"></div>
            <div className="spin-blade"></div>
            <div className="spin-blade"></div>
            <div className="spin-blade"></div>
            <div className="spin-blade"></div>
            <div className="spin-blade"></div>
            <div className="spin-blade"></div>
            <div className="spin-blade"></div>
            <div className="spin-blade"></div>
            <div className="spin-blade"></div>
            <div className="spin-blade"></div>
          </div>
        </div>
      ) : platform === "Android" ? (
        <Image
          src="/android/store.png"
          width={70}
          height={70}
          alt="Android Logo"
        />
      ) : platform === "iPhone" ? (
        <div className=" flex flex-col gap-2">
          <div className="spin center">
            <div className="spin-blade"></div>
            <div className="spin-blade"></div>
            <div className="spin-blade"></div>
            <div className="spin-blade"></div>
            <div className="spin-blade"></div>
            <div className="spin-blade"></div>
            <div className="spin-blade"></div>
            <div className="spin-blade"></div>
            <div className="spin-blade"></div>
            <div className="spin-blade"></div>
            <div className="spin-blade"></div>
            <div className="spin-blade"></div>
          </div>
        </div>
      ) : null}
      {platform === "Mac" || platform == "iPhone" ? (
        <span className="text-gray-500 text-sm uppercase mt-10 font-semibold">
          Loading
        </span>
      ) : (
        <svg className="svg-class" viewBox="25 25 50 50">
          <circle className="circle" r="20" cy="50" cx="50"></circle>
        </svg>
      )}
    </div>
  );
};

export default PopLoader;
