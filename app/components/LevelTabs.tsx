import React from "react";
import Link from "next/link";
import level1 from "../data/leveldata/level1";

// This is the LevelTab component

//props for the LevelTab component
type TabProps = { 
  title: string;
  description: string;
  lessons: string;
  status: string; 
}



/** This is the LevelTab template
 * * It is used to display a level of learning content.
 * * Each level uses this as a template to display the level information.
 */
export default function LevelTabTemplate({status, title, description, lessons}: TabProps) {
  return (
    <div className="w-125 h-65 bg-white rounded-xl shadow-lg text-black text-xl relative">
      <div className="w-100% h-3 bg-[#0aa775] rounded-t-xl"></div>
      <div className="pt-6 px-6 w-125 h-55 bg-white-900 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-between items-center">
            <div>logo</div>
            <h3 className="text-green-900 text-[15px] rounded-xl bg-green-100 px-1 py-0.5">{status}</h3>
        </div>
        <h2 className="font-bold mt-4">{title}</h2>
        <p className="text-[16px] text-gray-500">{description}</p>
        <div className="flex justify-between items-center mt-6 text-[14px] mt-10">
            <div className="text-gray-600">{lessons}</div>
            <h3 className="text-blue-600 hover:text-blue-900 text-[16px] hover:bg-blue-200 rounded-3xl px-3">Review</h3>
        </div>
      </div>
    </div>
  );
}


/** These are all of the level tabs
 * *Each use the LevelTabTemplate to display the level information.
 * * The status, title, description and lessons are passed as props to the template.
 */

export function LevelTabs() {
 return(
  <span className="inline-grid grid-cols-1 gap-8 mx-5 mt-10">
    {/**Level 1 tab, displayed on the learn page */}
  <Link href="/levels/foundations">
  <LevelTabTemplate 
    title={level1.name}
    description={level1.description}
    lessons={level1.numberOfLessons}
    status={level1.status}
  />
  </Link>

  <LevelTabTemplate 
    status="Completed"
    title="Control flow"
    description=""
    lessons="5 lessons"
  />

  <LevelTabTemplate 
    status="Completed"
    title="Data structures"
    description=""
    lessons="5 lessons"
  />

  <LevelTabTemplate 
    status="Completed"
    title="Functions "
    description=""
    lessons="5 lessons"
  />

  <LevelTabTemplate 
    status="Completed"
    title="OOP"
    description=""
    lessons="5 lessons"
  />

  <LevelTabTemplate 
    status="Completed"
    title="Debugging"
    description=""
    lessons="5 lessons"
  />

  

  
  
  </span>
 );
}
