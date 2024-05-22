import { Sparkles } from "lucide-react";
import { Button } from "../ui/button";

export default function UpgradePlanButton() {
  return (
    <div className="flex flex-col empty:hidden py-2 border-white/20">
      <Button className="bg-tranparent gap-x-2 justify-start p-2 h-fit hover:bg-neutral-800 rounded-lg">
        <Sparkles className="rounded-full bg-transparent border-[1px] border-neutral-600 p-1 fill-white" />
        <div className="text-start">
          <h3>Upgrade plan</h3>
          <h5 className="font-normal text-xs text-zinc-400">Get GPT-4</h5>
        </div>
      </Button>
    </div>
  );
}
