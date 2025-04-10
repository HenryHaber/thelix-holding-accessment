"use client";

import { useState } from "react";
import { FaBell, FaBuilding } from "react-icons/fa";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/component/ui/button";
import Logo from "./Logo";
import { TbUserSquare } from "react-icons/tb";

export default function UserDashboard({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Nintendo", icon: '/images/category.svg', link: "/dashboard/nintendo" },
    { name: "IBM", icon: '/images/buliding.svg', link: "/dashboard/ibm" },
    { name: "The Walt Disney Company", icon: '/images/personalcard.svg', link: "/dashboard/disney" },
    { name: "Louis Vuitton", icon: '/images/card.svg', link: "/dashboard/louis-vuitton" },
    { name: "MasterCard", icon: '/images/chart.svg', link: "/dashboard/mastercard" },
    { name: "Pizza Hut", icon: '/images/document-text.svg', link: "/dashboard/pizza-hut" },
    { name: "MasterCard", icon: '/images/setting-2.svg', link: "/dashboard/mastercard" },
    { name: "Bank of America", icon: '/images/Bank-of-America.svg', link: "/dashboard/bank-of-america" },
  ];

  const footerItems = [
    { name: "Logout", icon: '/images/logout.svg', link: "/#logout" },
  ]

  const isLinkActive = (href) => pathname.includes(href);

  return (
      <div className="flex h-screen bg-white overflow-hidden">
        {/* Sidebar */}
        <aside className={`z-100 fixed inset-y-0 flex w-[320px] flex-col bg-black text-white overflow-y-auto justify-between px-2  lg:static ${
          sidebarOpen ? "left-0"  : "-left-[400px]"
        } transition-all duration-300 side-bar`}>
          <div className="items-center ">
           <div className="flex items-center">
           <Logo height="100" width="150" />
            <Button className="ml-auto lg:hidden mb-4" size="icon" variant="ghost" onClick={() => setSidebarOpen(false)}>
              <X className="h-4 w-4 text-white" />
            </Button>
           </div>
            <nav className="flex flex-col gap-2 mt-4">
              {menuItems.map((item) => (
                  <Link
                      key={item.name}
                      href={item.link}
                      className={`flex items-center my-1 text-nowrap gap-2 p-3 rounded-xl text-md ${
                          isLinkActive(item.link)
                          ? "bg-[#A93636] text-white"
                          : "hover:bg-[#A93636] hover:text-white"
                      }`}
                  >
                    <Image src={item.icon} alt={item.name} width={20} height={20} />
                    {item.name}
                  </Link>
              ))}
            </nav>


          </div>
          {footerItems.map((item) => (
              <Link
                  key={item.name}
                  href={item.link}
                  className={`flex items-center my-1 text-nowrap gap-2 p-3 rounded-xl text-md ${
                      isLinkActive(item.link)
                      ? "bg-[#A93636] text-white"
                      : "hover:bg-[#A93636] hover:text-white"
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
          <header className="sticky justify-between flex-shrink top-0 z-30 flex  items-center  border-b px-2 h-14 lg:h-[60px] bg-white">
            <Button className="lg:hidden text-black" size="icon" variant="ghost" onClick={() => setSidebarOpen(true)}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle sidebar</span>
            </Button>

            {/* Search */}
            <div className="lg:flex hidden relative">
              <Image src="/images/search-normal.svg" alt="Search" width={20} height={20} className="absolute left-3 top-2.5" />
              <input
                  type="text"
                  placeholder="Search Parameter & Params"
                  className="w-80   pl-10 py-2 border border-gray-300 rounded-lg text-black/60 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>

            <div className={'flex flex-rown items-center gap-3'}>
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
