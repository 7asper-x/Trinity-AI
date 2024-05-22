"use client";

import { cn } from "@/lib/utils";
import { useChat } from "ai/react";
import { Bot, Trash, XCircle } from "lucide-react";
import { Message } from "ai";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function InputBox() {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading,
    error,
  } = useChat();

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const lastMessageIsUser = messages[messages.length - 1]?.role === "user";

  return (
    <div className="w-full md:pt-0">
      <div className="px-3 text-base m-auto md:px-5 lg:px-1 xl:px-5">
        <div className="mx-auto flex flex-1 gap-3 text-base juice:gap-4 juice:md:gap-6 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem]">
          <form onSubmit={handleSubmit} className="w-full flex gap-3">
            <Button
              title="Clear chat"
              size="icon"
              className="shrink-0 rounded-lg"
              type="button"
              onClick={() => setMessages([])}
            >
              <Trash />
            </Button>
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Say something..."
              ref={inputRef}
              className="bg-neutral-700 border-0 rounded-lg"
            />
            <Button type="submit" className="rounded-lg">
              Send
            </Button>
          </form>
        </div>
      </div>
      <div className="relative px-2 py-2 text-center text-xs text-token-text-secondary md:px-[60px]">
        <span>ChatGPT can make mistakes. Check important info.</span>
      </div>
    </div>
  );
}
