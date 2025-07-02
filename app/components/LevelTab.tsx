import React from "react";



type TabProps = { 
  status: string; 
  title: string;
  description: string;
  lessons: number;
}

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
            <div>{lessons}</div>
            <h3 className="text-blue-500 text-[16px]">Review</h3>
        </div>
      </div>
    </div>
  );
}


export function LevelTab() {
 return(
  <span className="inline-grid grid-cols-1 gap-8 mx-5 mt-10">
  <LevelTabTemplate 
    status="Completed"
    title="Foundations"
    description="Some description about the foundations of programming."
    lessons={5}
  />

  <LevelTabTemplate 
    status="Completed"
    title="Control flow"
    description=""
    lessons={5}
  />

  <LevelTabTemplate 
    status="Completed"
    title="Data structures"
    description=""
    lessons={5}
  />

  <LevelTabTemplate 
    status="Completed"
    title="Functions "
    description=""
    lessons={5}
  />

  <LevelTabTemplate 
    status="Completed"
    title="OOP"
    description=""
    lessons={5}
  />

  <LevelTabTemplate 
    status="Completed"
    title="Debugging"
    description=""
    lessons={5}
  />

  

  
  
  </span>
 );
}
