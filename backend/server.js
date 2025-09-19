// backend/server.js
import WebSocket, { WebSocketServer } from "ws";
import fs from "fs";

const wss = new WebSocketServer({ port: 8765 });
console.log("✅ WebSocket server running on ws://localhost:8765");

function broadcast(msg) {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(msg));
    }
  });
}

const logFile = "./wipe.log"; // adjust if needed
fs.watchFile(logFile, { interval: 500 }, () => {
  const lines = fs.readFileSync(logFile, "utf-8").trim().split("\n");
  const lastLine = lines[lines.length - 1];

  let msg = null;
  if (lastLine.startsWith("PROGRESS:")) {
    msg = { type: "progress", value: parseInt(lastLine.replace("PROGRESS:", ""), 10) };
  } else if (lastLine.startsWith("[WIPE-DEBUG]")) {
    msg = { type: "debug", text: lastLine };
  } else if (lastLine === "DONE") {
    msg = { type: "done" };
  }

  if (msg) broadcast(msg);
});
