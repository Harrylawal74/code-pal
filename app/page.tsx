import {LevelTab} from "./components/LevelTab";
import RobotSVG from "./components/icons/LevelIcons/RobotSVG";
import Link from "next/link"

export default function Home() {
  return (
   <div>
    <Link href="/learn" >Learn</Link>
    <LevelTab />
    <RobotSVG />
   </div>
  );
}
