import Link from "next/link";

export default function Footer() {
    return (
      <footer className="w-full bg-gray-900 text-white text-center py-4 mt-4">
        <p className="text-sm mb-2">© {new Date().getFullYear()} Zero Ed Code</p>
        <div className="flex justify-center space-x-4">
          <Link
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            🌐 Web
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            📘 Facebook
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            📷 Instagram
          </Link>
          <Link
            href="https://www.youtube.com/@zeroedcode"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400"
          >
            🎥 YouTube
          </Link>
        </div>
      </footer>
    );
  }
  