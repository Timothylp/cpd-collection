interface NavigationItem {
  title: string;
  href: string;
}

function Sidebar({ navigation }: { navigation: NavigationItem[] }) {
  return (
    <aside className="hidden lg:block lg:flex-shrink-0">
      <div className="h-full relative flex flex-col w-64 border-r border-gray-200 bg-white">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
            {navigation.map((item: NavigationItem) => (
              <a
                key={item.title}
                href={item.href}
                className="group flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900"
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
