import Link from "next/link";

export default function SideBar() {
    return(
        <div className="w-60 min-w-60 border-r border-gray-100 px-10 pt-10">
        <Link href="/learn" className="bg-green-900 h-7 w-12 rounded-xl">Learn</Link>
        <br />
        <Link href="/again" className="bg-green-900 h-7 w-12 rounded-xl">Again</Link>
        </div>
    )
}