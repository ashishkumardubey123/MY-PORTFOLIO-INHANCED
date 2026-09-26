import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Chrome, AppleIcon as Safari, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";
import { BlogContent } from "./BlogContent";

export const PLATFORMS = {
  WINDOWS: "Windows",
  MAC: "Mac",
  ANDROID: "Android",
  IPHONE: "iPhone",
};

type PlatformType = (typeof PLATFORMS)[keyof typeof PLATFORMS];

interface BrowserProps {
  platform: PlatformType;
  triggerButton: React.ReactNode;
}

export function Browser({ platform, triggerButton }: BrowserProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [blogStyle, setBlogStyle] = useState<"grid" | "list">("grid");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getBrowserIcon = () => {
    switch (platform) {
      case PLATFORMS.WINDOWS:
      case PLATFORMS.ANDROID:
        return <Chrome className="w-16 h-16 text-blue-500" />;
      case PLATFORMS.MAC:
        return <Safari className="w-16 h-16 text-blue-500" />;
      case PLATFORMS.IPHONE:
        return <Smartphone className="w-16 h-16 text-gray-500" />;
    }
  };

  const getBrowserContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          {getBrowserIcon()}
          <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className="w-full h-full bg-blue-500 animate-pulse" />
          </div>
        </div>
      );
    }

    return (
      <div className="p-4">
        <BlogContent
          blogStyle={blogStyle}
          onToggleStyle={() =>
            setBlogStyle((prev) => (prev === "grid" ? "list" : "grid"))
          }
        />
      </div>
    );
  };

  const getBrowserChrome = () => {
    switch (platform) {
      case PLATFORMS.WINDOWS:
        return (
          <div className="bg-gray-800 p-2 flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-grow rounded px-2 py-1 text-sm">
              https://my-portfolio-rk.vercel.app/blogs
            </div>
          </div>
        );
      case PLATFORMS.MAC:
        return (
          <div className="bg-gray-800 p-2 flex items-center space-x-2 rounded-t-lg">
            <div className="flex space-x-1">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-grow rounded-full px-3 py-1 text-sm text-center">
              my-portfolio-rk.vercel.app/blogs
            </div>
          </div>
        );
      case PLATFORMS.ANDROID:
        return (
          <div className="bg-gray-800 p-2 flex items-center space-x-2">
            <div className="flex-grow bg-gray-700 rounded px-2 py-1 text-sm text-white">
              https://my-portfolio-rk.vercel.app/blogs
            </div>
            <div className="w-4 h-4 rounded-full bg-gray-600" />
          </div>
        );
      case PLATFORMS.IPHONE:
        return (
          <div className="bg-gray-800 p-2 flex flex-col items-center space-y-2">
            <div className="w-16 h-1 bg-gray-700 rounded-full" />
            <div className="flex-grow rounded-full px-3 py-1 text-sm text-center w-full">
              my-portfolio-rk.vercel.app/blogs
            </div>
          </div>
        );
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{triggerButton}</DialogTrigger>
      <DialogContent
        className={cn(
          "sm:max-w-[90vw] md:max-w-[800px]",
          (platform === PLATFORMS.ANDROID || platform === PLATFORMS.IPHONE) &&
            "sm:max-w-[350px]"
        )}
      >
        <div
          className={cn(
            "w-full h-[80vh] rounded-lg shadow-lg overflow-hidden",
            (platform === PLATFORMS.ANDROID || platform === PLATFORMS.IPHONE) &&
              "h-[90vh]"
          )}
        >
          {getBrowserChrome()}
          <div className="h-full overflow-y-auto custom-scrollbar">
            {getBrowserContent()}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
