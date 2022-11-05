import { useTheme } from "next-themes";

function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="border-b border-gray-200 bg-white dark:border-black dark:bg-stone-900">
      <div className="w-100 flex items-center justify-between py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-uber">Cent Percent Delivery</h1>
        <button
          className="rounded-full text-2xl hover:bg-gray-200 dark:hover:bg-stone-700"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "🌙" : "🌞"}
        </button>
      </div>
    </header>
  );
}

export default Header;
