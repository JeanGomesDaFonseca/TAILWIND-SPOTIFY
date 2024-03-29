import { ChevronLeft, ChevronRight } from "lucide-react";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import CapaAlbum from "./components/CapaAlbum";
import DailyMix from "./components/DailyMix";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <SideBar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3 mt-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <CapaAlbum />

          <h2 className="font-semibold text-2xl mt-10">Made for Jean Gomes</h2>

          <DailyMix />
        </main>
      </div>
      <Footer />
    </div>
  );
}
