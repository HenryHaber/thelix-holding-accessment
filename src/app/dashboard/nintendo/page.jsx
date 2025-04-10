"use client"

import { Box, Heading } from "@chakra-ui/layout";
import Dashboard        from '@/components/user.dashboard';
import Loading               from '@/components/Loading'
import {useEffect, useState} from 'react';
import PublicLayout                  from '@/components/PublicLayout';
import {FaChevronRight, FaEllipsisV} from 'react-icons/fa';
import {HiUsers} from 'react-icons/hi';
import Link from 'next/link'
import Image from 'next/image'

const users = [
  {
    name: 'Miles, Esther',
    id: '2006754632',
    category: 'Individual',
    principal: 'NGN 10,000.00',
    alias1: 'whiteswan331',
    alias2: 'bluebear234',
    status: 'Active',
    date: 'Jan 24, 2022',
  },
  {
    name: 'Black, Marvin',
    id: '2006754632',
    category: 'Corporate',
    principal: 'NGN 10,000.00',
    alias1: 'bigbear444',
    alias2: 'brownfish268',
    status: 'Liquidated',
    date: 'Jan 24, 2022',
  },
  {
    name: 'Miles, Esther',
    id: '2006754632',
    category: 'Individual',
    principal: 'NGN 10,000.00',
    alias1: 'whiteswan331',
    alias2: 'bluebear234',
    status: 'Active',
    date: 'Jan 24, 2022',
  },
  {
    name: 'Black, Marvin',
    id: '2006754632',
    category: 'Corporate',
    principal: 'NGN 10,000.00',
    alias1: 'bigbear444',
    alias2: 'brownfish268',
    status: 'Liquidated',
    date: 'Jan 24, 2022',
  },
  {
    name: 'Miles, Esther',
    id: '2006754632',
    category: 'Individual',
    principal: 'NGN 10,000.00',
    alias1: 'whiteswan331',
    alias2: 'bluebear234',
    status: 'Active',
    date: 'Jan 24, 2022',
  },
  {
    name: 'Black, Marvin',
    id: '2006754632',
    category: 'Corporate',
    principal: 'NGN 10,000.00',
    alias1: 'bigbear444',
    alias2: 'brownfish268',
    status: 'Liquidated',
    date: 'Jan 24, 2022',
  },
  {
    name: 'Miles, Esther',
    id: '2006754632',
    category: 'Individual',
    principal: 'NGN 10,000.00',
    alias1: 'whiteswan331',
    alias2: 'bluebear234',
    status: 'Active',
    date: 'Jan 24, 2022',
  },
  {
    name: 'Black, Marvin',
    id: '2006754632',
    category: 'Corporate',
    principal: 'NGN 10,000.00',
    alias1: 'bigbear444',
    alias2: 'brownfish268',
    status: 'Liquidated',
    date: 'Jan 24, 2022',
  },
  {
    name: 'Miles, Esther',
    id: '2006754632',
    category: 'Individual',
    principal: 'NGN 10,000.00',
    alias1: 'whiteswan331',
    alias2: 'bluebear234',
    status: 'Active',
    date: 'Jan 24, 2022',
  },
  {
    name: 'Black, Marvin',
    id: '2006754632',
    category: 'Corporate',
    principal: 'NGN 10,000.00',
    alias1: 'bigbear444',
    alias2: 'brownfish268',
    status: 'Liquidated',
    date: 'Jan 24, 2022',
  },
];


export default  function dashboard(){

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer); // Cleanup the timeout
  }, []);
  const breadcrumbsData = [
    {
      label: 'Dashboard',
      path: '/dashboard',
    },
    {
      label: 'Nintendo',
      path: '/dashboard/nintendo/',
    },
  ];

    // const {  user, loading} = useAuth();
    return(
      <PublicLayout breadcrumbTitle={'Nintendo'} breadcrumb={breadcrumbsData}>
        {loading ? <Loading /> :  (
           <div className="p- max-w-full overflow-x-auto">
           <div className="flex justify-end items-center mb-4 flex-wrap gap-4">

             <Link href={'/dashboard/nintendo/new-request'} className="bg-[#B02A2A] text-white px-4 py-2 rounded-md text-sm font-semibold">New Request
             </Link>
           </div>

           <div className="flex flex-wrap  justify-between items-center gap-4 mb-4">
             <div className="flex gap-2 text-sm bg-gray-200 font-medium p-2 rounded-md">
               <button className="text-[#B02A2A] bg-white px-3 py-1 rounded">All Records</button>
               <button className="bg-gray-200 px-3 py-1 rounded">Request</button>
             </div>
             <div className="flex gap-2">
               <button className="text-sm border px-3 py-1 rounded border-gray-300">Refresh Table</button>
               <button className="text-sm bg-[#B02A2A] text-white px-3 py-1 rounded">Download Table</button>
             </div>
           </div>

           <div className="mb-4">
             <input
               type="text"
               placeholder="Search Parameter"
               className="w-full md:w-1/3 p-2 border border-gray-300 rounded"
             />
           </div>

           <div className="w-full overflow-x-auto">
             <table className="min-w-full border border-gray-200">
               <thead className="bg-gray-100 text-xs md:text-sm">
                 <tr>
                   <th className="p-2 text-left">Customer Name/ID</th>
                   <th className="p-2 text-left">Customer Category</th>
                   <th className="p-2 text-left">Principal</th>
                   <th className="p-2 text-left">User Alias</th>
                   <th className="p-2 text-left">Status</th>
                   <th className="p-2 text-left">Last Updated</th>
                   <th className="p-2 text-left">Action</th>
                 </tr>
               </thead>
               <tbody>
                 {users.map((user, idx) => (
                   <tr key={idx} className="text-xs md:text-sm border-t border-gray-100">
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
                       <span className={`px-2 py-1 rounded-full text-white text-xs ${user.status === 'Active' ? 'bg-green-600' : 'bg-gray-500'}`}>{user.status}</span>
                     </td>
                     <td className="p-2 whitespace-nowrap">{user.date}</td>
                     <td className="p-2 text-gray-600">
                       <FaEllipsisV />
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
         </div>
        )}
      </PublicLayout>
  )
}
