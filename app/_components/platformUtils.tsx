export const detectPlatform = (isPhone: boolean): string => {
  if (typeof window === "undefined") {
    return "Unknown platform";
  }

  const userAgent =
    window.navigator.userAgent ||
    window.navigator.vendor ||
    (window as any).opera;

  if (isPhone) {
    if (/Android/.test(userAgent)) {
      return "Android";
    } else if (/iPhone/.test(userAgent) && !(window as any).MSStream) {
      return "iPhone";
    } else {
      return "Android";
    }
  } else {
    if (/Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent)) {
      return "Mac";
    } else if (/Win32|Win64|Windows|WinCE/.test(userAgent)) {
      return "Windows";
    } else {
      return "Windows";
    }
  }
};

export const togglePlatform = (
  currentPlatform: string,
  isPhone: boolean
): string => {
  if (isPhone) {
    return currentPlatform === "iPhone" ? "Android" : "iPhone";
  } else {
    return currentPlatform === "Mac" ? "Windows" : "Mac";
  }
};
