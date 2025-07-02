import Link from "next/link";

export default function SideBar() {
    return(
        <div>
        <Link href="/learn" className="bg-green-900 h-7 w-12 rounded-xl">Learn</Link>
        <br />
        <Link href="/again" className="bg-green-900 h-7 w-12 rounded-xl">Again</Link>
        </div>
    )
}