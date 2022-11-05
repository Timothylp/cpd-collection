import Image from "next/image";
import Link from "next/link";

interface NavigationItem {
  icon: React.ReactNode;
  title: string;
  href: string;
}

function Sidebar({ navigation }: { navigation: NavigationItem[] }) {
  return (
    <aside className="fixed bottom-0 z-10 w-full md:relative md:block md:w-auto md:flex-shrink-0">
      <div className="relative flex h-full w-full flex-row-reverse items-center border-r border-gray-200 bg-white dark:border-black dark:bg-stone-900 md:w-24 md:flex-col lg:w-64">
        <div className="mx-auto border-l border-gray-200 px-4 dark:border-black md:border-l-0 md:px-0">
          <Link href="/settings">
            <div className="relative my-3  h-10 w-10 flex-1 md:h-16 md:w-16 lg:h-32 lg:w-32">
              <Image src="/minougris.jpg" alt="Profil image" fill className="rounded-full" />
            </div>
            <p className="hidden text-center text-lg font-bold text-uber lg:block">Timothy</p>
          </Link>
        </div>

        <nav className="flex flex-1 items-center justify-evenly space-y-1 px-2 md:mt-5 md:block md:w-full">
          {navigation.map((item: NavigationItem) => (
            <Link
              href={item.href}
              key={item.title}
              className="text-md group flex items-center justify-center gap-4 rounded-md px-2 py-2 font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-stone-700 dark:hover:text-gray-200 lg:justify-start"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-8 w-8 lg:h-6 lg:w-6"
              >
                {item.icon}
              </svg>
              <span className="hidden lg:block">{item.title}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
