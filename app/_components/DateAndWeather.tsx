// Get current date in two formats: "DD-MM-YY" and "Fri, Jul 12"
export function getCurrentDate() {
  const date = new Date();

  // Format 1: DD-MM-YY
  const formattedDateDDMMYY = `${date.getDate().toString().padStart(2, "0")}-${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${date.getFullYear().toString().slice(-2)}`;

  // Format 2: Fri, Jul 12
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
  };
  const formattedDateString = date.toLocaleDateString("en-US", options);

  return { formattedDateDDMMYY, formattedDateString };
}

// Get weather for New Delhi
export async function getWeatherForRajapuri() {
  const lat = 28.6139;
  const lon = 77.2088;
  const apiKey = process.env.NEXT_PUBLIC_API_URL;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return `${data.main.temp.toFixed(0)}°C ${data.weather[0].main}`;
  } catch (error) {
    return "Failed to fetch weather";
  }
}

// Get Today Time
export function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  const strHours = hours.toString().padStart(2, "0");
  const strMinutes = minutes.toString().padStart(2, "0");

  return `${strHours}:${strMinutes} ${ampm}`;
}

// enter full screen mode
export function enterFullScreen(
  toggleFullScreenIcon: (isFullScreen: boolean) => void
): void {
  const doc: Document = window.document;
  const docEl: HTMLElement = doc.documentElement;

  const requestFullScreen: () => Promise<void> =
    docEl.requestFullscreen ||
    (docEl as any).mozRequestFullScreen ||
    (docEl as any).webkitRequestFullScreen ||
    (docEl as any).msRequestFullscreen;

  const cancelFullScreen: () => Promise<void> =
    doc.exitFullscreen ||
    (doc as any).mozCancelFullScreen ||
    (doc as any).webkitExitFullscreen ||
    (doc as any).msExitFullscreen;

  // Check for iOS devices and use the appropriate method
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  if (isIOS) {
    // For iOS, we can use a workaround
    const elem = document.createElement("div");
    elem.style.width = "100%";
    elem.style.height = "100%";
    elem.style.position = "fixed";
    elem.style.top = "0";
    elem.style.left = "0";
    elem.style.zIndex = "9999";
    document.body.appendChild(elem);
    toggleFullScreenIcon(true);
  } else {
    if (
      !doc.fullscreenElement &&
      !(doc as any).mozFullScreenElement &&
      !(doc as any).webkitFullscreenElement &&
      !(doc as any).msFullscreenElement
    ) {
      requestFullScreen.call(docEl).then(() => toggleFullScreenIcon(true));
    } else {
      cancelFullScreen.call(doc).then(() => toggleFullScreenIcon(false));
    }
  }
}

export const handleWebsite = () => {
  window.open("https://my-portfolio-rk.vercel.app", "_blank");
};

export const handleCall = () => {
  window.location.href = "tel:+918882304322";
};

export const handleEmail = () => {
  window.location.href = "mailto:codeshorts007@gmail.com?subject=Hi";
};

export const handleShare = () => {
  if (navigator.share) {
    navigator
      .share({
        title: "Contact Ritesh",
        text: "Check out Ritesh's contact information",
        url: window.location.href,
      })
      .catch(console.error);
  } else {
    alert("Sharing is not supported on this device");
  }
};
