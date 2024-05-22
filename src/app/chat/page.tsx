import Header from "./_components/Header";
import InputBox from "./_components/InputBox";

export default function chatPage() {
  return (
    <div className="relative flex h-full max-w-full flex-1 flex-col overflow-hidden">
      <main className="relative h-full w-full flex-1 overflow-auto transition-width">
        <div className="flex h-full flex-col focus-visible:outline-0">
          <div className="flex-1 overflow-hidden">
            <div className="flex flex-col text-sm pb-9">
              <Header />
              <div>chat messages</div>
            </div>
          </div>
          <InputBox />
        </div>
      </main>
    </div>
  );
}
