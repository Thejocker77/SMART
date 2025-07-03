"use client"

import { useState, useEffect } from "react"

export default function OccupancyChart() {
  const [currentTime, setCurrentTime] = useState(new Date().getHours())

  const occupancyData = [
    { time: "08", level: 20, status: "low" },
    { time: "09", level: 30, status: "low" },
    { time: "10", level: 40, status: "moderate" },
    { time: "11", level: 50, status: "moderate" },
    { time: "12", level: 60, status: "moderate" },
    { time: "13", level: 70, status: "high" },
    { time: "14", level: 65, status: "moderate" },
    { time: "15", level: 55, status: "moderate" },
    { time: "16", level: 75, status: "high" },
    { time: "17", level: 85, status: "high" },
    { time: "18", level: 95, status: "high" },
    { time: "19", level: 100, status: "high" },
    { time: "20", level: 80, status: "high" },
    { time: "21", level: 60, status: "moderate" },
    { time: "22", level: 40, status: "low" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().getHours())
    }, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  const getBarColor = (data: any, isCurrent: boolean) => {
    if (isCurrent) {
      return "bg-yellow-400 shadow-lg"
    }

    switch (data.status) {
      case "low":
        return "bg-green-400"
      case "moderate":
        return "bg-yellow-300"
      case "high":
        return "bg-red-400"
      default:
        return "bg-gray-300"
    }
  }

  return (
    <div className="relative">
      <div className="flex items-end justify-between h-32 bg-white p-2 rounded-md space-x-1 border">
        {occupancyData.map((data) => {
          const isCurrent = Number.parseInt(data.time) === currentTime
          return (
            <div key={data.time} className="flex flex-col items-center flex-1 h-full justify-end group relative">
              <div
                className={`w-full rounded-t-sm transition-all duration-500 hover:scale-105 cursor-pointer ${getBarColor(data, isCurrent)}`}
                style={{ height: `${data.level}%` }}
              />
              <span
                className={`text-xs mt-1 font-medium ${isCurrent ? "text-yellow-600 font-bold" : "text-muted-foreground"}`}
              >
                {data.time}h
              </span>

              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap z-10">
                {data.time}:00 - {data.level}% ocupação
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-2 text-center">
        <p className="text-xs text-gray-600">
          📊 Dados atualizados em tempo real • Última atualização:{" "}
          {new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
        </p>
      </div>
    </div>
  )
}
