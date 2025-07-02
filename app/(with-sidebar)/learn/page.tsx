import { LevelTab } from "../../components/LevelTab";
import SideBar from "@/app/components/SideBar";



/* * This is the main page of the application.
  * It imports the LevelTab component and renders it inside a div.
  * The LevelTab component is used to display different levels of learning content.
  * The page is styled with a flexbox layout to arrange the components.
  */
export default function Learn() {
  return (
   <div >
    <LevelTab />
   </div>
  );
}