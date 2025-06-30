import Image from "next/image";
import Hello from "./components/Hello";
import LevelTab from "./components/LevelTab";


export default function Home() {
  return (
   <div><Hello />
   <span className="inline-grid grid-cols-3 gap-4">
    <LevelTab />
    <LevelTab />
    <LevelTab />
    <LevelTab />
    <LevelTab />
    <LevelTab />
    </span> {
   }
   </div>
  );
}
