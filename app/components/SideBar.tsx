'use client';

import Link from "next/link";

/** This is the SideBar component 
 * * It is used to display the side bar of the application.
 * *It is rendered inside the layout (with-sidebar) folder.
 * */

export default function SideBar() {
    return(
        <div className="w-60 h-[calc(100vh-96px)] px-10 pt-26 flex flex-col items-center gap-10 rounded-3xl bg-gray-700 m-5">
            <Link href="/learn" className="w-40 py-2.5 bg-purple-900 text-white font-semibold rounded-xl shadow-[0_9px_0_0_#4c1d95] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_#4c1d95] active:translate-y-[10px] active:shadow-none transition-all duration-150 flex justify-center items-center">Learn</Link>
            <br />
            <Link href="/again" className="w-40 py-2.5 bg-purple-900 text-white font-semibold rounded-xl shadow-[0_9px_0_0_#4c1d95] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_#4c1d95] active:translate-y-[10px] active:shadow-none transition-all duration-150 flex justify-center items-center">Again</Link>
            <br />
            <Link href="/CodeTest" className="w-40 py-2.5 bg-purple-900 text-white font-semibold rounded-xl shadow-[0_9px_0_0_#4c1d95] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_#4c1d95] active:translate-y-[10px] active:shadow-none transition-all duration-150 flex justify-center items-center">CodeTest</Link>
            <br />
            <Link href="/levels/level2" className="w-40 py-2.5 bg-purple-900 text-white font-semibold rounded-xl shadow-[0_9px_0_0_#4c1d95] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_#4c1d95] active:translate-y-[10px] active:shadow-none transition-all duration-150 flex justify-center items-center">Level 2</Link>
        </div>

    )
}