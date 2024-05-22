import { Button } from "../ui/button";
import { PanelLeftClose } from "lucide-react";
import { SquarePen } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between h-14 items-center pt-2">
      <Button className="h-10 rounded-lg px-2.5 hover:bg-neutral-800 bg-transparent">
        <PanelLeftClose />
      </Button>
      <Button className="h-10 rounded-lg px-2.5 hover:bg-neutral-800 bg-transparent">
        <SquarePen />
      </Button>
    </div>
  );
}
