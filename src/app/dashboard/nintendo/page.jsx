"use client";

import { useEffect, useState } from "react";
import PublicLayout from "@/components/PublicLayout";
import { FaCircle, FaChevronDown, FaPause, FaCheckCircle } from "react-icons/fa";
import { IoReload, IoDocumentText } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { TbFilterCheck } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import Loading from "@/components/Loading";

const users = [
  {
    name: "Miles, Esther",
    id: "2006754632",
    category: "Individual",
    principal: "NGN 10,000.00",
    alias1: "whiteswan331",
    alias2: "bluebear234",
    status: "Active",
    date: "Jan 24, 2022",
  },
  {
    name: "Black, Marvin",
    id: "2006754632",
    category: "Corporate",
    principal: "NGN 10,000.00",
    alias1: "bigbear444",
    alias2: "brownfish268",
    status: "Liquidated",
    date: "Jan 24, 2022",
  },
  {
    name: "Miles, Esther",
    id: "2006754632",
    category: "Individual",
    principal: "NGN 10,000.00",
    alias1: "whiteswan331",
    alias2: "bluebear234",
    status: "Active",
    date: "Jan 24, 2022",
  },
  {
    name: "Black, Marvin",
    id: "2006754632",
    category: "Corporate",
    principal: "NGN 10,000.00",
    alias1: "bigbear444",
    alias2: "brownfish268",
    status: "Liquidated",
    date: "Jan 24, 2022",
  },
  {
    name: "Miles, Esther",
    id: "2006754632",
    category: "Individual",
    principal: "NGN 10,000.00",
    alias1: "whiteswan331",
    alias2: "bluebear234",
    status: "Active",
    date: "Jan 24, 2022",
  },
  {
    name: "Black, Marvin",
    id: "2006754632",
    category: "Corporate",
    principal: "NGN 10,000.00",
    alias1: "bigbear444",
    alias2: "brownfish268",
    status: "Liquidated",
    date: "Jan 24, 2022",
  },
  {
    name: "Miles, Esther",
    id: "2006754632",
    category: "Individual",
    principal: "NGN 10,000.00",
    alias1: "whiteswan331",
    alias2: "bluebear234",
    status: "Active",
    date: "Jan 24, 2022",
  },
  {
    name: "Black, Marvin",
    id: "2006754632",
    category: "Corporate",
    principal: "NGN 10,000.00",
    alias1: "bigbear444",
    alias2: "brownfish268",
    status: "Liquidated",
    date: "Jan 24, 2022",
  },
  {
    name: "Miles, Esther",
    id: "2006754632",
    category: "Individual",
    principal: "NGN 10,000.00",
    alias1: "whiteswan331",
    alias2: "bluebear234",
    status: "Active",
    date: "Jan 24, 2022",
  },
  {
    name: "Black, Marvin",
    id: "2006754632",
    category: "Corporate",
    principal: "NGN 10,000.00",
    alias1: "bigbear444",
    alias2: "brownfish268",
    status: "Liquidated",
    date: "Jan 24, 2022",
  },
  {
    name: "Miles, Esther",
    id: "2006754632",
    category: "Individual",
    principal: "NGN 10,000.00",
    alias1: "whiteswan331",
    alias2: "bluebear234",
    status: "Active",
    date: "Jan 24, 2022",
  },
  {
    name: "Black, Marvin",
    id: "2006754632",
    category: "Corporate",
    principal: "NGN 10,000.00",
    alias1: "bigbear444",
    alias2: "brownfish268",
    status: "Liquidated",
    date: "Jan 24, 2022",
  },
];

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer); // Cleanup the timeout
  }, []);

  const breadcrumbsData = [
    {
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      label: "Nintendo",
      path: "/dashboard/nintendo/",
    },
  ];

  return (
    <PublicLayout className="bg-gray-300" breadcrumbTitle={"Nintendo"} breadcrumb={breadcrumbsData}>
      {loading ? (
        <Loading />
      ) : (
        <div className="p- max-w-full overflow-x-auto">
          <div className="flex justify-end items-center mb-4 flex-wrap gap-4">
            <Link
              href={"/dashboard/nintendo/new-request"}
              className="flex items-center bg-[#B02A2A] text-white px-4 py-2 rounded-md text-[.7rem] gap-1"
            >
              <FaCircle /> <span>New Request</span> <FaChevronDown />
            </Link>
          </div>

          <div className="flex text-[.7rem] space-x-2 border-b border-gray-200 w-full text-sm my-2">
            <p className="text-gray-500">Individual</p>
            <p className="text-gray-500">Corporate</p>
          </div>

          <main className="p-2 bg-white">
            <div className="md:flex md:justify-between items-center gap-4 mb-4">
              <div className="flex items-center space-x-2">
                <div className="sm:flex bg-gray-200 border border-gray-300 gap-2 text-[.72rem] font-medium p-1 rounded-md">
                  <button className="text-[#B02A2A] bg-white px-1 py-1 rounded">All Records</button>
                  <button className="px-1 py-1 rounded">Request</button>
                </div>
                <div className="border-l border-gray-200 flex flex-col justify-center p-2 text-black">
                  <p className="text-[.65rem]">All</p>
                  <p className="text-base font-semibold">100</p>
                </div>
                <div className="border-l border-gray-200 flex flex-col justify-center p-2 text-black">
                  <p className="text-[.65rem] text-[#B02A2A]">Active</p>
                  <p className="text-base font-semibold">90</p>
                </div>
                <div className="border-l border-gray-200 flex flex-col justify-center p-2 text-black">
                  <p className="text-[.65rem]">Liquidated</p>
                  <p className="text-base font-semibold">143</p>
                </div>
              </div>
              <Link
                href="#"
                className="flex items-center border bg-transparent w-fit border-[#B02A2A] text-[#B02A2A] px-2 py-2 rounded-md text-[.7rem] gap-1"
              >
                <span>Created by System-wide</span> <FaChevronDown />
              </Link>
            </div>
            <div className="md:flex md:justify-between items-center gap-4 mb-4">
              <div className="flex justify-between items-center mb-4">
                <div className="sm:flex items-center space-x-2">
                  <Link
                    href="#"
                    className="flex items-center border bg-transparent border-gray-200 text-black px-2 py-2 rounded-md text-[.7rem] font-semibold gap-1"
                  >
                    <span>Table Search Query</span> <FaChevronDown />
                  </Link>
                  <div className="flex items-center border border-gray-200 rounded space-x-2 p-1">
                    <CiSearch size={15} />
                    <input
                      type="text"
                      placeholder="Search Parameter"
                      className="bg-transparent text-[.7rem]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="text-[.7rem] text-[#B02A2A] bg-[#ddd0d0] p-1 rounded-md gap-1 flex items-center">
                  <IoReload /> Refresh Table
                </button>
                <button className="text-[.7rem] text-[#B02A2A] bg-[#ddd0d0] p-1 rounded flex items-center">
                  <IoDocumentText /> Download Table
                </button>
              </div>
            </div>

            <div className="w-full overflow-x-auto">
              <table className="min-w-full">
                <thead className="text-xs md:text-sm">
                  <tr>
                    <th className="p-2 text-left font-light">Customer Name/ID</th>
                    <th className="p-2 text-left font-light">
                      <span className="flex gap-2 items-center text-nowrap">
                        Customer Category <TbFilterCheck />
                      </span>
                    </th>
                    <th className="p-2 text-left font-light">Principal</th>
                    <th className="p-2 text-left font-light">
                      <span className="flex gap-2 items-center text-nowrap">
                        User Alias <TbFilterCheck />
                      </span>
                    </th>
                    <th className="p-2 text-left font-light">
                      <span className="flex gap-2 items-center text-nowrap">
                        Status <TbFilterCheck />
                      </span>
                    </th>
                    <th className="p-2 text-left font-light">
                      <span className="flex gap-2 items-center text-nowrap">
                        Last Updated <TbFilterCheck />
                      </span>
                    </th>
                    <th className="p-2 text-left font-light">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, idx) => (
                    <tr
                      key={idx}
                      className={`text-[.7rem] rounded ${
                        idx % 2 === 0 ? "bg-[#F9F9F9]" : "bg-white"
                      }`}
                    >
                      <td className="p-2 whitespace-nowrap">
                        <div>{user.name}</div>
                        <div className="text-gray-500">{user.id}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">{user.category}</td>
                      <td className="p-2 whitespace-nowrap">{user.principal}</td>
                      <td className="p-2 whitespace-nowrap">
                        <div>{user.alias1}</div>
                        <div className="text-gray-500">{user.alias2}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 rounded-full text-black w-fit border flex items-center gap-1 text-[.7rem] ${
                            user.status === "Active"
                              ? "border-[#B02A2A] bg-[#ddd0d0]"
                              : "bg-gray-300 border-gray-600"
                          }`}
                        >
                          {user.status === "Active" && (
                            <FaCheckCircle size={10} className="text-[#B02A2A]" />
                          )}
                          {user.status === "Liquidated" && (
                            <FaPause size={12} className="text-gray-700" />
                          )}
                          {user.status}
                        </span>
                      </td>
                      <td className="p-2 whitespace-nowrap">{user.date}</td>
                      <td className="p-2 text-gray-900">
                        <RxHamburgerMenu />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      )}
    </PublicLayout>
  );
}