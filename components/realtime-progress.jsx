"use client"
import { useEffect, useState } from "react"

export function RealtimeProgress() {
  const [progress, setProgress] = useState(0)
  const [logs, setLogs] = useState([])

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8765") // change IP if backend runs in VM
    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data)

      if (msg.type === "progress") {
        setProgress(msg.value)
      }
      if (msg.type === "log") {
        setLogs((prev) => [msg.text, ...prev])
      }
    }

    return () => ws.close()
  }, [])

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Real-time Progress</h2>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-blue-500 h-4 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p>{progress.toFixed(2)}%</p>

      <div className="bg-black text-green-400 font-mono p-4 rounded-lg h-48 overflow-y-scroll">
        {logs.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
      </div>
    </div>
  )
}
