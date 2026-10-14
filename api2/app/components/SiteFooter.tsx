import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="pt-20">
      <div className="bg-white h-px w-full" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-black px-15 py-6 text-sm">
        <span className="opacity-60">
          © {new Date().getFullYear()} Next.Js TO DO API Tutorials
        </span>

        <nav className="flex items-center gap-6">
          <Link href="/todos" className="text-blue-500 transition hover:text-[#FF5C00]">Contact us</Link>
          <Link href="/signup" className="text-blue-500 transition hover:text-[#FF5C00]">register</Link>
          <Link href="/signin" className="text-blue-500 transition hover:text-[#FF5C00]">sign in</Link>
        </nav>

      </div>
    </footer>
  );
}