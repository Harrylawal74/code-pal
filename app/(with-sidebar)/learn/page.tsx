import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { Level } from "../../types/Questions";
import { LevelTabs } from "../../components/LevelTabs";
import { getLevel1Status, setLevel1Status } from "@/lib/supabase/ServerFunctions/DatabaseLevel1Data";






/* * This is the main page of the application.
  * It imports the LevelTab component and renders it inside a div.
  * The LevelTab component is used to display different levels of learning content.
  * The page is styled with a flexbox layout to arrange the components.
  * 
  * 
  * 
  * 
  * 
  * 
  * 
  * 
  * 
  * 
  * Need to find a way to pass props to LevelTab component then through that to the next page.
  * e.g. pass level1 as a prop then LevelTab pases it to the next page.
  */
export default async function Learn() {

  const statuses = await getLevel1Status();
  setLevel1Status();

  return (
   <div className="flex h-[calc(100vh-96px)] w-full bg-gray-700 rounded-3xl m-5 no-scrollbar overflow-auto">
    
    <LevelTabs  statuses={[statuses?.foundations ?? 1, statuses?.control_flow ?? 1]}/>
    
   </div>
  );
}