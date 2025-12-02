import React from "react";
import Link from "next/link";
import level1 from "../data/leveldata/level1"; 
import { getLevelStatus } from "../../lib/supabase/ServerFunctions/DatabaseLevelData";
interface CardProps {
  title: string;
  description: string;
  lessons: string;
  levelStatus: number;
}

interface LevelTabsProps {
  statuses: number[]
}


const LevelTabTemplate: React.FC<CardProps> = ({ title, description, lessons, levelStatus }) => {

  const status = levelStatus === 1 ? "Not Started" : levelStatus === 2 ? "In Progress" : "Completed";
  
  const statusBg =
    status === "In Progress"
      ? "bg-orange-100 text-orange-800"
      : status === "Not Started"
      ? "bg-purple-100 text-purple-800"
      : "bg-green-100 text-green-800"; // Completed

  return (
    <div className="min-w-[400px] min-h-[300px] perspective-1000">
      <div className="w-full h-full bg-gray-800 rounded-3xl shadow-2xl relative overflow-hidden shadow-xl hover:shadow-green-500/50 transition-all duration-500 hover:rotate-y-3 hover:rotate-x-2 hover:scale-105 hover:shadow-3xl border-2 border-gray-900">
        {/* Top gradient accent bar */}
        <div className="w-full h-3 bg-gradient-to-r from-purple-700 to-purple-900 rounded-t-3xl"></div>

        {/* Card content */}
        <div className="p-6 flex flex-col justify-between h-[257px]">
          {/* Header */}
          <div className="flex justify-between items-center bg-gray-400 p-3 rounded-2xl">
            <div className="font-bold text-lg text-white">Logo</div>
            <div className="flex justify-between gap-4">
              <div>Logo</div>
            <span className={`text-sm rounded-full px-3 py-1 font-medium ${statusBg}`}>
              {status}
            </span>
            </div>
          </div>

          {/* Title & Description */}
          <div className="mt-4">
            <h2 className="font-bold text-xl text-white">{title}</h2>
            <p className="text-gray-400 mt-2">{description}</p>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center mt-6">
            <div className="text-gray-300 text-sm">{lessons}</div>
            <button className="text-blue-600 font-medium text-sm bg-gray-400 hover:text-blue-900 hover:bg-blue-100 rounded-3xl px-4 py-1 shadow-[0_6px_0_0_#1e40af] hover:translate-y-[1px] active:translate-y-[3px] transition-all duration-200 mb-2">
              Review
            </button>
          </div>
        </div>

        {/* Optional inner glow for depth */}
        <div className="absolute inset-0 pointer-events-none rounded-3xl shadow-inner"></div>
      </div>
    </div>
  );
};

export default LevelTabTemplate;



/** These are all of the level tabs
 * *Each use the LevelTabTemplate to display the level information.
 * * The status, title, description and lessons are passed as props to the template.
 */

export function LevelTabs({ statuses}: LevelTabsProps) {
 return(
  <div className="flex flex-wrap items-start justify-center w-full mx-2 gap-5 mt-25 my-100">
    {/**Level 1 tab, displayed on the learn page */}
  <Link href="/levels/foundations">
  <LevelTabTemplate  
    title={level1.name}
    description={level1.description}
    lessons={level1.numberOfLessons}
    levelStatus={statuses[0]}
  />
  </Link>

<Link href="/levels/control_flow">
  <LevelTabTemplate 
    title="Control flow"
    description=""
    lessons="5 lessons"
    levelStatus={statuses[1]}
  />
</Link>


  <LevelTabTemplate 
    title="Data structures"
    description=""
    lessons="5 lessons"
    levelStatus={2}
  />

  <LevelTabTemplate 
    title="Functions "
    description=""
    lessons="5 lessons"
    levelStatus={1}
  />

  <LevelTabTemplate 
    title="OOP"
    description=""
    lessons="5 lessons"
    levelStatus={3}  
  />

  <LevelTabTemplate 
    title="Debugging"
    description=""
    lessons="5 lessons"
    levelStatus={3}
  />
  
  </div>
 );
}
