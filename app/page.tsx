import RobotSVG from "./components/icons/LevelIcons/RobotSVG";
import Link from "next/link"
import Learn from "./(with-sidebar)/learn/page";
import SideBar from "./components/SideBar";
import {redirect} from "next/navigation";
import next from "next";


/* 
  * Instead of rendering a main page, you are forwarded to the learn page
*/

export default function Home() {
  redirect("/learn");
}
