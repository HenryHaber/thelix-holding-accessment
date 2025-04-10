"use client";

import { useState } from "react";
// import 'globals.css';
import { useAuth} from './context/AuthContext';
import {
  Bell,
  Heart,
  LogOut,
  Menu,
  Settings,
  ShoppingBag,
  User,
  X,
  House,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Badge } from "@/component/ui/badge";
import { Button } from "@/component/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../component/ui/dropdown-menu";
import MyOrders from './my-orders';
import MyProfile from './my-profile';
import Setting from './settings';
import Wishlist from './wishlist';
import UserHome from './user-homepage';
import { GiButtonFinger } from "react-icons/gi";
import SessionDropdown from "./SessionDropdown";
import Logo from "./Logo";

export default function UserDashboard() {
  // Function to handle the navigation state
  const [activeSection, setactiveSection] = useState('user-home')
  // Function to handle the sidebar navigation state
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  // const {  user } = useAuth();
  // Function to handle the logout state
  const {logOut, user,  loading,} = useAuth()
  const handleLogOut = async (event) => {
    event.preventDefault();
    try {
        const clientMutationId = "default-id"
        await logOut(clientMutationId);
    } catch (error) {
        console.error(error);
    }
}; 

  const isLinkActive = (href) => {
    return pathname === href;
  };

  const renderContent = () => {
    switch (activeSection){
      case "user-home":
        return <UserHome />
      case "my-orders":
        return <MyOrders />
      case "my-profile":
        return <MyProfile />
      case "settings":
        return <Setting />
      case "wishlist":
        return <Wishlist />
      default:
        return
    }
  }

  return (
    <div className="grid bg-white  min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div
        className={`z-100 fixed inset-y-0 flex w-[280px] flex-col bg-gray-100/40 dark:bg-dark-800/40 lg:static ${
          sidebarOpen ? "left-0"  : "-left-[280px]"
        } transition-all duration-300 side-bar`}
      >
        <div className="flex h-[60px] items-center border-b px-6">
          <Link className="flex bg-white hover:bg-white items-center gap-2 font-semibold" href='/'>
           <Logo
          height="100" 
           width="100" 
            />
          </Link>
          <Button
            className="ml-auto lg:hidden"
            size="icon"
            variant="ghost"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close sidebar</span>
          </Button>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Button
              className={`flex user-dash-navbar items-start gap-3 rounded-lg px-3 py-2 transition-all hover:text-gray-900  ${
                isLinkActive("/my-profile")
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-500 dark:text-gray-400"
              }`}
              onClick={()=> setactiveSection('user-home')}
            >
              <House className="h-4 w-4" />
              My Dashboard
            </Button>
            <Button
              className={`flex user-dash-navbar items-start gap-3 rounded-lg px-3 py-2 transition-all hover:text-gray-900  ${
                isLinkActive("/my-profile")
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-500 dark:text-gray-400"
              }`}
              onClick={()=> setactiveSection('my-profile')}
            >
              <User className="h-4 w-4" />
              My Profile
            </Button>
            <Button
              className={`flex justify-between user-dash-navbar items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-gray-900 ${
                isLinkActive("/my-orders")
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-500 dark:text-gray-400"
              }`}
              onClick={()=> setactiveSection('my-orders')}
            >
              <ShoppingBag className="h-4 w-4" />
              My Orders
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                3
              </Badge>
            </Button>
            <Button
              className={`flex user-dash-navbar gap-3 rounded-lg px-3 py-2 transition-all hover:text-gray-900 ${
                isLinkActive("/wishlist")
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-500 dark:text-gray-400"
              }`}
              onClick={()=> setactiveSection('wishlist')}
            >
              <Heart className="h-4 w-4" />
              Wishlist
            </Button>
            <Button
              className={`flex user-dash-navbar gap-3 rounded-lg px-3 py-2 transition-all hover:text-gray-900 ${
                isLinkActive("/settings")
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-500 dark:text-gray-400"
              }`}
              onClick={()=> setactiveSection('settings')}
            >
              <Settings className="h-4 w-4" />
              Settings
            </Button>
          </nav>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6">
          <Button
            className="lg:hidden"
            size="icon"
            variant="ghost"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
          <div className="flex-1">
            <h1 className="font-semibold text-lg md:text-xl">
            {user ? (`Welcome back, ${user.firstName}!`) : null }
            </h1>
          </div>
          <Button className="rounded-full" size="icon" variant="ghost">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
          <SessionDropdown user={user} />
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                size="icon"
                variant="ghost" 
              >
                <Image
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut handleLogOut={handleLogOut}  loading={loading} className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </header>
        <main className="flex bg-white flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        {renderContent()}
        </main>
      </div>
    </div>
  );
}
