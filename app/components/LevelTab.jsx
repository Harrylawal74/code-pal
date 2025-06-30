import React from "react";

export default function LevelTab() {
  return (
    <div className="w-64 h-64 bg-white rounded-xl shadow-lg text-black text-xl relative">
      <div className="w-100% h-3 bg-[#0aa775] rounded-t-xl"></div>
      <div className="p-27">
      <div className="pt-4 px-4 w-50 h-45 bg-red-900 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-between items-center">
            <div>logo</div>
            <h3 className="text-blue-500 text-[10px]">Completed</h3>
        </div>
        <h2 className="font-bold">Foundations</h2>
        <p className="">Starting to code!</p>
        <div className="flex justify-between items-center mt-6">
            <div>10 lessons</div>
            <h3 className="text-blue-500 text-[10px]">Review</h3>
        </div>
      </div>
      </div>
    </div>
  );
}
