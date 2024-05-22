import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <main className="h-screen w-full flex flex-col items-center justify-center">
      <div className="flex flex-col gap-5 items-center">
        <div className="flex items-center gap-4">
          <span className="font-extrabold tracking-tight text-4xl lg:text-5xl">
            TrinityAI
          </span>
        </div>
        <p className="text-center max-w-prose">
          An intelligent chatbot app with multiple AIs integration, built with
          OpenAI, Gemini and Claude.
        </p>
        <Button size="lg" asChild className="w-32">
          <Link href="/chat">Open</Link>
        </Button>
      </div>
    </main>
  );
}
