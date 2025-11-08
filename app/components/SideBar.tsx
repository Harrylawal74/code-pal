'use client';

import Link from "next/link";

/** This is the SideBar component 
 * * It is used to display the side bar of the application.
 * *It is rendered inside the layout (with-sidebar) folder.
 * */

export default function SideBar() {
    return(
        <div className="w-60 min-h-screen border-r border-gray-700 px-10 pt-26 flex flex-col items-center gap-10">
            <Link href="/learn" className="w-40 py-2.5 bg-purple-900 text-white font-semibold rounded-xl shadow-[0_4px_0_0_#4c1d95] hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#4c1d95] active:translate-y-[4px] active:shadow-none transition-all duration-150 flex justify-center items-center">Learn</Link>
            <br />
            <Link href="/again" className="w-40 py-2.5 bg-purple-900 text-white font-semibold rounded-xl shadow-[0_4px_0_0_#4c1d95] hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#4c1d95] active:translate-y-[4px] active:shadow-none transition-all duration-150 flex justify-center items-center">Again</Link>
            <br />
            <Link href="/codeTest" className="w-40 py-2.5 bg-purple-900 text-white font-semibold rounded-xl shadow-[0_4px_0_0_#4c1d95] hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#4c1d95] active:translate-y-[4px] active:shadow-none transition-all duration-150 flex justify-center items-center">CodeTest</Link>
            <br />
            <Link href="/levels/level2" className="w-40 py-2.5 bg-purple-900 text-white font-semibold rounded-xl shadow-[0_4px_0_0_#4c1d95] hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#4c1d95] active:translate-y-[4px] active:shadow-none transition-all duration-150 flex justify-center items-center">Level 2</Link>
        </div>

    )
}