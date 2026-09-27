"use client";
import { FC, useEffect, useState } from "react";
import {
  getCurrentDate,
  getCurrentTime,
  getWeatherForRajapuri,
  handleCall,
  handleEmail,
} from "./DateAndWeather";
import { Bell, Cloud } from "lucide-react";
import { TaskBarProps } from "@/types/Types";
import Image from "next/image";
import ProjectDialog from "./box";
import MyInfo from "./MyInfo";
import Contact from "./Contact";
import Tooltip from "./Tooltip";

const PLATFORMS = {
  WINDOWS: "Windows",
  ANDROID: "Android",
  MAC: "Mac",
  IPHONE: "iPhone",
};

const TaskBar: FC<TaskBarProps> = ({ platform }) => {
  const [weather, setWeather] = useState<string>("");
  const [currentTime, setCurrentTime] = useState<string>(getCurrentTime());
  const { formattedDateDDMMYY, formattedDateString } = getCurrentDate();

  useEffect(() => {
    if (platform === PLATFORMS.WINDOWS) {
      const fetchWeather = async () => {
        const weatherInfo = await getWeatherForRajapuri();
        setWeather(weatherInfo);
      };
      fetchWeather();
    }

    const timerId = setInterval(() => setCurrentTime(getCurrentTime()), 1000);
    return () => clearInterval(timerId);
  }, [platform]);

  const renderWeatherInfo = () => (
    <Tooltip text="Weather • Jabalpur, India">
      <div className="flex gap-2 text-xs cursor-default items-center">
        <span className="flex items-center">
          <Cloud size={18} />
        </span>
        <span className="flex flex-col leading-tight">
          <span className="font-medium">{weather ? weather.slice(0, 2) : "--"}°C</span>
          <span className="text-gray-200">{weather ? weather.slice(4) : ""}</span>
          <span className="text-[10px] text-gray-400">Jabalpur, India</span>
        </span>
      </div>
    </Tooltip>
  );

  const renderTimeAndDate = () => (
    <div className="flex flex-col">
      <span>{currentTime}</span>
      <span>{formattedDateDDMMYY}</span>
    </div>
  );

  const renderWindowsTaskbar = () => (
    <ul className="flex gap-4 justify-center items-center">
      <Tooltip text="Start menu">
        <MyInfo
          button={
            <li className="list-none cursor-pointer li">
              <Image
                src="/windows/win11_logo.png"
                width={45}
                height={40}
                alt="Windows 11 Logo"
              />
            </li>
          }
        />
      </Tooltip>
      <Tooltip text="About me">
        <MyInfo
          button={
            <li className="list-none cursor-pointer li">
              <Image
                src="/windows/edge.png"
                width={45}
                height={40}
                alt="Edge Logo"
              />
            </li>
          }
        />
      </Tooltip>
      <Tooltip text="Projects">
        <li className="list-none cursor-pointer li">
          <ProjectDialog
            platform={platform}
            button={
              <Image
                src="nextjs.svg"
                width={45}
                height={40}
                alt="Next.js Logo"
                className="bg-gray-300 p-1 rounded-lg shadow-xl"
              />
            }
          />
        </li>
      </Tooltip>
      <Tooltip text="Mail">
        <li onClick={handleEmail} className="list-none cursor-pointer li">
          <Image
            src="/windows/email.png"
            width={45}
            height={40}
            alt="Email Logo"
          />
        </li>
      </Tooltip>
      <Tooltip text="Contact">
        <Contact
          button={
            <li className="list-none cursor-pointer li">
              <Image
                src="/windows/phone.png"
                width={34}
                height={35}
                alt="Phone Logo"
              />
            </li>
          }
        />
      </Tooltip>
    </ul>
  );

  const renderAndroidTaskbar = () => (
    <ul className="flex gap-3 justify-center items-center">
      <Tooltip text="Call me">
        <li onClick={handleCall} className="list-none cursor-pointer">
          <Image
            src="/android/phone.png"
            width={50}
            height={50}
            alt="Phone Logo"
          />
        </li>
      </Tooltip>
      <Tooltip text="About me">
        <MyInfo
          button={
            <li className="list-none cursor-pointer">
              <Image
                src="/android/chrome.png"
                width={50}
                height={50}
                alt="Chrome Logo"
              />
            </li>
          }
        />
      </Tooltip>
      <Tooltip text="Gmail">
        <li onClick={handleEmail} className="list-none cursor-pointer">
          <Image
            src="/android/gmail.png"
            width={50}
            height={50}
            alt="Gmail Logo"
          />
        </li>
      </Tooltip>
      <Tooltip text="Contact">
        <Contact
          button={
            <li className="list-none cursor-pointer">
              <Image
                src="/android/user.png"
                width={50}
                height={50}
                alt="User Logo"
              />
            </li>
          }
        />
      </Tooltip>
    </ul>
  );

  const renderMacTaskbar = () => (
    <>
      <div className="absolute top-0 w-full py-1 bg-black/40 flex items-center justify-between px-3 md:px-5">
        <div className="flex items-center justify-center text-[13px] md:text-sm text-gray-100">
          <div className="flex items-center justify-center gap-2 mx-2">
            <Image
              src="/mac/apple.png"
              width={17}
              height={17}
              alt="Apple Logo"
              className="cursor-pointer"
            />
            <span className="font-semibold">Finder</span>
          </div>
          <div className="flex items-center justify-center gap-2 md:gap-4 md:mx-3 font-normal">
            <MyInfo button={<span className="cursor-pointer">About Me</span>} />
            <Contact button={<span className="cursor-pointer">Contact</span>} />
            <ProjectDialog
              platform={platform}
              button={<span className="cursor-pointer">Projects</span>}
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 md:gap-3">
          <button className="bg-gray-100 text-xs font-bold px-[4px] py-[2px] rounded-md text-center text-gray-500 cursor-pointer">
            EN
          </button>
          <span className="text-[13px] font-medium tracking-wide text-gray-100">
            {formattedDateString}
          </span>
          <span className="text-[13px] font-medium tracking-wide text-gray-100">
            {currentTime}
          </span>
        </div>
      </div>
      <div className="absolute bottom-[3px] py-2 px-3 border border-gray-700 mx-auto bg-black/20 rounded-xl">
        <ul className="flex gap-3 justify-center items-center">
          <Tooltip text="About me">
            <MyInfo
              button={
                <li className="list-none cursor-pointer hover:scale-110 transition-all duration-150">
                  <Image
                    src="/mac/safari.png"
                    width={52}
                    height={40}
                    alt="Safari Logo"
                  />
                </li>
              }
            />
          </Tooltip>
          <Tooltip text="Mail">
            <li
              onClick={handleEmail}
              className="list-none cursor-pointer hover:scale-110 transition-all duration-150"
            >
              <Image
                src="/mac/mail.png"
                width={52}
                height={40}
                alt="Mail Logo"
              />
            </li>
          </Tooltip>
          <Tooltip text="Projects">
            <li className="list-none cursor-pointer hover:scale-110 transition-all duration-150">
              <ProjectDialog
                platform={platform}
                button={
                  <Image
                    src="nextjs.svg"
                    width={52}
                    height={40}
                    alt="Next.js Logo"
                    className="bg-gray-300 p-1 rounded-lg shadow-xl"
                  />
                }
              />
            </li>
          </Tooltip>
          <Tooltip text="Call me">
            <li
              onClick={handleCall}
              className="list-none cursor-pointer hover:scale-110 transition-all duration-150"
            >
              <Image
                src="/windows/phone.png"
                width={52}
                height={40}
                alt="phone Logo"
              />
            </li>
          </Tooltip>
          <Tooltip text="Contact">
            <Contact
              button={
                <li className="list-none cursor-pointer hover:scale-110 transition-all duration-150">
                  <Image
                    src="/mac/contacts.png"
                    width={52}
                    height={40}
                    alt="contact Logo"
                  />
                </li>
              }
            />
          </Tooltip>
        </ul>
      </div>
    </>
  );

  const renderIPhoneTaskbar = () => (
    <div className="absolute bottom-[3px] py-1 px-3 border border-gray-700 mx-auto bg-black/20 rounded-xl">
      <ul className="flex gap-3 justify-center items-center">
        <Tooltip text="Call me">
          <li
            onClick={handleCall}
            className="list-none cursor-pointer hover:scale-110 transition-all duration-150"
          >
            <Image
              src="/iphone/phone.png"
              width={50}
              height={55}
              alt="Phone Logo"
            />
          </li>
        </Tooltip>
        <Tooltip text="About me">
          <MyInfo
            button={
              <li className="list-none cursor-pointer hover:scale-110 transition-all duration-150">
                <Image
                  src="/iphone/safari.png"
                  width={55}
                  height={55}
                  alt="Safari Logo"
                />
              </li>
            }
          />
        </Tooltip>
        <Tooltip text="Mail">
          <li
            onClick={handleEmail}
            className="list-none cursor-pointer hover:scale-110 transition-all duration-150"
          >
            <Image
              src="/iphone/mail.png"
              width={55}
              height={55}
              alt="Mail Logo"
            />
          </li>
        </Tooltip>
        <Tooltip text="Contact">
          {" "}
          <Contact
            button={
              <li className="list-none cursor-pointer hover:scale-110 transition-all duration-150">
                <Image
                  src="/iphone/contacts-ios.png"
                  width={55}
                  height={55}
                  alt="contact Logo"
                />
              </li>
            }
          />
        </Tooltip>
      </ul>
    </div>
  );

  const renderTaskbar = () => {
    switch (platform) {
      case PLATFORMS.WINDOWS:
      case PLATFORMS.ANDROID:
        return (
          <div
            className={`absolute bottom-0 w-full h-[60px] text-white flex justify-between items-center sm:px-4 ${
              platform === PLATFORMS.WINDOWS ? "glass-back" : "phone-glass"
            }`}
          >
            <div className="sm:w-[25%] h-full hidden sm:flex items-center justify-start">
              {platform === PLATFORMS.WINDOWS && renderWeatherInfo()}
            </div>
            <div className="w-full sm:w-[60%] md:w-3/4 h-full flex items-center justify-center">
              {platform === PLATFORMS.WINDOWS
                ? renderWindowsTaskbar()
                : renderAndroidTaskbar()}
            </div>
            <div className="sm:w-[25%] h-full hidden sm:flex items-center justify-end">
              <div className="flex text-xs gap-3 cursor-default">
                <div className="flex flex-col items-center justify-center md:mr-3">
                  <span>ENG</span>
                  <span>IN</span>
                </div>
                {renderTimeAndDate()}
                <div className="flex items-center justify-center">
                  <Bell size={16} />
                </div>
              </div>
            </div>
          </div>
        );
      case PLATFORMS.MAC:
        return renderMacTaskbar();
      case PLATFORMS.IPHONE:
        return renderIPhoneTaskbar();
      default:
        return null;
    }
  };

  return (
    <>
      <div className="absolute bg-black/25 bottom-20 px-4 text-xs font-light tracking-wide text-white border-gray-400 shadow-2xl cursor-default py-[2px] text-nowrap rounded-full mx-auto left-1/2 border -translate-x-1/2 flex items-center justify-center gap-1">
        <Image
          src="nextjs.svg"
          width={17}
          height={17}
          alt="Next.js Logo"
          className="bg-white rounded-full border-0"
        />
        <span>Made with</span>
        <span className="font-semibold">NextJs</span>
      </div>
      {renderTaskbar()}
    </>
  );
};

export default TaskBar;
