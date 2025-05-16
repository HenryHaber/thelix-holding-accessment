"use client"

import { Box, Heading } from "@chakra-ui/layout";
import Loading               from '@/components/Loading'
import {useEffect, useState} from 'react';
import { IoSettings } from "react-icons/io5";
import Link from "next/link";
import menuItems from '@/data/menu-items.json'



export default  function dashboard(){

  const [loading, setLoading] = useState(true);
  const user =
      {
        "name":"Eric Omotolani"
      }


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer); // Cleanup the timeout
  }, [user]);


  const CardGrid = () => {
    return (
        <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-4 space-y-2'}>
          {menuItems.map((item, index) => (
              <div key={index} className={'flex relative justify-center flex-1 min-h-40 sm:min-60 max-w-full flex-col gap-3 my-4 bg-white p-5 rounded-2xl'}>
                <h3 className={'font-normal text-2xl'}>{item.name}</h3>
                {item.quantity && (
                    <span className={'font-bold flex p-3 w-10 h-10 items-center justify-center right-2 top-2 absolute bg-black text-amber-50 rounded-full text-xl'}>
                      {item.quantity}
                    </span>
                  )}
                <Link href={item.link} className={'text-[0.86rem] w-fit font-thin '}>View more</Link>
              </div>
          ))}
        </div>
    );
  };

    return(
      <Box>
        {loading ? <Loading /> :  (
          <div>
            <div>
              <h3 className={'font-bold text-3xl'}>
                Hello {user.name}
              </h3>
              <p className={'text-lg font-thin'}>Welcome to your dashboard</p>
            </div>
            <CardGrid />
          </div>
        )}
      </Box>
  )
}
