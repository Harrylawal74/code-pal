'use client';

import Link from "next/link";

/** This is the SideBar component 
 * * It is used to display the side bar of the application.
 * *It is rendered inside the layout (with-sidebar) folder.
 * */

export default function SideBar() {
    return(
        <div className="w-60 min-h-screen min-w-60 border-r border-gray-100 px-10 pt-10 flex flex-col items-center gap-4">
        <Link href="/learn" className="bg-green-900 h-9 w-40 rounded-xl flex justify-center items-center">Learn</Link>
        <br />
        <Link href="/again" className="bg-green-900 h-9 w-40 rounded-xl flex justify-center items-center">Again</Link>
        </div>
    )
}