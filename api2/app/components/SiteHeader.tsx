import Link from "next/link";

export default function SiteHeader() {
    return (
        <>
            <div className="flex flex-col h-20 items-center justify-center bg-black">
                <a href="https://practice.amirm.me/" className="text-[#FF5C00] text-2xl font-bold">
                    :::...:::...:::{" "}
                    <span className="text-blue-700 hover:text-[#FF5C00] hover:transition">
                        Next.Js TO DO API Toturials
                    </span>{" "}
                    :::...:::...:::
                </a>
            </div>

            <div className="bg-[#FF5C00] h-px w-full" />

            <nav className="flex items-center w-full h-15 bg-black p-5 gap-10">
                <Link href="http://localhost:3000/" className="bg-red-800 text-black font-bold rounded transition p-2 hover:bg-[#FF5C00] hover:text-black">Home</Link>
                <Link href="/signup" className="text-blue-500 rounded transition text-[19px] p-1 hover:bg-[#FF5C00] hover:text-black">register</Link>
                <Link href="/signin" className="text-blue-500 rounded transition text-[19px] p-1 hover:bg-[#FF5C00] hover:text-black">sign in</Link>
                <Link href="/todos" className="text-blue-500  rounded transition text-[19px] p-1 hover:bg-[#FF5C00] hover:text-black">todos page</Link>
            </nav>
            <div className="bg-[#FF5C00] h-px w-full" />
        </>
    );
}