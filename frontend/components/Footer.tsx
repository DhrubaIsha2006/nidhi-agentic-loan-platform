export default function Footer() {
  return (
    <footer className="border-t border-gray-800 px-6 py-6 text-sm text-gray-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p>
          © {new Date().getFullYear()} NIDHI • AI-powered lending demo
        </p>

        <div className="flex gap-6">
          <span className="hover:text-white cursor-pointer">Privacy</span>
          <span className="hover:text-white cursor-pointer">Terms</span>
          <span className="hover:text-white cursor-pointer">Contact</span>
        </div>
      </div>
    </footer>
  );
}
