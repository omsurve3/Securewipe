// hooks/useWipeData.js
"use client"
import { useEffect, useState } from "react"

export function useWipeData() {
  const [progress, setProgress] = useState(0)
  const [accuracy, setAccuracy] = useState(0)
  const [certificate, setCertificate] = useState(null)

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8765")
    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data)
      if (msg.type === "progress") setProgress(msg.value)
      if (msg.type === "accuracy") setAccuracy(msg.value)
      if (msg.type === "certificate") setCertificate(msg.value)
      if (msg.type === "done") setProgress(100)
    }
    return () => ws.close()
  }, [])

  return { progress, accuracy, certificate }
}
