import { useTheme } from "next-themes";
import { userAuthClear } from "../../utils/pocketbase";
import { useRouter } from "next/router";

function Header() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  const handleLogout = () => {
    userAuthClear()
    router.push('/login')
  }

  return (
    <header className="border-b border-gray-200 bg-white dark:border-black dark:bg-stone-900">
      <div className="w-100 flex items-center justify-between py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-uber antialiased">Cent Percent Delivery</h1>
        <div className="flex gap-3">
          <button
            className="rounded-full text-2xl hover:bg-gray-200 dark:hover:bg-stone-700"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "🌙" : "🌞"}
          </button>
          <button className="rounded-full text-2xl hover:bg-gray-200 dark:hover:bg-stone-700" onClick={handleLogout}>
            <svg width="32" height="32" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M15.325 16.275q-.275-.325-.275-.738q0-.412.275-.687l1.85-1.85H10q-.425 0-.712-.288Q9 12.425 9 12t.288-.713Q9.575 11 10 11h7.175l-1.85-1.85q-.3-.3-.3-.712q0-.413.3-.713q.275-.3.688-.3q.412 0 .687.275l3.6 3.6q.15.15.213.325q.062.175.062.375t-.062.375q-.063.175-.213.325l-3.6 3.6q-.325.325-.712.287q-.388-.037-.663-.312ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h6q.425 0 .713.287Q12 3.575 12 4t-.287.712Q11.425 5 11 5H5v14h6q.425 0 .713.288q.287.287.287.712t-.287.712Q11.425 21 11 21Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
