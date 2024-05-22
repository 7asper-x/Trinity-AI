import Link from "next/link";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

interface ChatHistoryItem {
  id: string;
  title: string;
}

export default function ChatHistory() {
  const chatHistory: ChatHistoryItem[] = [
    { id: "1", title: "Chat with GPT-4" },
    { id: "2", title: "Chat with Gemini" },
    { id: "3", title: "Chat with Claude" },
  ];

  return (
    <ScrollArea className="h-full w-full rounded-md mt-5">
      <h4 className="sticky left-0 right-0 top-0 text-sm font-medium leading-none bg-neutral-950 pb-3">
        Chat History
      </h4>
      {chatHistory.map((chat) => (
        <>
          <Button
            key={chat.id}
            className="flex h-10 items-center gap-2.5 rounded-lg px-2 font-normal hover:bg-neutral-800 bg-transparent justify-start"
            asChild
          >
            <Link href={`/chat/${chat.id}`}>{chat.title}</Link>
          </Button>
        </>
      ))}
    </ScrollArea>
  );
}
