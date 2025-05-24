"use client";
import React, { useRef, useState } from "react";

interface Message {
  role: "user" | "ai";
  content: string;
}

const welcome = "您好，我是AI客服，有什么可以帮您？";

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", content: welcome },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  // 简单AI自动回复逻辑
  function aiReply(userMsg: string): string {
    if (userMsg.includes("出版")) return "我们可为您提供专业的图书出版服务，欢迎详细咨询！";
    if (userMsg.includes("专利")) return "专利转让、申请、运营等服务都可办理。";
    if (userMsg.includes("大模型")) return "我们有大模型开发相关书籍、视频和配套产品。";
    if (userMsg.includes("嵌入式")) return "嵌入式开发教学是我们的特色业务之一。";
    if (userMsg.includes("你好") || userMsg.includes("您好")) return "您好！请问有什么可以帮您？";
    return "感谢您的咨询，我们会尽快安排专员与您联系。";
  }

  function handleSend() {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((msgs) => [...msgs, { role: "user", content: userMsg }]);
    setInput("");
    setTimeout(() => {
      setMessages((msgs) => [...msgs, { role: "ai", content: aiReply(userMsg) }]);
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 600);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 flex flex-col items-center py-8">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl flex flex-col h-[70vh] border border-orange-100">
        <div className="flex-shrink-0 px-6 py-4 border-b text-xl font-bold text-orange-600 flex items-center gap-3">
          <span className="inline-block w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-2xl">🤖</span>
          AI在线客服
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-gradient-to-br from-white to-orange-50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              {msg.role === "ai" && (
                <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-lg mr-2">🤖</span>
              )}
              <div
                className={`px-4 py-2 rounded-2xl max-w-[70%] text-base shadow-md ${
                  msg.role === "user"
                    ? "bg-orange-500 text-white rounded-br-3xl"
                    : "bg-white text-gray-800 rounded-bl-3xl border border-orange-100"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
        <div className="p-4 border-t flex gap-2 bg-white rounded-b-3xl">
          <input
            className="flex-1 border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm"
            placeholder="请输入您的问题..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') handleSend(); }}
          />
          <button
            className="bg-orange-500 text-white px-6 py-2 rounded-xl hover:bg-orange-600 transition font-semibold shadow-md"
            onClick={handleSend}
          >发送</button>
        </div>
      </div>
    </main>
  );
} 