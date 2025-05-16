"use client";

import { useState } from "react";
import {

    ChevronDown,
    Menu,
    X
} from "lucide-react";

import {
  FaBell,
  FaBox,
  FaBuilding,
  FaBullhorn,
  FaChartLine,
  FaCog,
  FaShoppingCart,
  FaTags,
  FaUsers
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/component/ui/button";
import Logo from "./Logo";
import SearchForm from "@/components/SearchForm";
import menuItems from "@/data/menu-items.json";
import {TbUserSquare} from "react-icons/tb";

export default function UserDashboard({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const footerItems = [
    { name: "Logout", icon: '/images/logout.svg', link: "/#logout" },
  ];

  const isLinkActive = (href) => pathname.includes(href);

  const handleMenuClick = () => {
    setSidebarOpen(false); // Close the sidebar after clicking a menu item
  };

  return (
      <div className="flex h-screen bg-white overflow-hidden">
        {/* Sidebar */}
        <aside className={`z-100 fixed inset-y-0 flex w-[320px] flex-col bg-black text-white overflow-y-auto justify-between pr-0 px-2 lg:static ${
          sidebarOpen ? "left-0" : "-left-[400px]"
        } transition-all duration-300 side-bar`}>
          <div className="items-center">
            <div className="flex items-center">
              <Logo height="100" width="150" />
              <Button className="ml-auto lg:hidden mb-4" size="icon" variant="ghost" onClick={() => setSidebarOpen(false)}>
                <X className="h-4 w-4 text-white" />
              </Button>
            </div>
            <div className="flex lg:hidden items-center gap-2">
              <SearchForm onSearch={() => setSidebarOpen(false)} /> {/* Close sidebar on search */}
            </div>
            <nav className="flex flex-col gap-2 mt-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  onClick={handleMenuClick} // Close sidebar on menu item click
                  className={`flex items-center my-1 text-nowrap relative gap-2 p-3 justify-between rounded-r-none rounded-xl text-md ${
                    isLinkActive(item.link)
                      ? "bg-[#ed5b1b] text-white"
                      : "hover:bg-[#ed5b1b] hover:text-white"
                  }`}
                >
                  {item.name}
                  {item.quantity && (
                    <span className="font-bold absolute right-8 flex p-3 text-[1rem] w-10 h-10 items-center justify-center bg-black text-amber-50 rounded-full text-xl">
                      {item.quantity}
                    </span>
                  )}
                </Link>
              ))}
            </nav>
          </div>
          {footerItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              onClick={handleMenuClick} // Close sidebar on footer item click
              className={`flex items-center my-1 text-nowrap gap-2 p-3 rounded-xl text-md ${
                isLinkActive(item.link)
                  ? "bg-[#ed5b1b] text-white"
                  : "hover:bg-[#ed5b1b] hover:text-white"
              }`}
            >
              <Image src={item.icon} alt={item.name} width={20} height={20} />
              {item.name}
            </Link>
          ))}
        </aside>

        {/* Main content area */}
        <div className="flex flex-col flex-1 h-full overflow-hidden">
          {/* Header */}
          <header className="sticky justify-between flex-shrink top-0 z-30 flex items-center border-b px-2 h-14 lg:h-[60px] bg-white">
            <Button className="lg:hidden text-black" size="icon" variant="ghost" onClick={() => setSidebarOpen(true)}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle sidebar</span>
            </Button>
            <div className="lg:flex hidden items-center gap-2">
              <SearchForm />
            </div>
            <div className="flex flex-row items-center gap-3">
              <p className="text-black text-nowrap text-sm">Thur, Dec 11, 2024 15:32</p>
              <button className="p-2 bg-[#f4f4f4f4] rounded-full">
                <FaBell className="h-4 w-4 text-black" />
              </button>
              <button className="p-2 hidden lg:flex items-center gap-2 bg-[#f4f4f4f4] rounded-full">
                <FaBuilding className="text-black" />
                <p className="text-black text-nowrap text-sm">Ikoyi Branch</p>
                <ChevronDown className="h-4 w-4 text-black" />
              </button>
              <button className="p-2 lg:flex hidden items-center gap-2 bg-[#f4f4f4f4] rounded-full">
                <TbUserSquare className="text-black" />
                <p className="text-black text-sm">Eric Alawoya</p>
                <ChevronDown className="h-4 w-4 text-black" />
              </button>
            </div>
          </header>

          {/* Scrollable main content */}
          <main className="flex-1 overflow-y-auto text-black bg-[#f9f9f9f9] p-4 md:p-6">
            {children}
          </main>
        </div>
      </div>
  );
}
