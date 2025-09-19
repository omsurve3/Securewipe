// hooks/useWipeSocket.js
import { useEffect, useState } from "react";

export function useWipeSocket() {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8765");

    ws.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data);

        if (msg.type === "progress") {
          setProgress(msg.value);
        } else if (msg.type === "debug") {
          setLogs((prev) => [...prev, msg.text]);
        } else if (msg.type === "done") {
          setDone(true);
        }
      } catch (err) {
        console.error("Invalid WS message:", event.data);
      }
    };

    return () => ws.close();
  }, []);

  return { progress, logs, done };
}
