import Image from "next/image";
import Link from "next/link";

interface NavigationItem {
  title: string;
  href: string;
}

function Sidebar({ navigation }: { navigation: NavigationItem[] }) {
  return (
    <aside className="hidden lg:block lg:flex-shrink-0">
      <div className="relative flex h-full w-64 flex-col border-r border-gray-200 bg-white dark:border-black dark:bg-stone-900">
        <div className="mx-auto">
          <Link href="/settings">
            <a>
              <div className="relative my-3 h-32 w-32 flex-1">
                <Image
                  src="/minougris.jpg"
                  alt="Profil image"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-full"
                />
              </div>
              <p className="text-center text-lg font-bold text-uber">Timothy</p>
            </a>
          </Link>
        </div>

        <nav className="mt-5 flex-1 space-y-1 px-2">
          {navigation.map((item: NavigationItem) => (
            <a
              key={item.title}
              href={item.href}
              className="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-stone-700 dark:hover:text-gray-200"
            >
              {item.title}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
