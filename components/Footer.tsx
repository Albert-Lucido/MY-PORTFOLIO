export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 text-sm text-[#94A3B8]">
        <p>© {new Date().getFullYear()} Albert Lucido</p>
        <a href="#home" className="transition hover:text-[#38BDF8]">
          Back to top
        </a>
      </div>
    </footer>
  );
}
