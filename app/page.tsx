import Image from "next/image";
import Hello, {Bye} from "./components/Buttons";
import LevelTab from "./components/LevelTab";


export default function Home() {
  return (
   <div>
    <Hello />
    <Bye/>
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
