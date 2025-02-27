export default function TopBar() {
    return (
      <header className="w-full bg-gray-900 text-white py-3 px-5 flex items-center justify-between">
        <h1 className="text-lg sm:text-xl font-bold">Zero Ed Code</h1>
        <button className="sm:hidden bg-gray-700 px-3 py-1 rounded">
          ☰
        </button>
      </header>
    );
  }
  