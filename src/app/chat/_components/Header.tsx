import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Checkboxes from "./Checkboxes";

export default function Header() {
  return (
    <div className="sticky top-0 juice:p-3 mb-1.5 flex items-center justify-between z-10 h-14 p-2 font-semibold">
      <div className="flex items-center gap-0 overflow-hidden">
        <Checkboxes />
      </div>
      <div className="flex gap-2 pr-1">
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            baseTheme: dark,
            elements: { avatarBox: { width: "2.5rem", height: "2.5rem" } },
          }}
        />
      </div>
    </div>
  );
}
