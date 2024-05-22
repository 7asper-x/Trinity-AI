import { Toggle } from "../ui/toggle";
import { Brain } from "lucide-react";
import { BrainCircuit } from "lucide-react";
import { BrainCog } from "lucide-react";

export default function TrinityAI() {
  const AIList = ["ChatGPT", "Gemini", "Claude"] as const;

  type AIName = (typeof AIList)[number];

  const icons: Record<AIName, React.ComponentType> = {
    ChatGPT: Brain,
    Gemini: BrainCircuit,
    Claude: BrainCog,
  };

  return (
    <div className="sticky left-0 right-0 top-0 z-20 flex flex-col gap-3">
      {AIList.map((ai) => {
        const Icon = icons[ai];
        return (
          <Toggle
            key={ai}
            className="flex h-10 items-center gap-2.5 rounded-lg px-2 font-normal hover:bg-neutral-800 bg-transparent justify-start"
          >
            <Icon />
            <div className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
              {ai}
            </div>
          </Toggle>
        );
      })}
    </div>
  );
}
