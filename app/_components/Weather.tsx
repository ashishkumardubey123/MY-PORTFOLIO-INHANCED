"use client";
import React, { FC, useEffect, useState } from "react";
import { TaskBarProps } from "@/types/Types";
import { getWeatherForRajapuri } from "./DateAndWeather";
import {
  CloudHail,
  CloudSun,
  CloudSunRain,
  Info,
  MapPin,
  Sun,
} from "lucide-react";

const Weather: FC<TaskBarProps> = ({ platform }) => {
  const [weather, setWeather] = useState<string>("");

  useEffect(() => {
    if (platform === "Mac" || platform === "Android" || platform === "iPhone") {
      const fetchWeather = async () => {
        const weatherInfo: string = await getWeatherForRajapuri();
        setWeather(weatherInfo);
      };
      fetchWeather();
    }
  }, [platform]);

  return (
    <>
      <div
        className={`${
          platform === "Mac"
            ? "absolute right-10 top-10 hidden sm:flex"
            : "hidden"
        }`}
      >
        {platform === "Mac" && (
          <div className="phone-glass p-3 text-white  rounded-lg w-48 border border-gray-600 shadow-inner">
            <div className="text-base font-semibold">Jabalpur, India</div>
            <div className="text-2xl font-bold">
              {weather ? weather.toString().slice(0, 2) : "Loading..."}°C
            </div>
            <div className="flex items-center mt-2">
              <span className="text-base">
                {weather.toString().slice(4, weather.toString().length)}
              </span>
            </div>
            <div className="mt-2 text-sm">
              updated at{" "}
              {new Date().toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </div>
          </div>
        )}
      </div>
      {weather ? (
        <div
          className={`${
            platform === "Android" || platform === "iPhone"
              ? "absolute top-4 w-11/12  max-w-sm  mx-auto p-3 phone-glass border border-gray-700 shadow-2xl rounded-xl text-white"
              : "hidden"
          } `}
        >
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-base font-semibold flex items-center justify-center gap-2 text-nowrap">
                Jabalpur, India <MapPin size={15} />
              </h2>
              <span className="text-3xl font-semibold flex items-start justify-start">
                {weather ? weather.toString().slice(0, 2) : "Loading..."}
                <p className="text-xl">°C</p>
              </span>
            </div>
            <div className="flex flex-col items-end justify-center">
              <Sun size={20} />
              <p className="text-sm">
                {weather.toString().slice(4, weather.toString().length)}
              </p>
              <p className="text-xs">H: 40° L: 30°</p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="text-center">
              <p className="text-xs">10</p>
              <CloudSun size={20} />
              <p className="text-sm">32°</p>
            </div>
            <div className="text-center">
              <p className="text-xs">11</p>
              <Sun size={20} />
              <p className="text-sm">37°</p>
            </div>
            <div className="text-center">
              <p className="text-xs">12</p>
              <CloudSunRain />
              <p className="text-sm">38°</p>
            </div>
            <div className="text-center">
              <p className="text-xs">13</p>
              <CloudSun size={20} />
              <p className="text-sm">39°</p>
            </div>
            <div className="text-center">
              <p className="text-xs">14</p>
              <Sun size={20} />
              <p className="text-sm">40°</p>
            </div>
            <div className="text-center">
              <p className="text-xs">15</p>
              <CloudHail size={20} />
              <p className="text-sm">39°</p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`${
            platform === "Android" || platform === "iPhone"
              ? "absolute top-4 w-11/12  gap-3  max-w-sm  mx-auto p-3 phone-glass border border-gray-700 shadow-2xl rounded-xl text-white flex items-center justify-center flex-col"
              : "hidden"
          } `}
        >
          <Info />
          <p className="text-sm">Weather information not available</p>

          <button
            className="mt-2 px-3 py-1 text-center bg-transparent border text-white rounded-md"
            onClick={() => {
              window.location.reload();
            }}
          >
            Retry
          </button>
        </div>
      )}
    </>
  );
};

export default Weather;
