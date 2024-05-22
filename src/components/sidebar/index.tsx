import ChatHistory from "./ChatHistory";
import Header from "./Header";
import TrinityAI from "./TrinityAI";
import UpgradePlanButton from "./UpgradePlanButton";

export default function Sidebar() {
  return (
    <div className="w-[300px] h-full">
      <nav className="flex h-full w-full flex-col px-3 gap-2">
        <Header />
        <TrinityAI />
        <ChatHistory />
        <UpgradePlanButton />
      </nav>
    </div>
  );
}
