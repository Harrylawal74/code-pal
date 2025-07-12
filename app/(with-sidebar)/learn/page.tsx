import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { Level } from "../../types/Questions";
import { LevelTab } from "../../components/LevelTab";
import level1 from "../../data/leveldata/level1";







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
export default function Learn() {
  return (
   <div className="flex min-h-screen">
    
    <LevelTab />
 

    
   </div>
  );
}