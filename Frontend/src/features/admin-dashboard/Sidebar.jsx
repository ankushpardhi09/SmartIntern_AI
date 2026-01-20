import logo from "./image.png";

const leftTopItems = [
  "ai-home-alt1",
  "ai-heart",
  "ai-mention",
  "ai-chat-dots",
  "ai-plus",
];

const leftBottomItems = ["ai-gear", "ai-link-out"];

const navItems = [
  { icon: "ai-dashboard", label: "Dashboard" },
  { icon: "ai-shipping-box-v1", label: "Products" },
  { icon: "ai-person", label: "Customers" },
  {
    icon: "ai-open-envelope",
    label: "Messages",
    actionIcon: "ai-plus",
    submenu: [
      { label: "Drafts", count: 10 },
      { label: "Scheduled", count: 4 },
      { label: "Published", count: 20 },
    ],
  },
  { icon: "ai-image", label: "Images" },
  { icon: "ai-network", label: "Network" },
  { icon: "ai-data", label: "Inventory" },
  { icon: "ai-hashtag", label: "Hashtags" },
];

const IconButton = ({ icon }) => (
  <button className="w-11 h-11 grid place-items-center border-0 bg-transparent text-2xl text-inherit rounded-lg font-inherit cursor-pointer transition-all duration-300 hover:bg-[#f4f6fa] hover:text-[#384251]">
    <i className={icon}></i>
  </button>
);

const LeftSidebar = () => (
  <div className="absolute top-0 bottom-0 left-0 w-20 bg-white flex flex-col items-center z-10 transition-all duration-400">
    <img src={logo} alt="Logo" className="w-10 m-[24px_0_28px]" />

    {leftTopItems.map((icon) => (
      <IconButton key={icon} icon={icon} />
    ))}

    <div className="mt-auto mb-5">
      {leftBottomItems.map((icon) => (
        <IconButton key={icon} icon={icon} />
      ))}
    </div>
  </div>
);

const SidebarHeader = () => (
  <div className="flex items-center justify-between p-[20px_16px_28px]">
    <div>
      <h2 className="text-base font-semibold m-0">Untitled UI</h2>
      <h3 className="text-xs font-medium text-[#9fa4af] m-0">store.untitledui.com</h3>
    </div>
    <i className="ai-chevron-vertical"></i>
  </div>
);

const Submenu = ({ items }) => (
  <ul className="relative list-none m-0 p-[8px_0_8px_29px] text-sm cursor-pointer before:content-[''] before:absolute before:top-2 before:left-[21px] before:bottom-2 before:w-0.5 before:bg-[#9fa4af] before:opacity-30">
    {items.map((item) => (
      <li key={item.label} className="whitespace-nowrap h-9 pl-3 rounded-lg flex items-center justify-between transition-all duration-300 hover:bg-[#e8ecf4] hover:text-[#384251] cursor-pointer">
        {item.label}
        <span className="text-xs py-0.5 px-1 rounded bg-[#121926] text-white mr-3">{item.count}</span>
      </li>
    ))}
  </ul>
);

const NavItem = ({ item }) => (
  <>
    <button className="group p-[0_12px] bg-transparent flex items-center gap-2.5 w-full h-11 text-sm hover:bg-[#e8ecf4] hover:text-[#384251]">
      <i className={`${item.icon} text-lg`}></i>
      <span>{item.label}</span>
      {item.actionIcon && <i className={`${item.actionIcon} opacity-0 text-base ml-auto transition-all duration-300 group-hover:opacity-100 group-hover:text-[#9fa4af]`}></i>}
    </button>

    {item.submenu && <Submenu items={item.submenu} />}
  </>
);

const Navigation = () => (
  <nav className="p-[0_12px]">
    {navItems.map((item) => (
      <NavItem key={item.label} item={item} />
    ))}
  </nav>
);

const RightSidebar = () => (
  <div className="absolute top-0 bottom-0 left-[76px] h-full transition-all duration-400 group-hover:w-[225px]">
    <div className="absolute top-2 right-2 bottom-2 left-1 rounded-[12px] bg-[#f4f6fa]">
      <SidebarHeader />
      <Navigation />
    </div>
  </div>
);

export const Sidebar = () => {
  return (
    <section className="m-0 bg-[#dadee5] text-[#5d6674] h-screen font-['Euclid Circular A']">
      <aside className="fixed overflow-hidden top-6 left-[18px] bottom-7 flex flex-col gap-2 w-20 rounded-[18px] transition-all duration-400 bg-white group hover:w-[300px]">
        <LeftSidebar />
        <RightSidebar />
      </aside>
    </section>
  );
};