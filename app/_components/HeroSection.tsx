"use client";
import React, { useEffect, useState } from "react";
import {
  detectPlatform,
  togglePlatform as togglePlatformUtil,
} from "./platformUtils";
import Loader from "./Loader";
import TaskBar from "./TaskBar";
import { toast } from "sonner";
import Weather from "./Weather";
import MenuButtons from "./MenuButtons";

const HeroSection = () => {
  const [platform, setPlatform] = useState<string>("");
  const [isPhone, setIsPhone] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const checkDeviceType = () => {
    setLoading(true);
    const currentWindowSize = window.innerWidth;
    const newIsPhone = currentWindowSize <= 480;
    setIsPhone(newIsPhone);
    setPlatform(detectPlatform(newIsPhone));
    setLoading(false);
  };

  useEffect(() => {
    checkDeviceType();

    const handleResize = () => {
      const currentWindowSize = window.innerWidth;
      const newIsPhone = currentWindowSize <= 480;
      if (newIsPhone !== isPhone) {
        checkDeviceType();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isPhone]);

  useEffect(() => {
    toast("Did you Know?", {
      description: `This portfolio will also great on ${platform === "Windows" || platform === "Mac"
        ? "Mobile"
        : platform === "Android" || platform === "iPhone"
          ? "Desktop"
          : "Unknown"
        }`,
      action: {
        label: "OK",
        onClick: () => console.log("clicked"),
      },
      style: {
        background: "rgba(255, 255, 255, 0.07)",
        backdropFilter: "blur(5px)",
        color: "#fff",
        fontSize: "14px",
        border: "1px solid rgba(255, 255, 255, 0.01)",
      },
    });
  }, [platform]);

  const togglePlatform = () => {
    setLoading(true);
    setPlatform((prevPlatform) => togglePlatformUtil(prevPlatform, isPhone));
    setLoading(false);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div
      className="w-screen h-dvh flex items-center justify-center relative"
      style={{
        backgroundImage:
          platform === "Windows"
            ? "url('/win.jpg')"
            : platform === "Mac"
              ? "url('/mac.jpg')"
              : platform === "iPhone"
                ? "url('/iphone.jpg')"
                : "url('/android.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Weather platform={platform} />
      <TaskBar platform={platform} />
      <MenuButtons platform={platform} togglePlatform={togglePlatform} />
    </div>
  );
};

export default HeroSection;
